export interface InfluencerClaim {
    claim: string;
    verificationStatus: string;
    verificationDate: string;
    evidence: Array<{
        title: string;
        journal: string;
        link: string;
    }>;
    trustScore: number;
}

export interface Influencer {
    id: number;
    rank: number;
    name: string;
    mainCategory: string;
    followers: number;
    verifiedClaimsCount: number;
    trend: string;
    trustScore: number;
    verifiedClaims: InfluencerClaim[];
    recommendedProductsCount: number;
    netWorth: string;
    yearlyRevenue: string;
    categories: string[];
    about: string;
}

export interface Params {
    filter: {
        influencerName?: string;
        timeRange?: string;
        includeRevenueAnalysis?: boolean;
        verifyWithScientificJournals?: boolean;
        productsPerInfluencer?: number;
        claimsToAnalyze?: string;
        journals?: string[];
        notes?: string;
    };
}

export interface ApiResponse {
    data: Influencer[];
    total: number;
}

export interface DialogProps {
    open: boolean;
    onClose: () => void;
}