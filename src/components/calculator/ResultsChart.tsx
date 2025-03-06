import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalculatorResult } from "@/types/calculator"
import { formatCurrency } from "@/lib/utils"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar
} from "recharts"

interface ResultsChartProps {
  results: CalculatorResult | null
}

export function ResultsChart({ results }: ResultsChartProps) {
  if (!results) return null

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Investment Summary</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Total Value</p>
            <p className="text-2xl font-bold">{formatCurrency(results.total)}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Total Contributions</p>
            <p className="text-2xl font-bold">{formatCurrency(results.totalContributions)}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Total Interest Earned</p>
            <p className="text-2xl font-bold">{formatCurrency(results.totalInterest)}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Growth Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={results.yearlyData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(value) => formatCurrency(value)} />
                <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="balance"
                  name="Total Balance"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="contributions"
                  name="Contributions"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contributions vs Interest</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={results.yearlyData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(value) => formatCurrency(value)} />
                <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                <Legend />
                <Bar dataKey="contributions" name="Contributions" fill="#82ca9d" />
                <Bar dataKey="interest" name="Interest" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 