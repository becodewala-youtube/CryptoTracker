

# 📈 Crypto Tracker App



**Crypto Tracker** is a responsive web application built with **React** and **Redux Toolkit** that simulates real-time cryptocurrency market data. Inspired by platforms like CoinMarketCap, this project demonstrates real-time updates, dynamic UI rendering, and robust state management—all without relying on an external API.

This app is ideal for learning or showcasing how to manage live data feeds and UI state using Redux in a React environment.

---

## ✨ Features

- 🔁 **Real-Time Price Simulation**: Simulates WebSocket behavior using a mock data updater (`setInterval`), refreshing prices and percentage changes every 1–2 seconds.
- 📊 **Dynamic Asset Table**: Displays key market data for 5 top crypto assets like BTC, ETH, and USDT.
- 🎨 **Responsive UI with Visual Cues**: Color-coded percentage changes (green for positive, red for negative), and mobile-responsive layout.
- 📉 **7-Day Trend Chart**: Displays static SVG/image charts representing each asset’s 7-day price trend.
- 🧠 **Centralized State Management**: All data flows through Redux, with zero local state management in components.
- ⚡ **Optimized Re-renders**: Uses Redux selectors to prevent unnecessary UI updates.

---

## 🛠 Implementation

### Real-Time Data Simulation

- A custom **mock WebSocket** class or `setInterval()` is used to periodically update:
  - `price`, `1h %`, `24h %`, `7d %`, and `24h volume`.
- Each update is dispatched via a **Redux action**, modifying the global state.

### UI Table Layout

The asset table includes the following fields:

```
# | Logo | Name | Symbol | Price | 1h % | 24h % | 7d % | Market Cap | 24h Volume | Circulating Supply | Max Supply | 7D Chart
```

- Percentage changes are **color-coded** (green for gains, red for losses).
- Data-driven rendering ensures each asset is displayed dynamically.
- Table is responsive and mobile-friendly.

### Redux State Management

- Asset data is stored in a centralized Redux slice using **Redux Toolkit**.
- State updates flow only through Redux actions.
- Components use **memoized selectors** to access data, ensuring efficient rendering.

---

## ⚙️ Tech Stack + Architecture

### 🧰 Tech Stack

| Tool | Purpose |
|------|---------|
| **React** | UI library for component-based development |
| **Redux Toolkit** | Simplified Redux setup with slices and immutable updates |
| **React Redux** | Connects Redux store to React components |
| **Mock WebSocket / setInterval** | Simulates real-time data updates |
| **Chart.js / Static SVG** | Displays static 7D trend charts |
| **CSS Modules / TailwindCSS (optional)** | For responsive styling |

---

## Made with ❤️ by Vikash Kumar
