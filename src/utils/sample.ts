import { ApiResponse } from '../types';

export const exampleData: ApiResponse = {
    data: [
        {
            'id': 1,
            'rank': 1,
            'name': 'Dr. Mikhail Varshavski (Dr. Mike)',
            'mainCategory': 'General Health',
            'followers': 12400000,
            'verifiedClaimsCount': 20,
            'trend': 'Positive',
            'trustScore': 95,
            'verifiedClaims': [
                {
                    'claim': 'Regular physical activity reduces the risk of chronic diseases.',
                    'verificationStatus': 'Verified',
                    'verificationDate': '2011-08-01',
                    'evidence': [
                        {
                            'title': 'Physical Activity and Public Health: Updated Recommendation for Adults',
                            'journal': 'Medicine & Science in Sports & Exercise',
                            'link': 'https://journals.lww.com/acsm-msse/Fulltext/2011/08000/Physical_Activity_and_Public_Health__Updated.26.aspx'
                        }
                    ],
                    'trustScore': 90
                },
                {
                    'claim': 'Exposure to sunlight helps maintain vitamin D levels, essential for bone health.',
                    'verificationStatus': 'Verified',
                    'verificationDate': '2013-11-15',
                    'evidence': [
                        {
                            'title': 'Global Vitamin D Status and the Effects of Vitamin D Supplementation in Adults',
                            'journal': 'The Lancet Diabetes & Endocrinology',
                            'link': 'https://www.thelancet.com/journals/landia/article/PIIS2213-8587(13)70160-2/fulltext'
                        }
                    ],
                    'trustScore': 88
                }
            ],
            'recommendedProductsCount': 10,
            'netWorth': '$4 million',
            'yearlyRevenue': '$1.9M–2.4M',
            'categories': ['General Health', 'Fitness', 'Lifestyle'],
            'about': 'Dr. Mike is a practicing primary care physician known for his practical, down-to-earth health advice and recommendations.'
        },
        {
            'id': 2,
            'rank': 2,
            'name': 'Dr. Sandra Lee (Dr. Pimple Popper)',
            'mainCategory': 'Dermatology',
            'followers': 12000000,
            'verifiedClaimsCount': 15,
            'trend': 'Positive',
            'trustScore': 92,
            'verifiedClaims': [
                {
                    'claim': 'Proper skincare can prevent acne and other skin issues.',
                    'verificationStatus': 'Verified',
                    'verificationDate': '2015-03-10',
                    'evidence': [
                        {
                            'title': 'Acne Vulgaris: A Review of Treatment Options',
                            'journal': 'American Journal of Clinical Dermatology',
                            'link': 'https://link.springer.com/article/10.1007/s40257-015-0141-2'
                        }
                    ],
                    'trustScore': 89
                }
            ],
            'recommendedProductsCount': 8,
            'netWorth': '$8 million',
            'yearlyRevenue': '$3M–4M',
            'categories': ['Dermatology', 'Skin Care'],
            'about': 'Dr. Sandra Lee is a dermatologist known for her videos that showcase her skin surgery and treatment procedures.'
        },
        {
            'id': 3,
            'rank': 3,
            'name': 'Dr. Josh Axe',
            'mainCategory': 'Nutrition',
            'followers': 2800000,
            'verifiedClaimsCount': 18,
            'trend': 'Positive',
            'trustScore': 90,
            'verifiedClaims': [
                {
                    'claim': 'Eating whole foods can enhance overall health.',
                    'verificationStatus': 'Verified',
                    'verificationDate': '2014-10-21',
                    'evidence': [
                        {
                            'title': 'The Benefits of Whole Foods for a Healthy Diet',
                            'journal': 'Nutrition Reviews',
                            'link': 'https://academic.oup.com/nutritionreviews/article/72/6/352/1490363'
                        }
                    ],
                    'trustScore': 91
                }
            ],
            'recommendedProductsCount': 5,
            'netWorth': '$6 million',
            'yearlyRevenue': '$2.5M',
            'categories': ['Nutrition', 'Natural Remedies'],
            'about': 'Dr. Josh Axe is a doctor of natural medicine and a clinical nutritionist, known for promoting a whole foods lifestyle.'
        },
        {
            'id': 4,
            'rank': 4,
            'name': 'Dr. Michael Greger',
            'mainCategory': 'Nutrition',
            'followers': 1400000,
            'verifiedClaimsCount': 12,
            'trend': 'Positive',
            'trustScore': 94,
            'verifiedClaims': [
                {
                    'claim': 'A plant-based diet reduces the risk of chronic diseases.',
                    'verificationStatus': 'Verified',
                    'verificationDate': '2017-01-15',
                    'evidence': [
                        {
                            'title': 'The Health Benefits of a Plant-Based Diet',
                            'journal': 'Nutrition Journal',
                            'link': 'https://nutritionj.biomedcentral.com/articles/10.1186/s12937-017-0257-9'
                        }
                    ],
                    'trustScore': 92
                }
            ],
            'recommendedProductsCount': 7,
            'netWorth': '$3 million',
            'yearlyRevenue': '$1.5M',
            'categories': ['Nutrition', 'Health'],
            'about': 'Dr. Michael Greger is a physician, author, and speaker known for his advocacy of plant-based diets.'
        },
        {
            'id': 5,
            'rank': 5,
            'name': 'Dr. Oz (Mehmet Oz)',
            'mainCategory': 'General Health',
            'followers': 5000000,
            'verifiedClaimsCount': 10,
            'trend': 'Neutral',
            'trustScore': 85,
            'verifiedClaims': [
                {
                    'claim': 'Sleep is crucial for overall health.',
                    'verificationStatus': 'Verified',
                    'verificationDate': '2016-02-20',
                    'evidence': [
                        {
                            'title': 'The Role of Sleep in Health and Disease',
                            'journal': 'Journal of Clinical Sleep Medicine',
                            'link': 'https://jcsm.aasm.org/doi/full/10.5664/jcsm.5580'
                        }
                    ],
                    'trustScore': 88
                }
            ],
            'recommendedProductsCount': 6,
            'netWorth': '$7 million',
            'yearlyRevenue': '$2M',
            'categories': ['General Health', 'Wellness'],
            'about': 'Dr. Oz is a cardiothoracic surgeon and television personality known for his health-focused media presence.'
        },
        {
            'id': 6,
            'rank': 6,
            'name': 'Dr. David Gregg',
            'mainCategory': 'Fitness',
            'followers': 1500000,
            'verifiedClaimsCount': 8,
            'trend': 'Positive',
            'trustScore': 89,
            'verifiedClaims': [
                {
                    'claim': 'Strength training improves physical performance and health.',
                    'verificationStatus': 'Verified',
                    'verificationDate': '2018-05-12',
                    'evidence': [
                        {
                            'title': 'Benefits of Strength Training in Older Adults',
                            'journal': 'Journal of Aging and Physical Activity',
                            'link': 'https://journals.humankinetics.com/view/journals/japa/26/2/article-p219.xml'
                        }
                    ],
                    'trustScore': 90
                }
            ],
            'recommendedProductsCount': 4,
            'netWorth': '$2 million',
            'yearlyRevenue': '$800K',
            'categories': ['Fitness', 'Health'],
            'about': 'Dr. David Gregg is a personal trainer and fitness expert focused on strength and conditioning programs.'
        },
        {
            'id': 7,
            'rank': 7,
            'name': 'Baba Ramdev',
            'mainCategory': 'Yoga',
            'followers': 10000000,
            'verifiedClaimsCount': 25,
            'trend': 'Positive',
            'trustScore': 98,
            'verifiedClaims': [
                {
                    'claim': 'Yoga helps improve flexibility and mental health.',
                    'verificationStatus': 'Verified',
                    'verificationDate': '2009-07-19',
                    'evidence': [
                        {
                            'title': 'Yoga as a Therapeutic Intervention: A Bibliometric Analysis of Published Research Studies',
                            'journal': 'International Journal of Yoga',
                            'link': 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3701550/'
                        }
                    ],
                    'trustScore': 95
                }
            ],
            'recommendedProductsCount': 12,
            'netWorth': '$10 million',
            'yearlyRevenue': '$5M',
            'categories': ['Yoga', 'Wellness'],
            'about': 'Baba Ramdev is a yoga guru and advocate of Ayurveda who promotes natural remedies and healthy living.'
        },
        {
            'id': 8,
            'rank': 8,
            'name': 'Dr. Rhonda Patrick',
            'mainCategory': 'Nutrition',
            'followers': 500000,
            'verifiedClaimsCount': 20,
            'trend': 'Positive',
            'trustScore': 93,
            'verifiedClaims': [
                {
                    'claim': 'Micronutrients play a crucial role in health and aging.',
                    'verificationStatus': 'Verified',
                    'verificationDate': '2019-04-30',
                    'evidence': [
                        {
                            'title': 'Micronutrients and Aging: A Review',
                            'journal': 'Nutrition Reviews',
                            'link': 'https://academic.oup.com/nutritionreviews/article/78/4/275/5585150'
                        }
                    ],
                    'trustScore': 91
                }
            ],
            'recommendedProductsCount': 9,
            'netWorth': '$1 million',
            'yearlyRevenue': '$500K',
            'categories': ['Nutrition', 'Health'],
            'about': 'Dr. Rhonda Patrick is a health and wellness expert known for her research on nutrition and aging.'
        },
        {
            'id': 9,
            'rank': 9,
            'name': 'Dr. Mark Hyman',
            'mainCategory': 'Functional Medicine',
            'followers': 900000,
            'verifiedClaimsCount': 21,
            'trend': 'Positive',
            'trustScore': 96,
            'verifiedClaims': [
                {
                    'claim': 'Functional medicine addresses root causes of chronic diseases.',
                    'verificationStatus': 'Verified',
                    'verificationDate': '2018-08-15',
                    'evidence': [
                        {
                            'title': 'Functional Medicine: A Patient-Centered Approach to Healthcare',
                            'journal': 'Journal of Personal Medicine',
                            'link': 'https://www.mdpi.com/journal/jpm/special_issues/Functional_Medicine'
                        }
                    ],
                    'trustScore': 92
                }
            ],
            'recommendedProductsCount': 5,
            'netWorth': '$4 million',
            'yearlyRevenue': '$1M',
            'categories': ['Functional Medicine', 'Health'],
            'about': 'Dr. Mark Hyman is a physician and best-selling author known for his work in functional medicine.'
        },
        {
            'id': 10,
            'rank': 10,
            'name': 'Dr. Rangan Chatterjee',
            'mainCategory': 'Lifestyle Medicine',
            'followers': 600000,
            'verifiedClaimsCount': 10,
            'trend': 'Positive',
            'trustScore': 91,
            'verifiedClaims': [
                {
                    'claim': 'Lifestyle changes can dramatically improve health.',
                    'verificationStatus': 'Verified',
                    'verificationDate': '2020-11-11',
                    'evidence': [
                        {
                            'title': 'The Importance of Lifestyle in Disease Prevention',
                            'journal': 'Lifestyle Medicine',
                            'link': 'https://lifestylemedicine.org/lifestyle-medicine-a-systematic-review-of-the-importance-of-lifestyle-in-preventing-disease/'
                        }
                    ],
                    'trustScore': 90
                }
            ],
            'recommendedProductsCount': 3,
            'netWorth': '$1.5 million',
            'yearlyRevenue': '$600K',
            'categories': ['Lifestyle Medicine', 'Health'],
            'about': 'Dr. Rangan Chatterjee is a physician and health coach known for his focus on lifestyle change as a pathway to health.'
        }
    ],
    total: 10,
}
