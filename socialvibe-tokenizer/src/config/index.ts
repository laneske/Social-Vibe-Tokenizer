// Environment configuration for SocialVibe Tokenizer
// This file connects frontend to smart contracts

export const CONFIG = {
  // Network Configuration
  NETWORK: {
    NAME: "Localhost",
    RPC_URL: "http://127.0.0.1:8545",
    CHAIN_ID: 31337,
    BLOCK_TIME: 12, // seconds
  },

  // Smart Contract Configuration
  CONTRACTS: {
    SOCIAL_VIBE_NFT: {
      ADDRESS: "0x5FbDB2315678afecb367f032d93F642f64180aa3", // Update after deployment
      NAME: "SocialVibeNFT",
      SYMBOL: "SVIBE",
      FUNCTIONS: {
        MINT_VIBE_NFT: "mintVibeNFT",
        FREE_MINT: "freeMint",
        GET_USER_TOKENS: "getUserTokens",
        GET_VIBE_DATA: "getVibeData",
        TOTAL_SUPPLY: "totalSupply",
      },
      MINT_FEE: "0.001", // ETH
      MAX_SUPPLY: 10000,
    },
  },

  // Application Configuration
  APP: {
    NAME: "SocialVibe Tokenizer",
    DESCRIPTION: "Turn positive social vibes into NFTs",
    VERSION: "0.1.0",
    LOGO: "🌈",
    BOUNTY_TARGET: 40, // users
    BOUNTY_NAME: "Seedify",
    BOUNTY_PRIZE: "$700",
  },

  // Storage Configuration
  STORAGE: {
    USERS_KEY: "socialvibe_users",
    SETTINGS_KEY: "socialvibe_settings",
    CACHE_DURATION: 3600000, // 1 hour in ms
  },

  // Features Configuration
  FEATURES: {
    SENTIMENT_ANALYSIS: true,
    REAL_NFT_MINTING: true,
    USER_TRACKING: true,
    SOCIAL_SHARING: true,
    LIVE_DASHBOARD: true,
    AWS_COMPREHEND: false, // Set to true when AWS credentials available
  },

  // URLs and External Links
  URLS: {
    APP_URL: "http://localhost:3000",
    HARDHAT_NODE: "http://127.0.0.1:8545",
    ETHERSCAN_TESTNET: "https://sepolia.etherscan.io",
    OPENSEA_TESTNET: "https://testnets.opensea.io",
  },

  // Messages and Copy
  MESSAGES: {
    CONNECT_WALLET: "Please connect your wallet to continue",
    WALLET_CONNECTED: "Wallet connected successfully!",
    MINTING_IN_PROGRESS: "Your Vibe NFT is being minted...",
    MINT_SUCCESS: "🎉 Your Vibe NFT has been minted!",
    MINT_ERROR: "❌ Error minting NFT. Please try again.",
    USER_GOAL_REACHED: "🎉 We reached 40+ users! Goal achieved!",
    USERS_NEEDED: (n: number) => `🎯 ${n} more user${n !== 1 ? 's' : ''} needed to win!`,
  },

  // Color Scheme (Tailwind Classes)
  COLORS: {
    PRIMARY: "from-purple-600 to-pink-600",
    SUCCESS: "from-green-500 to-emerald-500",
    WARNING: "from-yellow-500 to-orange-500",
    ERROR: "from-red-500 to-pink-500",
    INFO: "from-blue-500 to-cyan-500",
  },

  // Analytics Events
  ANALYTICS_EVENTS: {
    USER_CREATED: "user_created",
    NFT_MINTED: "nft_minted",
    WALLET_CONNECTED: "wallet_connected",
    DASHBOARD_VIEWED: "dashboard_viewed",
    SHARED_TWITTER: "shared_twitter",
    SHARED_DISCORD: "shared_discord",
    GOAL_REACHED: "goal_reached_40_users",
  },

  // Development
  DEV: {
    DEBUG: true,
    MOCK_DATA: true, // Use mock sentiment analysis
    LOG_LEVEL: "info", // 'debug' | 'info' | 'warn' | 'error'
  },
};

export default CONFIG;
