---
title: Commands & Permissions
sidebar_position: 5
description: "All commands and permissions in plugin"
---

# 💰 LiteEco Plugin – Command Reference

## 📋 **Commands Overview**

---

## 👤 Player Commands

> Permission: `lite.eco.player`

| Command | Description | Permissions |
| :--- | :--- | :--- |
| `/money` | Main player command | `lite.eco.money` |
| `/money help` | Show command list | `lite.eco.help` |
| `/money bal [player] [currency]` | Check your or another player’s balance | • `lite.eco.balance` (Basic access)<br/>• `lite.eco.balance.your_currency`<br/>• `lite.eco.balance.others`<br/>• `lite.eco.balance.*` (Full access) |
| `/money top [page] [currency]` | Show the richest players | `lite.eco.top` |
| `/money pay <player> <amount> [currency]`<br/>*(Alias: `/pay ...`)* | Send money to another player.<br/>*(Requires confirmation unless bypassed)* | • `lite.eco.pay.your_currency`<br/>• `lite.eco.pay.*`<br/>• `lite.eco.admin.bypass.confirmation` *(Bypass)* |

---

## 🛠️ Admin Commands

> Permission: `lite.eco.admin`  
> Extra Permission: `lite.eco.suggestion.players` (Suggest player nicknames to admins)

### General & Balance Management

| Command | Description | Notes / Examples | Permission |
| :--- | :--- | :--- | :--- |
| `/eco` | Main admin command | — | `lite.eco.admin.eco` |
| `/eco help` | Show admin commands | — | `lite.eco.admin.help` |
| `/eco create <account> [currency]` | Create a new economy account.<br/>*(Requires confirmation unless bypassed)* | **Bypass Perm:**<br/>`lite.eco.admin.bypass.confirmation` | `lite.eco.admin.create` |
| `/eco add <player> <amount> [currency]` | Add money to a player | **Compatible with vanilla selectors:**<br/>`/eco add Notch 15 dollars`<br/>`/eco add @a 15 dollars` | `lite.eco.admin.add` |
| `/eco set <player> <amount> [currency]` | Set player's balance | Uses `@a` when no players are online | `lite.eco.admin.set` |
| `/eco withdraw <player> <amount> [currency]` | Withdraw from player's account | Vanilla selector compatible | `lite.eco.admin.withdraw` |
| `/eco delete <account> [currency]` | Delete player's account and balance.<br/>*(Requires confirmation unless bypassed)* | **Example:** `/eco delete Notch dollars`<br/>**Bypass Perm:**<br/>`lite.eco.admin.bypass.confirmation` | `lite.eco.admin.delete` |
| `/eco monolog [page] [player]` | View transaction logs | **Example:** `/eco monolog 1 Notch` | `lite.eco.admin.monolog` |

### Database & Configuration Operations

| Command | Description | Details / Options | Permission |
| :--- | :--- | :--- | :--- |
| `/eco database purge <argument> [currency]` | Purge data from database.<br/>*(Requires confirmation unless bypassed)* | **Arguments:** `ACCOUNTS`, `TEST_ACCOUNTS`, `NULL_ACCOUNTS`, `DEFAULT_ACCOUNTS`, `MONOLOG`<br/>**Bypass Perm:** `lite.eco.admin.bypass.confirmation` | `lite.eco.admin.purge` |
| `/eco database export <argument> [currency]` | Export database.<br/>*(Requires confirmation unless bypassed)* | **Formats:** `SQL`, `CSV`, `LEGACY_TO_NEW`, `SQL_LITE_FILE`<br/>**Bypass Perm:** `lite.eco.admin.bypass.confirmation` | `lite.eco.admin.export` |
| `/eco database import <plugin> [into_currency] [--from <currency>]` | Import data from other plugins.<br/>*(Requires confirmation unless bypassed)* | **Plugins:** `EssentialsX`, `BetterEconomy`, `ScruffyBoyEconomy`, `EzEconomy`, `TheosisEconomy`, `CMIEconomy`<br/>**Bypass Perm:** `lite.eco.admin.bypass.confirmation` | `lite.eco.admin.import` |
| `/eco config lang <lang_key>` | Change plugin language | **Languages:** `CS_CZ`, `EN_US`, `ES_ES`, `JA_JP`, `DE_DE`, `PL_PL`, `PT_BR`, `TR_TR`, `ZH_CN` | `lite.eco.admin.lang` |
| `/eco config reload` | Reload plugin config | — | `lite.eco.admin.reload` |

---

## 🐞 Debug Commands

:::tip
Please before you try debug commands read information [View](/user-guide/debugging)
:::

:::danger
These commands are intended for server administrators and developers to diagnose issues. Use with caution.
:::

| Command | Description | Permission |
| :--- | :--- | :--- |
| `/eco debug failmode` | Toggles database error simulation on/off. | `lite.eco.admin.debug.failmode` |
| `/eco debug test-janitor <player>` | Runs an automated test simulating a database error and credits $500. | `lite.eco.admin.debug.testjanitor` |
| `/eco debug janitor` | Immediately triggers automatic synchronization. | `lite.eco.admin.debug.janitor` |
| `/eco debug inspect <player>` | Displays a detailed readout of the player's internal cache. | `lite.eco.admin.debug.inspect` |
| `/eco debug stress <player> [iterations]` | Runs a concurrent stress test for transaction atomicity. | `lite.eco.admin.debug.stress` |
| `/eco debug stress-shutdown [accounts]` | Run global shutdown sync stress test on multiple cached accounts. | `lite.eco.admin.debug.stress` |
| `/eco debug dupe-test <target> [source] [amount] [requests] [currency]` | Runs a concurrent transfer dupe test to verify thread-safety locks and race condition prevention. |`lite.eco.admin.debug.stress` |