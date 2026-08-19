---
title: Placeholders
sidebar_position: 6
description: "List of placeholders used in plugin"
---

With LiteEco's custom placeholders, you can effortlessly access various economy-related metrics and tailor the presentation to suit your server's unique style.

By leveraging custom placeholders provided by LiteEco, you can dynamically showcase crucial economic data to your players, enhancing their in-game experience.

## Requirements

To make use of the LiteEco custom placeholders, you need to download: [PlaceholderAPI][PAPI] or [MiniPlaceholders][MiniPlaceholders]

## PAPI Available Placeholders

- `%liteeco_balance_(currency)%`
  - Displays the raw balance output for the player.

- `%liteeco_balance_compacted_(currency)%`
  - Displays the balance in a compacted format, using metric prefixes to abbreviate large numbers.

- `%liteeco_balance_formatted_(currency)%`
  - Displays the balance in a fancy format, making it more visually appealing.

- `%liteeco_top_player_[position]_[currency]%`
  - Displays the name of the player at the specified position in the richest player list.

- `%liteeco_top_balance_[position]_[currency]%`
  - Displays the raw balance of the player at the specified position in the richest player list.
  - (The value is not limited) # Since version 1.4.2

- `%liteeco_top_compacted_[position]_[currency]%`
  - Displays the balance in a compacted format, using metric prefixes to abbreviate large numbers.
  - (The value is not limited) # Since version 1.4.2

- `%liteeco_top_formatted_[position]_[currency]%`
  - Displays the balance in a fancy format, from the player at the specified position in the richest player list.
  - (The value is not limited) # Since version 1.4.2

- `%liteeco_top_rank_player_[currency]>`
  - Displays rank 1 player from economy of your selected currency name of player
  - (This placeholder is new) # Since version 1.5.1

- `%liteeco_total_balance_[currency]>`
  - Displays the total balance from selected currency.
  - (This placeholder is new) # Since version 1.5.1

---

## Mini Available Placeholders

- `<lite-eco_balance:(currency)>`
  - Displays the raw balance output for the player.

- `<lite-eco_balance_compacted:(currency)>`
  - Displays the balance in a compacted format, using metric prefixes to abbreviate large numbers.

- `<lite-eco_balance_formatted:(currency)>`
  - Displays the balance in a fancy format, making it more visually appealing.

- `<lite-eco_top_player:[position]_[currency]>`
  - Displays the name of the player at the specified position in the richest player list.

- `<lite-eco_top_balance:[position]_[currency]>`
  - Displays the raw balance of the player at the specified position in the richest player list.
  - (The value is not limited) # Since version 1.4.2

- `<lite-eco_top_balance_compacted:[position]_[currency]>`
  - Displays the raw balance of the player at the specified position in the richest player list.
  - (The value is not limited) # Since version 1.4.2

- `<lite-eco_top_balance_formatted:[position]_[currency]>`
  - Displays the balance in a fancy format, from the player at the specified position in the richest player list.
  - (The value is not limited) # Since version 1.4.2

- `<lite-eco_top_rank_player:(currency)>`
  - Displays rank 1 player from economy of your selected currency name of player
  - (This placeholder is new) # Since version 1.5.1

- `<lite-eco_total_balance:(currency)>`
  - Displays the total balance from selected currency.
  - (This placeholder is new) # Since version 1.5.1

---

![hologram](https://user-images.githubusercontent.com/9441083/170329930-9e457436-fd89-4fde-ab19-0dbc843d12bd.png)

[Banner]: https://i.ibb.co/gvpv3CX/LiteEco.jpg
[PAPI]: https://github.com/PlaceholderAPI/PlaceholderAPI
[MiniPlaceholders]: https://github.com/MiniPlaceholders/MiniPlaceholders
