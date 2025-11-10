'use server';

import { recommendProducts } from '@/ai/flows/product-recommendation';
import type { ProductRecommendationOutput } from '@/ai/flows/product-recommendation';

export async function getRecommendedProducts(): Promise<ProductRecommendationOutput> {
  // In a real app, you would fetch this from user session or database
  const mockUserInput = {
    browsingHistory: ['prod_1', 'prod_7'],
    purchasePatterns: ['prod_8'],
  };

  try {
    const recommendations = await recommendProducts(mockUserInput);
    return recommendations;
  } catch (error) {
    console.error('Error getting product recommendations:', error);
    // Return empty or default recommendations on error
    return { recommendedProducts: [] };
  }
}
