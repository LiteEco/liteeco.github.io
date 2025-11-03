---
title: Import & Currencies
sidebar_position: 8
description: "How import currencies into LiteEco from 3rd plugins"
---

# 💾 Database Import Command – LiteEco

LiteEco provides a powerful import system for migrating player balance data from other popular economy plugins into the LiteEco database. This allows for smooth transitions between plugins without data loss.

---

## 🧩 Command Overview

```bash
/eco database import <argument> <currency>
```

### ➤ Description
This command imports economy data from supported plugins directly into LiteEco. The imported balances will be assigned to the specified LiteEco currency defined in your `config.yml`.

---

## ⚙️ Arguments

| Argument | Description |
|-----------|--------------|
| `EssentialsX` | Imports player balances from the **EssentialsX** plugin. |
| `BetterEconomy` | Imports data from **BetterEconomy** plugin storage. |
| `ScruffyBoyEconomy` | Imports balances from **ScruffyBoyEconomy** plugin. |
| `CraftConomy3` | Imports player data from the **CraftConomy3** database or storage files. |
| `SimpleEconomy` | Imports player data from the **SimpleEconomy** database or storage files. |
| `TheosisEconomy` | Imports balances from **TheosisEconomy** plugin. |

---

## 💰 Currency Parameter

The `<currency>` argument refers to any currency key defined in your `config.yml` file under the `economy:` section of LiteEco.

Example configuration:

```yaml
economy:
  currencies:
    dollars:
      currency_name: Dollars
      currency_format: '$ <money>'
    credits:
      currency_name: Credits
      currency_format: '€ <money>'
```

When importing, specify which LiteEco currency should receive the imported data:

```bash
/eco database import EssentialsX dollars
```

This will import all EssentialsX balances into the LiteEco currency `dollars`.

---

## 💡 Usage Examples

Import data from **EssentialsX** into the `dollars` currency:
```bash
/eco database import EssentialsX dollars
```

Import data from **BetterEconomy** into the `credits` currency:
```bash
/eco database import BetterEconomy credits
```

Import from **CraftConomy3** into the default LiteEco currency:
```bash
/eco database import CraftConomy3 dollars
```

---

## 🧠 Notes & Recommendations

- Always **back up your databases** before performing imports.
- The import process reads data directly from the existing plugin’s database or data files.
- Make sure the source plugin’s data files or database are still accessible when running the command.
- Imported balances will overwrite any existing player data for the specified currency.
- The plugin automatically maps player UUIDs and usernames during import.
- Depending on the data size, imports may take a few seconds to complete.

---

## ✅ Quick Summary

| Argument | Source Plugin | Import Target |
|-----------|----------------|----------------|
| `EssentialsX` | EssentialsX economy data | LiteEco database |
| `BetterEconomy` | BetterEconomy plugin data | LiteEco database |
| `ScruffyBoyEconomy` | ScruffyBoyEconomy plugin data | LiteEco database |
| `CraftConomy3` | CraftConomy3 database/tables | LiteEco database |
| `SimpleEconomy` | SimpleEconomy database/tables | LiteEco database |
| `TheosisEconomy` | TheosisEconomy balances | LiteEco database |

---

This command provides a reliable and efficient way to transition your server’s economic data from other economy systems into LiteEco while preserving player balances and currency structure.

