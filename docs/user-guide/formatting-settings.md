---
title: Formatting Settings
sidebar_position: 4
description: "How setup currency formatting and placeholders"
---

# 🎨 Formatting Settings

The `formatting` section in `config.yml` controls how numbers, symbols, and placeholders are displayed across the server.

---

## ⚙️ Configuration Example

```yaml
formatting:
  currency_pattern: '#,##0.00'
  compacted_pattern: '#,##0.0##'
  currency_locale: en-US
  placeholders:
    empty_name: EMPTY
```

---

## 🔑 Configuration Options

### • `currency_pattern`
- **Type:** `String`
- **Default:** `'#,##0.00'`
- Defines the standard format for displaying currency numbers. For example, `1250.5` will be formatted as `1,250.50` under the default pattern.

### • `compacted_pattern`
- **Type:** `String`
- **Default:** `'#,##0.0##'`
- Defines the format used when `compact_display` is enabled for a currency. It ensures proper rounding and decimal behavior for shortened numbers (e.g., `1.5M`).

### • `currency_locale`
- **Type:** `String`
- **Default:** `en-US`
- The locale used to determine formatting symbols (like commas or dots for thousands and decimals) and currency symbols.

---

## 🪧 Placeholders

### • `placeholders.empty_name`
- **Type:** `String`
- **Default:** `EMPTY`
- Text that will be displayed in chat or menus when a name placeholder returns empty.