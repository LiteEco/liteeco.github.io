---
title: Plugin Settings
sidebar_position: 1
description: "How setup LiteEco plugin"
---

# ⚙️ Plugin Settings

The `plugin` section in `config.yml` contains global configuration options that define the overall behavior of LiteEco. These settings control translation language, metrics, debug logging, and player name suggestions.

---

## 🔧 Configuration Example

```yaml
plugin:
  translation: EN_US
  prefix: "<dark_gray>[<green>Eco<dark_gray>] <dark_green>»</dark_gray>"
  metrics: true
  vault_debug: false
  offline_suggestion_players: true
```

---

## 🗣️ `translation`

- **Type:** `String`  
- **Default:** `EN_US`  
- Sets the language used for all plugin messages and system outputs.
- Available translations can be found here:  
  🔗 [Supported Locales](https://github.com/EncryptSL/LiteEco/tree/main/src/main/resources/locale)

---

## 🏷️ `prefix`

- **Type:** `String`  
- Defines the **prefix** displayed before all plugin messages in chat.
- Supports Minecraft MiniMessage format, e.g.:

  ```text
  <dark_gray>[<green>Eco<dark_gray>] <dark_green>»</dark_gray>
  ```

---

## 📊 `metrics`

- **Type:** `true` / `false`  
- **Default:** `true`  
- Enables [bStats](https://bstats.org/) usage tracking to anonymously collect plugin usage statistics.

---

## 🪛 `vault_debug`

- **Type:** `true` / `false`  
- **Default:** `false`  
- Enables **Vault debug logging**, useful for diagnosing integration issues with Vault-based plugins.

---

## 👤 `offline_suggestion_players`

- **Type:** `true` / `false`  
- **Default:** `true`  
- Controls how player name suggestions behave in command inputs:
  - `true` – suggests **offline players**.
  - `false` – suggests **only online players**.
- This setting affects commands like `/eco pay`, `/eco set`, etc.

---

:::tip

- Always set a `prefix` that fits your server's theme for better player experience.
- If you're experiencing Vault compatibility issues, try setting `vault_debug` to `true` for detailed logs.
- For servers with many offline players, enabling `offline_suggestion_players` can help with economy management.
:::