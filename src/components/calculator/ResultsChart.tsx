import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { CalculatorResult } from "../../types/calculator"
import { formatCurrency } from "../../lib/utils"
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

  const chartColors = {
    total: "hsl(221, 83%, 53%)", // Bright blue
    contributions: "hsl(142, 76%, 36%)", // Rich green
    interest: "hsl(291, 64%, 42%)" // Deep purple
  }

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Investment Summary</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="space-y-2 p-4 bg-blue-500/10 dark:bg-blue-500/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-sm font-medium text-muted-foreground">Total Value</p>
            <p className="text-2xl font-bold" style={{ color: chartColors.total }}>{formatCurrency(results.total)}</p>
          </div>
          <div className="space-y-2 p-4 bg-green-500/10 dark:bg-green-500/20 rounded-lg border border-green-200 dark:border-green-800">
            <p className="text-sm font-medium text-muted-foreground">Total Contributions</p>
            <p className="text-2xl font-bold" style={{ color: chartColors.contributions }}>{formatCurrency(results.totalContributions)}</p>
          </div>
          <div className="space-y-2 p-4 bg-purple-500/10 dark:bg-purple-500/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <p className="text-sm font-medium text-muted-foreground">Total Interest Earned</p>
            <p className="text-2xl font-bold" style={{ color: chartColors.interest }}>{formatCurrency(results.totalInterest)}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Growth Over Time</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="h-[300px] sm:h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={results.yearlyData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="year"
                  className="text-sm text-muted-foreground"
                  tickMargin={10}
                />
                <YAxis 
                  tickFormatter={(value) => formatCurrency(value)}
                  className="text-sm text-muted-foreground"
                  tickMargin={10}
                />
                <Tooltip 
                  formatter={(value) => formatCurrency(Number(value))}
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                  itemStyle={{
                    color: "hsl(var(--foreground))",
                  }}
                />
                <Legend 
                  wrapperStyle={{
                    paddingTop: "1rem",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="balance"
                  name="Total Balance"
                  stroke={chartColors.total}
                  fill={chartColors.total}
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="contributions"
                  name="Contributions"
                  stroke={chartColors.contributions}
                  fill={chartColors.contributions}
                  fillOpacity={0.2}
                  strokeWidth={2}
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
        <CardContent className="pt-4">
          <div className="h-[300px] sm:h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={results.yearlyData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="year"
                  className="text-sm text-muted-foreground"
                  tickMargin={10}
                />
                <YAxis 
                  tickFormatter={(value) => formatCurrency(value)}
                  className="text-sm text-muted-foreground"
                  tickMargin={10}
                />
                <Tooltip 
                  formatter={(value) => formatCurrency(Number(value))}
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                  itemStyle={{
                    color: "hsl(var(--foreground))",
                  }}
                />
                <Legend
                  wrapperStyle={{
                    paddingTop: "1rem",
                  }}
                />
                <Bar 
                  dataKey="contributions" 
                  name="Contributions" 
                  fill={chartColors.contributions}
                  radius={[4, 4, 0, 0]}
                />
                <Bar 
                  dataKey="interest" 
                  name="Interest" 
                  fill={chartColors.interest}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 