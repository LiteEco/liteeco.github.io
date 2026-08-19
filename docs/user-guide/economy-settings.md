---
title: Economy Settings
sidebar_position: 3
description: "How setup economy multiple currencies"
---

# 💰 Economy Settings – MultiCurrencies

LiteEco supports **multiple currencies** with fully customizable names, formats, limits, and more. This allows server owners to define how virtual money behaves and appears for players.

All currency settings are defined in the `config.yml` under the `economy:` section.

---

## ⚙️ Basic Structure

```yaml
economy:
  currencies:
    dollars:
      currency_plural_name: dollars
      currency_singular_name: dollar
      currency_format: "$ <money>"
      starting_balance: 30
      balance_limit: 1000000
      balance_limit_check: true
      compact_display: false
      top_balances:
        filtering: true
        blacklist:
          - ExamplePlayerName
          - TestAccount123
          - Notch
  monolog_activity: true
```

> Note: In this example, the `top_balances` section has been updated — it now uses a simple boolean `filtering` and a `blacklist` list for excluding names from the Top Balances / Top Leaders rankings.

---

## 🏦 Currencies

### ➤ `currencies`

This section allows you to define **one or more currencies**. Each currency is represented by a unique key (e.g. `dollars`, `credits`).

> ⚠️ **Important:** Do **not** rename existing currency keys if your server already stores data — these keys are linked to database tables.

---

## 🔑 Currency Options

Each currency supports the following options:

| Option                   | Description                                                                       |
| ------------------------ | --------------------------------------------------------------------------------- |
| `currency_plural_name`   | Plural form (e.g. _dollars_).                                                     |
| `currency_singular_name` | Singular form (e.g. _dollar_).                                                    |
| `currency_format`        | Format for displaying money. Use `<money>` as a placeholder. Example: `$ <money>` |
| `starting_balance`       | Amount given to new players without an existing account.                          |
| `balance_limit`          | Maximum allowed balance for a player.                                             |
| `balance_limit_check`    | Enables or disables enforcement of the balance limit.                             |
| `compact_display`        | If `true`, large numbers will be shortened (e.g. `1M` instead of `1000000`).      |

---

## 🔎 New: Name Filtering in Top Balances / Top Leaders

To improve control over who appears in the Top Balances (Top Leaders) ranking, a simple configuration for name filtering has been added.

### ➤ Structure

```yaml
top_balances:
  filtering: true # enables/disables name filtering
  blacklist:
    - ExamplePlayerName
    - TestAccount123
    - Notch
```

### ➤ Field Descriptions

- `filtering` (`true` / `false`) — when set to `true`, the `blacklist` will be applied when building the Top Balances list. Names listed in the blacklist will be **excluded**. When set to `false`, the blacklist is ignored.
- `blacklist` — a list of player names that should be excluded from the Top Balances results. Use exact usernames.

**Notes & Recommendations**

- Filtering is case-sensitive and compares exact player names.
- In future versions, a `mode` option (e.g. `blacklist` / `whitelist`) may be added, but the current implementation only supports `filtering` + `blacklist`.

---

## 📄 Example – Additional Currency with Filtering

```yaml
credits:
  currency_plural_name: credits
  currency_singular_name: credit
  currency_format: "€ <money>"
  starting_balance: 30
  balance_limit: 1000000
  balance_limit_check: true
  compact_display: false
  top_balances:
    filtering: false
    blacklist: []
```

---

## 📜 Activity Logging

### ➤ `monolog_activity`

- **Type**: `true` / `false`
- **Default**: `true`
- When enabled, all economy actions such as `/eco add`, `/eco set`, `/eco withdraw`, `/eco pay`, etc., will be logged.
- View logs using:

```bash
/eco monolog [player]
```

---

:::tip

- Always include a default currency (like `dollars`) for Vault compatibility.
- Use meaningful names and formats to enhance player immersion.
- Compact formatting is useful for large-scale economies.
- Use `balance_limit_check: false` for unlimited balances.
- Use `top_balances.filtering: true` with a `blacklist` to exclude test or admin accounts from public leaderboards.
  :::

---

Would you like me to also include an example output of `/money top` before and after filtering (for clarity in documentation)?
