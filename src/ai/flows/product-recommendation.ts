'use server';

/**
 * @fileOverview AI-powered product recommendation tool.
 *
 * - recommendProducts - A function that recommends products based on user history.
 * - ProductRecommendationInput - The input type for the recommendProducts function.
 * - ProductRecommendationOutput - The return type for the recommendProducts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductRecommendationInputSchema = z.object({
  browsingHistory: z.array(z.string()).describe('List of product IDs representing the user\'s browsing history.'),
  purchasePatterns: z.array(z.string()).describe('List of product IDs representing the user\'s purchase patterns.'),
});
export type ProductRecommendationInput = z.infer<typeof ProductRecommendationInputSchema>;

const ProductRecommendationOutputSchema = z.object({
  recommendedProducts: z.array(z.string()).describe('List of product IDs recommended to the user.'),
});
export type ProductRecommendationOutput = z.infer<typeof ProductRecommendationOutputSchema>;

export async function recommendProducts(input: ProductRecommendationInput): Promise<ProductRecommendationOutput> {
  return recommendProductsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'productRecommendationPrompt',
  input: {schema: ProductRecommendationInputSchema},
  output: {schema: ProductRecommendationOutputSchema},
  prompt: `You are an expert product recommendation system.

Based on the user's browsing history and purchase patterns, recommend a list of products that the user might be interested in.

Browsing History: {{#each browsingHistory}}{{{this}}}, {{/each}}
Purchase Patterns: {{#each purchasePatterns}}{{{this}}}, {{/each}}

Recommended Products (as a list of product IDs):`,
});

const recommendProductsFlow = ai.defineFlow(
  {
    name: 'recommendProductsFlow',
    inputSchema: ProductRecommendationInputSchema,
    outputSchema: ProductRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
