"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOnboardChains = getOnboardChains;
exports.getOnboardChain = getOnboardChain;
const ethers_1 = require("ethers");
/**
 * Generate react onboard cahins array basis on given chainInfos
 * @param chainInfos
 * @returns
 */
function getOnboardChains(chainInfos) {
    return chainInfos.map((chainInfo) => getOnboardChain(chainInfo));
}
function getOnboardChain(chainInfo) {
    switch (chainInfo.chainId) {
        case 1:
            return {
                id: ethers_1.ethers.utils.hexValue(chainInfo.chainId),
                token: "ETH",
                label: "Ethereum Mainnet",
                rpcUrl: chainInfo.rpcUrl,
            };
        case 137:
            return {
                id: ethers_1.ethers.utils.hexValue(chainInfo.chainId),
                token: "MATIC",
                label: "Polygon",
                rpcUrl: chainInfo.rpcUrl,
            };
        case 80001:
            return {
                id: ethers_1.ethers.utils.hexValue(chainInfo.chainId),
                token: "MATIC",
                label: "Polygon - Mumbai",
                rpcUrl: chainInfo.rpcUrl,
            };
        case 11155111:
            return {
                id: ethers_1.ethers.utils.hexValue(chainInfo.chainId),
                token: "MATIC",
                label: "Sepolia testnet",
                rpcUrl: chainInfo.rpcUrl,
            };
        case 421614:
            return {
                id: ethers_1.ethers.utils.hexValue(chainInfo.chainId),
                token: "ETH",
                label: "Arbitrum Sepolia testnet",
                rpcUrl: chainInfo.rpcUrl,
            };
        case 42161:
            return {
                id: ethers_1.ethers.utils.hexValue(chainInfo.chainId),
                token: "ETH",
                label: "Arbitrum One",
                rpcUrl: chainInfo.rpcUrl,
            };
        default:
            return {
                id: ethers_1.ethers.utils.hexValue(chainInfo.chainId),
                token: "ETH",
                label: "Ethereum Mainnet",
                rpcUrl: chainInfo.rpcUrl,
            };
    }
}
