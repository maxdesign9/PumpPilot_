# PumpPilot - AI-Powered Trading Platform

## Powered By DeepSeek

PumpPilot is an innovative trading assistant designed to leverage AI tools for optimizing token charts and trends, focusing on new token pairs and promoting bullish activity within the ecosystem. The platform integrates real-time analytics, precise execution strategies, and automated tools to empower traders and communities alike.

![PumpPilot](icons/pumppilot.png)


## 🚀 Features

### 🔎 Real-Time Analytics
- Display of live token charts (PumpFun pairs and beyond) with dynamic data from Solana-based tokens.
- Integration with **Dexscreener API** for OHLCV chart data, trading volume, liquidity, and token performance.

### ⚙️ AI-Powered Strategies
- Configurable AI-driven trading strategies:
  - **Scalping**
  - **Swing Trading**
  - **Day Trading**
  - **Position Holding**
- Execution speed settings: **Slow**, **Medium**, **Fast**.
- Automated stop-loss and take-profit configurations.

### 🎯 Goal-Oriented Design
- Promote token visibility through bullish chart activity.
- Focused on new token pairs on Solana and PumpFun before their migration to Raydium.

### 🌈 Modern UI/UX
- Dark theme with gradient and glowing spotlights for an immersive trading experience.
- Responsive design, optimized for both desktop and mobile.

---

## 🛠️ Technical Details

### Backend
- Built with **Node.js** and **Express.js**.
- Uses **MongoDB** for user data, project configuration, and analytics storage.
- Secured with **JWT-based authentication**.
- Implements **Solana RPC nodes** for blockchain interactions and real-time data fetching.

### Frontend
- Developed using **React** with **Vite.js** for fast builds.
- Integrated with **Tailwind CSS** for a sleek, customizable design.
- Real-time charts powered by **Chart.js** and **Dexscreener API**.
- Web3 interactions via **Phantom Wallet** SDK.

### APIs
- **Dexscreener API** for token data (price, volume, liquidity, etc.).
- **Solana Tracker API** for blockchain analytics.

### Database Structure
**Firebase Firestore**

users/ {walletAddress}/ projects/ {projectId}/ - name - status - createdAt - updatedAt - projectGoals - tokenAddress - budget - maxBudgetPerTrade - tradingStrategy - autoTrade - executionSpeed - budgetAllocation - stopLoss - takeProfit


---

## 🖥️ Deployment

The project is deployed on **Vercel**:
1. **Frontend**: React client (`/client`) configured with Vercel for fast and reliable hosting.
2. **Backend**: Node.js server (`/server`) deployed on Vercel for API endpoints.

---

## 🌟 Design Philosophy

PumpPilot aims to provide a seamless and visually engaging platform for traders. The gradient-based UI with glowing effects mimics the dynamic nature of markets, creating an intuitive experience. The "spotlight" design highlights actionable areas, focusing user attention.

---

## 📈 Roadmap

- **Phase 1**: Complete real-time charting for PumpFun tokens.
- **Phase 2**: Extend support for Raydium pairs post-migration.
- **Phase 3**: Introduce advanced AI strategies and analytics for wallet-specific recommendations.
- **Phase 4**: Enable community-driven trading events to amplify token trends.

---

## 🧑‍💻 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit changes: `git commit -m "Add feature"`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 📞 Support

For inquiries, feature requests, or bug reports, please contact us at [support@pumppilot.app](mailto:support@pumppilot.app).

---
