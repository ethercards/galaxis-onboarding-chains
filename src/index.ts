import { ethers } from "ethers";

interface ChainInfo {
    chainId: number;
    rpcUrl: string;
}

interface OnboardChain {
    id: string;
    token: string;
    label: string;
    rpcUrl: string;
}

/**
 * Generate react onboard cahins array basis on given chainInfos
 * @param chainInfos 
 * @returns 
 */
export function getOnboardChains(chainInfos: ChainInfo[]): OnboardChain[] {
    return chainInfos.map((chainInfo: ChainInfo) => getOnboardChain(chainInfo));
}

export function getOnboardChain(chainInfo: ChainInfo): OnboardChain {
    switch (chainInfo.chainId) {
        case 1:
            return {
                id: ethers.utils.hexValue(chainInfo.chainId),
                token: "ETH",
                label: "Ethereum Mainnet",
                rpcUrl: chainInfo.rpcUrl,
            };
        case 137:
            return {
                id: ethers.utils.hexValue(chainInfo.chainId),
                token: "MATIC",
                label: "Polygon",
                rpcUrl: chainInfo.rpcUrl,
            };
        case 80001:
            return {
                id: ethers.utils.hexValue(chainInfo.chainId),
                token: "MATIC",
                label: "Polygon - Mumbai",
                rpcUrl: chainInfo.rpcUrl,
            };
        case 11155111:
            return {
                id: ethers.utils.hexValue(chainInfo.chainId),
                token: "MATIC",
                label: "Sepolia testnet",
                rpcUrl: chainInfo.rpcUrl,
            };
        case 421614:
            return {
                id: ethers.utils.hexValue(chainInfo.chainId),
                token: "ETH",
                label: "Arbitrum Sepolia testnet",
                rpcUrl: chainInfo.rpcUrl,
            };
        case 42161:
            return {
                id: ethers.utils.hexValue(chainInfo.chainId),
                token: "ETH",
                label: "Arbitrum One",
                rpcUrl: chainInfo.rpcUrl,
            };
        default:
            return {
                id: ethers.utils.hexValue(chainInfo.chainId),
                token: "ETH",
                label: "Ethereum Mainnet",
                rpcUrl: chainInfo.rpcUrl,
            };
    }
}
