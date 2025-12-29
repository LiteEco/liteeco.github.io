---
title: Debugging
sidebar_position: 9
description: "Debugging of plugin tests"
---
# Debugging & Integration Testing

This guide outlines the procedures for testing and debugging the LiteEco plugin, specifically focusing on data integrity and simulating database failure scenarios (addressing issues related to data persistence, such as Issue #118).

## Debug Commands

LiteEco includes a built-in suite of debugging tools accessible via the `/eco debug` command. These tools are restricted to users with the `lite.eco.admin.debug.*` permission.

### Command Overview

| Command | Permission | Description |
| :--- | :--- | :--- |
| `/eco debug failmode` | `lite.eco.admin.debug.failmode` | Toggles DB failure simulation (all writes will throw an error). |
| `/eco debug test-janitor <player>` | `lite.eco.admin.debug.testjanitor` | Automated test: Activates FailMode and performs a deposit. |
| `/eco debug inspect <player>` | `lite.eco.admin.debug.inspect` | Displays the current cache state and unsaved player balances. |
| `/eco debug janitor` | `lite.eco.admin.debug.janitor` | Forces immediate synchronization of all offline players in the cache. |
| `/eco debug stress <player> [it]` | `lite.eco.admin.debug.stress` | Runs a stress test of simultaneous transactions (Atomicity test). |

---

## Testing Scenarios

### 1. Database Failure Persistence Test
This test verifies that if the database becomes unreachable, player data is not lost and remains safely in the cache until the connection is restored.

**Procedure:**
1. Execute the automated test: `/eco debug test-janitor <your_name>`.
   - *System activates FailMode and deposits 500 units into your account.*
2. Disconnect from the server.
3. Monitor the console for the following log entry:
   - `[LiteEco] Sync FAIL: ... Data preserved in cache`.
4. Reconnect and inspect your cache: `/eco debug inspect <your_name>`.
   - *Verify that the data still exists in the cache as "pending sync".*
5. Disable the failure simulation: `/eco debug failmode`.
6. Force the cleanup: `/eco debug janitor`.
   - *The data should now successfully write to the DB, and the cache will be cleared.*

### 2. Transaction Atomicity Stress Test
This test ensures the plugin correctly handles extreme, simultaneous requests (e.g., two different plugins calling Vault at the same time) without causing race conditions.

**Procedure:**
1. Run the test: `/eco debug stress <your_name> 100`.
2. The plugin creates 100 pairs of asynchronous threads (simultaneous deposit + withdraw).
3. Upon completion, your balance must be identical to your starting balance. If it differs, the cache locking mechanism (atomic operations) has failed.

---

## Internal Mechanisms

### FailMode Logic
The `failmode` command toggles a global boolean `DatabaseEcoModel.debugFailMode`. When enabled, every `set(uuid, currency, amount)` method in the database model immediately throws an `SQLException`.

### Janitor Service
The Janitor is a background service designed to:
1. Iterate through all entries in the `PlayerAccount.cache`.
2. Filter for players who are currently **offline**.
3. Attempt to re-synchronize their data to the database.
4. If synchronization fails again, data is retained in the cache for the next cycle.

---