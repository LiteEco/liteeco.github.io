---
title: Database Settings
sidebar_position: 2
description: "How setup database connection"
---

---

# 📦 Database Settings

LiteEco supports multiple database types for storing plugin data, including **SQLite**, **MySQL**, **MariaDB**, and **PostgreSQL**.

You can configure the database connection in the `config.yml` file under the `database:` section.

---

## ⚙️ Configuration Example

```yaml
database:
  connection:
    driver_class_name: "org.sqlite.JDBC"
    jdbc_url: "jdbc:sqlite:plugins/LiteEco/database.db"
    username: user_name
    password: password

  sql_plugin_logger: false
```

---

## 🗃️ Supported Database Types

You can use any of the following database systems by setting the appropriate `driverClassName` and `jdbc_url`:

### • SQLite
- **JDBC URL**:  
  ```
  jdbc:sqlite:plugins/LiteEco/database.db
  ```
- **Driver**:  
  ```
  org.sqlite.JDBC
  ```

### • MySQL
- **JDBC URL**:  
  ```
  jdbc:mysql://your_host:port/name_of_database
  ```
- **Driver**:  
  ```
  com.mysql.cj.jdbc.Driver
  ```
- ⚠️ **Note**: Do **not** use this driver with MariaDB version 11.x or newer.

### • MariaDB
- **JDBC URL**:  
  ```
  jdbc:mariadb://your_host:port/name_of_database
  ```
- **Driver**:  
  ```
  org.mariadb.jdbc.Driver
  ```
- 🔗 [Driver issue reference (JetBrains)](https://youtrack.jetbrains.com/issue/EXPOSED-170)

### • PostgreSQL
- **JDBC URL**:  
  ```
  jdbc:postgresql://your_host:port/name_of_database
  ```
- **Driver**:  
  ```
  org.postgresql.Driver
  ```

---

## 🔐 Authentication

For **MySQL** and **MariaDB**, you must provide:

- `username`: The database user
- `password`: The user's password

These are not required for **SQLite**.

---

## 🛠️ Troubleshooting

- If you experience issues with SQL queries or connections, you can enable the plugin's internal SQL logger:

```yaml
sql_plugin_logger: true
```

This may help with debugging database-related problems.

---


:::tip

- Always verify your `driverClassName` matches the database type you're using.
- Ensure your database server allows external connections if you're hosting it remotely.
- When using SQLite, no external server is required – the database is stored locally.

:::