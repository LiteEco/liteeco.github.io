---
title: Debugging
sidebar_position: 9
description: "Debugging of plugin tests"
---

# 🛠️ Debugging & Integration Testing

This guide outlines the procedures for testing and debugging the LiteEco plugin, specifically focusing on data integrity and simulating database failure scenarios (addressing issues related to data persistence, such as Issue #118).

## 🧰 Debug Commands

LiteEco includes a built-in suite of debugging tools accessible via the `/eco debug` command. These tools are restricted to users with the `lite.eco.admin.debug.*` permission.

### 📋 Command Overview

| Command | Permission | Description |
| :--- | :--- | :--- |
| `/eco debug failmode` | `lite.eco.admin.debug.failmode` | Toggles DB failure simulation (all writes will throw an error). |
| `/eco debug test-janitor <player>` | `lite.eco.admin.debug.testjanitor` | Automated test: Activates FailMode and performs a deposit. |
| `/eco debug inspect <player>` | `lite.eco.admin.debug.inspect` | Displays the current cache state and unsaved player balances. |
| `/eco debug janitor` | `lite.eco.admin.debug.janitor` | Forces immediate synchronization of all offline players in the cache. |
| `/eco debug stress <player> [it]` | `lite.eco.admin.debug.stress` | Runs a stress test of simultaneous transactions (Atomicity test). |
| `/eco debug stress-shutdown [accounts]` | `lite.eco.admin.debug.stress` | Run global shutdown sync stress test on multiple cached accounts. |
| `/eco debug dupe-test <target> [source] [amount] [requests] [currency]` | `lite.eco.admin.debug.stress` | Runs a concurrent transfer dupe test to verify locks and prevent race conditions. |

---

## 🧪 Testing Scenarios

### 1. 🔌 Database Failure Persistence Test
This test verifies that if the database becomes unreachable, player data is not lost and remains safely in the cache until the connection is restored.

**Procedure:**
1. Execute the automated test: `/eco debug test-janitor <your_name>`.
   - *System activates FailMode and deposits 500 units into your account.*
2. Disconnect from the server.
3. Monitor the console for the following log entry:
   - `Sync FAIL for ...: Data preserved in cache for retry.`.
4. Inspect your cache: `/eco debug inspect <your_name>`.
   - *Verify that the data still exists in the cache as "pending sync".*
5. Disable the failure simulation: `/eco debug failmode`.
6. Force the cleanup: `/eco debug janitor`.
   - *The data should now successfully write to the DB, and the cache will be cleared.*

### 2. ⚡ Transaction Atomicity Stress Test
This test ensures the plugin correctly handles extreme, simultaneous requests (e.g., two different plugins calling Vault at the same time) without causing race conditions.

**Procedure:**
1. Run the test: `/eco debug stress <your_name> 100`.
2. The plugin creates 100 pairs of asynchronous threads (simultaneous deposit + withdraw).
3. Upon completion, your balance must be identical to your starting balance. If it differs, the cache locking mechanism (atomic operations) has failed.

### 3. 🚨 Global Shutdown Sync & Emergency Dump Test

:::warning
- This feature is implemented only in version 1.7.6 and above
:::

This test verifies the plugin's ability to handle high-volume batch synchronization during a server shutdown, confirming that an automatic emergency SQL dump file is generated if the database is unreachable to prevent data loss.

**Procedure:**
1. Enable failure simulation to block all database writes:
   - Execute: `/eco debug failmode`
   - *System toggles fail mode ON, forcing database operations to intentionally fail.*
2. Inject test accounts into the cache and prepare the shutdown state:
   - Execute: `/eco debug stress-shutdown [accounts]` *(e.g., `/eco debug stress-shutdown 500`)*
   - *System injects test accounts into the database, loads modified balances into the cache, and runs an initial sync check.*
3. Trigger a server shutdown to execute `onDisable()` hooks:
   - Execute in server console or as admin: `/stop`
4. Inspect the server log during shutdown for the emergency recovery message:
   - Look for the critical error output in the console:
     ```text
     -----------------------------------------------------------------
     [LiteEco] ERROR: Failed to sync cache data with the database!
     [LiteEco] A total of X account(s) could not be saved.
     [LiteEco] Reason: Shutdown sync completed with errors.
     [LiteEco]
     [LiteEco] To prevent data loss, the unsaved cache has been dumped to:
     [LiteEco] -> plugins/LiteEco/errors/restore_YYYY-MM-DD_HH-MM-SS.sql
     [LiteEco]
     [LiteEco] MANUAL RESTORE INSTRUCTIONS:
     [LiteEco] Open the SQL file above in your database tool (HeidiSQL, phpMyAdmin, DBeaver)
     [LiteEco] and execute it to manually update the player balances in the database.
     -----------------------------------------------------------------
     ```
5. Verify the generated emergency dump file on disk:
   - Start the server again and navigate to `plugins/LiteEco/errors/`.
   - Confirm that `restore_<timestamp>.sql` exists and contains batch `INSERT ... ON DUPLICATE KEY UPDATE` queries for all unsaved test accounts.
6. Test manual restoration:
   - Import and execute the generated `.sql` file using your database management tool (HeidiSQL, phpMyAdmin, or DBeaver) to verify that player balances can be successfully restored.
7. Clean up test data:
   - Purge generated test accounts from the database: `/eco database purge TEST_ACCOUNTS`

---

## ⚙️ Internal Mechanisms

### 🛟 Emergency Dump Mechanism
In production environments (outside of debug testing), the **Emergency Dump** serves as a final safety net to prevent data loss during server shutdowns or unrecoverable database outages.

* 💥 **Trigger Condition:** It activates automatically during plugin shutdown if the database is completely offline, unreachable, or if errors occur while writing cached balances to the database.
* 📄 **Output File:** All uncommitted player balances remaining in the cache are serialized into an SQL script saved in `plugins/LiteEco/errors/restore_YYYY-MM-DD_HH-MM-SS.sql`.
* 🛠️ **Manual Action Required:** The plugin **will not** automatically re-import this dump file on the next boot. Server administrators must manually import the `.sql` file into their database using a database management tool such as **phpMyAdmin**, **Adminer**, **HeidiSQL**, or **DBeaver**.

### ⚠️ FailMode Logic
The `failmode` command toggles a global boolean `DatabaseEcoModel.debugFailMode`. When enabled, every `set(uuid, currency, amount)` method in the database model immediately throws an `SQLException`.

### 🧹 Janitor Service
The Janitor is a background service designed to:
1. Iterate through all entries in the `PlayerAccount.cache`.
2. Filter for players who are currently **offline**.
3. Attempt to re-synchronize their data to the database.
4. If synchronization fails again, data is retained in the cache for the next cycle.

---