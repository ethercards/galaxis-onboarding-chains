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
export declare function getOnboardChains(chainInfos: ChainInfo[]): OnboardChain[];
export declare function getOnboardChain(chainInfo: ChainInfo): OnboardChain;
export {};
