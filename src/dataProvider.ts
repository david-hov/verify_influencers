import Axios from 'axios';
import { ApiResponse, Influencer, Params } from './types';
import { exampleData } from './utils/sample';

const openAiKey = import.meta.env.VITE_OPEN_AI;
const openAiModel = import.meta.env.VITE_OPEN_AI_MODEL;

const example: Influencer = {
    id: 1,
    rank: 1,
    name: 'name',
    mainCategory: 'General Health',
    followers: 10000,
    verifiedClaimsCount: 20,
    trend: 'Positive',
    trustScore: 95,
    verifiedClaims: [
        {
            claim: '',
            verificationStatus: 'Verified',
            verificationDate: '2011-08-01',
            evidence: [
                {
                    title: '',
                    journal: '',
                    link: ''
                }
            ],
            trustScore: 90
        },
    ],
    recommendedProductsCount: 10,
    netWorth: '$4 million',
    yearlyRevenue: '$1.9M–2.4M',
    categories: ['General Health', 'Fitness', 'Lifestyle'],
    about: ''
}

export const dataProvider = {
    getList: async (_: any, params: Params): Promise<ApiResponse> => {
        const isDemo = JSON.parse(localStorage.getItem('demo') || 'true')
        if (isDemo) {
            return new Promise((resolve) => {
                resolve(exampleData);
            })
        } else {
            let message = `
                Provide data about real life health influencers top 10, make analysis from websites, make researches, and give output.
                **Important Validation Requirements**:
                1. The output must be a valid JavaScript object array that adheres to strict JSON formatting rules.
                **Important Instructions**:
                1. Return the **real-life health influencers top 10** as an **array of objects** with real-life information.
                2. Categories should avoid redundant or overly similar names.
                Do not wrap the json codes in JSON markers
                The result should look like this - for example: ${JSON.stringify(example, null, 2)}
            `;
            if (Object.keys(params.filter).length !== 0) {
                message = `
                    Provide data about real life health influencers, make analysis from websites, make researches, and give output.
                    **Important Validation Requirements**:
                    1. The output must be a valid JavaScript object array that adheres to strict JSON formatting rules.
                    **Important Instructions**:
                    1. Return the **real-life health influencers** as an **array of objects** with real-life information.
                    2. Categories should avoid redundant or overly similar names.
                    ${params.filter.influencerName ? `- Specific influencer: '${params.filter.influencerName}'. If this influencer is not found, return an empty array.` : ''}
                    ${params.filter.timeRange ? `- For the period: '${params.filter.timeRange}'.` : ''}
                    ${params.filter.includeRevenueAnalysis ? '- Include revenue analysis.' : ''}
                    ${params.filter.verifyWithScientificJournals ? '- Verify with scientific journals.' : ''}
                    ${params.filter.productsPerInfluencer ? `- Products per influencer: ${params.filter.productsPerInfluencer}.` : ''}
                    ${params.filter.claimsToAnalyze ? `- Claims to analyze: ${params.filter.claimsToAnalyze}.` : ''}
                    ${params.filter.journals && params.filter.journals.length !== 0 ? `- Journals to reference: ${params.filter.journals.join(', ')}.` : ''}
                    ${params.filter.notes ? `- Additional notes: '${params.filter.notes}'.` : ''}
                    Do not wrap the json codes in JSON markers
                    The result should look like this - for example: ${JSON.stringify(example, null, 2)}
                `;
            }
            try {
                const response = await Axios.post('https://api.openai.com/v1/chat/completions', {
                    model: openAiModel,
                    messages: [
                        {
                            role: 'system',
                            content: 'You are an assistant that provides only the exact output requested, give me array with objects response data, only array data nothing more',
                        },
                        {
                            role: 'user',
                            content: message,
                        },
                    ],
                }, {
                    headers: {
                        'Authorization': `Bearer ${openAiKey}`,
                        'Content-Type': 'application/json',
                    }
                });

                return {
                    data: JSON.parse(response.data.choices[0].message.content),
                    total: 10
                };
            } catch {
                return {
                    data: [],
                    total: 10
                };
            }
        }
    },
};
