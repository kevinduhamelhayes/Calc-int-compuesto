export interface CalculatorFormValues {
  deposit: number
  contribution: number
  years: number
  rate: number
  contributionFrequency: 'monthly' | 'quarterly' | 'annually'
  inflation: number
}

export interface CalculatorResult {
  total: number
  totalContributions: number
  totalInterest: number
  yearlyData: YearlyData[]
}

export interface YearlyData {
  year: number
  balance: number
  contributions: number
  interest: number
} 