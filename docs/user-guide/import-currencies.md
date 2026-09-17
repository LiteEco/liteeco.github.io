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
/eco database import <argument> <into_currency> [--from <currency>]
```

### ➤ Description

This command imports economy data from supported plugins directly into LiteEco. It now supports multi-currency migration, allowing you to import specific currencies from external plugins and assign them to your corresponding LiteEco currencies defined in the `config.yml`.

---

## ⚙️ Arguments

| Argument            | Description                                            |
| ------------------- | ------------------------------------------------------ |
| `EssentialsX`       | Imports balances from the **EssentialsX** plugin.      |
| `BetterEconomy`     | Imports balances from **BetterEconomy** plugin.        |
| `ScruffyBoyEconomy` | Imports balances from **ScruffyBoyEconomy** plugin.    |
| `EzEconomy`         | Imports balances from the **EzEconomy** plugin.        |
| `SimpleEconomy`     | Imports player data from the **SimpleEconomy** plugin. |
| `TheosisEconomy`    | Imports balances from **TheosisEconomy** plugin.       |
| `PlayerPoints`      | Imports balances from **PlayerPoints** plugin.         |

---

## 💰 Currency Parameter

The `<into_currency>` argument refers to any currency key defined in your `config.yml` file under the `economy:` section of LiteEco.

Example configuration:

```yaml
economy:
  currencies:
    dollars:
      currency_name: Dollars
      currency_format: "$ <money>"
    credits:
      currency_name: Credits
      currency_format: "€ <money>"
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

Import from **EzEconomy** into the dollars LiteEco currency from dollar currency:

```bash
/eco database import EzEconomy dollars --from dollar
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

| Argument            | Source Plugin                 | Import Target    |
| ------------------- | ----------------------------- | ---------------- |
| `EssentialsX`       | EssentialsX      | LiteEco database |
| `CMI`       | CMI      | LiteEco database |
| `BetterEconomy`     | BetterEconomy     | LiteEco database |
| `ScruffyBoyEconomy` | ScruffyBoyEconomy | LiteEco database |
| `EzEconomy`         | EzEconomy     | LiteEco database |
| `SimpleEconomy`     | SimpleEconomy | LiteEco database |
| `TheosisEconomy`    | TheosisEconomy       | LiteEco database |
| `PlayerPoints`      | PlayerPoints        | LiteEco database |

---

This command provides a reliable and efficient way to transition your server’s economic data from other economy systems into LiteEco while preserving player balances and currency structure.
