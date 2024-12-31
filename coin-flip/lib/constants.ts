export const BNB_CHAIN_ID = "0x61"; // 5000 in decimal
export const BNB_RPC_URL = "https://bsc-testnet-rpc.publicnode.com/";

export const BNB_CHAIN_CONFIG = {
  chainId: BNB_CHAIN_ID,
  chainName: "EVM on Flow (testnet)",
  nativeCurrency: {
    name: "BNB",
    symbol: "BNB",
    decimals: 18,
  },
  rpcUrls: [BNB_RPC_URL],
  blockExplorerUrls: ["https://testnet.bscscan.com/"],
};