import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { CalculatorResult, YearlyData } from "../types/calculator"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(value)
}

export const calculateCompoundInterest = (
  deposit: number,
  contribution: number,
  years: number,
  rate: number,
  contributionFrequency: 'monthly' | 'quarterly' | 'annually' = 'monthly',
  inflation: number = 0
): CalculatorResult => {
  let total = deposit
  const yearlyData: YearlyData[] = []
  let totalContributions = deposit
  let periodsPerYear = contributionFrequency === 'monthly' ? 12 : contributionFrequency === 'quarterly' ? 4 : 1
  
  for (let i = 0; i < years; i++) {
    // Adjust for inflation
    const inflationAdjustedContribution = contribution * Math.pow(1 - inflation / 100, i)
    const yearContribution = inflationAdjustedContribution * periodsPerYear
    totalContributions += yearContribution
    
    // Calculate interest for this year
    // const startBalance = total
    total = (total + yearContribution) * (1 + rate / 100)
    // const interestEarned = total - startBalance - yearContribution
    
    yearlyData.push({
      year: i + 1,
      balance: Math.round(total),
      contributions: Math.round(totalContributions),
      interest: Math.round(total - totalContributions)
    })
  }
  
  return {
    total: Math.round(total),
    totalContributions: Math.round(totalContributions),
    totalInterest: Math.round(total - totalContributions),
    yearlyData
  }
}
