import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value)
}

export const calculateCompoundInterest = (
  deposit: number,
  contribution: number,
  years: number,
  rate: number
): number => {
  let total = deposit
  for (let i = 0; i < years; i++) {
    total = (total + contribution * 12) * (1 + rate / 100)
  }
  return Math.round(total)
} 