---
title: Commands & Permissions
sidebar_position: 5
description: "All commands and permissions in plugin"
---

# 💰 LiteEco Plugin – Command Reference

## 📋 **Commands Overview**

***

## 👤 Player Commands

> Permission: `lite.eco.player`

### `/money`

-   **Description:** Main player command
    
-   **Permission:** `lite.eco.money`
    

### `/money help`

-   **Description:** Show command list
    
-   **Permission:** `lite.eco.help`
    

### `/money bal [player] [currency]`

-   **Description:** Check your or another player’s balance
    
-   **Permissions:**
    
    -   `lite.eco.balance`: Basic access
        
    -   `lite.eco.balance.your_currency`: For specific currencies
        
    -   `lite.eco.balance.others`: View others' balances
        
    -   `lite.eco.balance.*`: Full access
        

### `/money top [page] [currency]`

-   **Description:** Show the richest players
    
-   **Permission:** `lite.eco.top`
    

### `/money pay <player> <amount> [currency]`

-   **Description:** Send money to another player
    
-   **Permissions:**
    
    -   `lite.eco.pay.your_currency`: Pay with selected currency
        
    -   `lite.eco.pay.*`: All currencies
        

***

## 🛠️ Admin Commands

> Permission: `lite.eco.admin`

-   `lite.eco.suggestion.players`: Suggest player nicknames to admins
    

### `/eco`

-   **Description:** Main admin command
    
-   **Permission:** `lite.eco.admin.eco`
    

### `/eco help`

-   **Description:** Show admin commands
    
-   **Permission:** `lite.eco.admin.help`
    

***

### `/eco add <player> <amount> [currency]`

-   **Description:** Add money to a player
    
-   **Note:** Works with vanilla selectors like `@a` (for offline too)
    
-   **Examples:**
    
    -   `/eco add Notch 15 dollars`
        
    -   `/eco add @a 15 dollars`
        
-   **Permission:** `lite.eco.admin.add`
    

### `/eco set <player> <amount> [currency]`

-   **Description:** Set player's balance
    
-   **Note:** Use `@a` when no players online
    
-   **Permission:** `lite.eco.admin.set`
    

### `/eco withdraw <player> <amount> [currency]`

-   **Description:** Withdraw from player's account
    
-   **Note:** Vanilla selector compatible
    
-   **Permission:** `lite.eco.admin.withdraw`
    

### `/eco delete <account> [currency]`

-   **Description:** Delete player's account and balance
    
-   **Example:** `/eco delete Notch dollars`
    
-   **Permission:** `lite.eco.admin.delete`
    

### `/eco monolog [page] [player]`

-   **Description:** View transaction logs
    
-   **Example:** `/eco monolog 1 Notch`
    
-   **Permission:** `lite.eco.admin.monolog`
    

----------

### `/eco database purge <argument> [currency]`

-   **Description:** Purge data from database
    
-   **Arguments:**
    
    -   `ACCOUNTS`: All accounts
        
    -   `NULL_ACCOUNTS`: Accounts with no name
        
    -   `DEFAULT_ACCOUNTS`: Default balances
        
    -   `MONOLOG`: Transaction logs
        
-   **Example:** `/eco database purge ACCOUNTS dollars`
    
-   **Permission:** `lite.eco.admin.purge`
    

### `/eco database export <argument> [currency]`

-   **Description:** Export database
    
-   **Formats:** `SQL`, `CSV`, `LEGACY_TO_NEW`, `SQL_LITE_FILE`
    
-   **Permission:** `lite.eco.admin.export`
    

### `/eco database import <plugin> [currency]`

-   **Description:** Import from other plugins
    
-   **Plugins:** `EssentialsX`, `BetterEconomy`, `ScruffyBoyEconomy`, `CraftConomy3`, `TheosisEconomy`
    
-   **Permission:** `lite.eco.admin.import`
    

***

### `/eco config lang <lang_key>`

-   **Description:** Change plugin language
    
-   **Languages:** `CS_CZ`, `EN_US`, `ES_ES`, `JA_JP`, `DE_DE`, `PL_PL`, `PT_BR`, `TR_TR`, `ZH_CN`
    
-   **Example:** `/eco config lang CS_CZ`
    
-   **Permission:** `lite.eco.admin.lang`
    

### `/eco config reload`

-   **Description:** Reload plugin config
    
-   **Permission:** `lite.eco.admin.reload`

***

## 🐞 Debug Commands
:::tip
Please before you try debug commands read information [View](/user-guide/debugging)
:::

:::danger
These commands are intended for server administrators and developers to diagnose issues. Use with caution.
:::

### `/eco debug failmode`

-   **Description:** Toggles database error simulation on/off.
    
-   **Permission:** `lite.eco.admin.debug.failmode`
    

### `/eco debug test-janitor <player>`

-   **Description:** Runs an automated test simulating a database error and credits $500.
    
-   **Permission:** `lite.eco.admin.debug.testjanitor`
    

### `/eco debug janitor`

-   **Description:** Immediately triggers automatic synchronization.
    
-   **Permission:** `lite.eco.admin.debug.janitor`
    

### `/eco debug inspect <player>`

-   **Description:** Displays a detailed readout of the player's internal cache.
    
-   **Permission:** `lite.eco.admin.debug.inspect`
    

### `/eco debug stress <player> [iterations]`

-   **Description:** Runs a concurrent stress test for transaction atomicity.
    
-   **Permission:** `lite.eco.admin.debug.stress`