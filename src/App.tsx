import { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import { Input } from "./components/ui/input"
import { Label } from "./components/ui/label"
import { Button } from "./components/ui/button"
import { calculateCompoundInterest } from "./lib/utils"
import type { CalculatorFormValues, CalculatorResult } from "./types/calculator"
import { ResultsChart } from "./components/calculator/ResultsChart"
import { ModeToggle } from "./components/theme/mode-toggle"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select"

function App() {
  const [calculatorResults, setCalculatorResults] = useState<CalculatorResult | null>(null)

  const validationSchema = Yup.object().shape({
    deposit: Yup.number()
      .required("Required")
      .positive("Must be positive")
      .label("Initial Deposit"),
    contribution: Yup.number()
      .required("Required")
      .positive("Must be positive")
      .label("Monthly Contribution"),
    years: Yup.number()
      .required("Required")
      .positive("Must be positive")
      .integer("Must be an integer")
      .label("Years"),
    rate: Yup.number()
      .required("Required")
      .positive("Must be positive")
      .label("Interest Rate"),
    contributionFrequency: Yup.string()
      .required("Required")
      .oneOf(["monthly", "quarterly", "annually"])
      .label("Contribution Frequency"),
    inflation: Yup.number()
      .required("Required")
      .min(0, "Must be positive or zero")
      .label("Inflation Rate"),
  })

  const initialValues: CalculatorFormValues = {
    deposit: 10000,
    contribution: 500,
    years: 20,
    rate: 7,
    contributionFrequency: "monthly",
    inflation: 0,
  }

  const handleSubmit = (values: CalculatorFormValues) => {
    const results = calculateCompoundInterest(
      values.deposit,
      values.contribution,
      values.years,
      values.rate,
      values.contributionFrequency,
      values.inflation
    )
    setCalculatorResults(results)
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <h1 className="text-xl font-bold">Compound Interest Calculator</h1>
          <ModeToggle />
        </div>
      </header>
      <main className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="md:sticky md:top-20 h-fit">
            <CardHeader>
              <CardTitle>Calculate Your Investment</CardTitle>
              <CardDescription>
                Enter your investment details to see how your money can grow over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ values, setFieldValue }) => (
                  <Form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="deposit">Initial Deposit</Label>
                      <Field
                        as={Input}
                        id="deposit"
                        name="deposit"
                        type="number"
                        placeholder="Enter initial deposit"
                      />
                      <ErrorMessage
                        name="deposit"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contribution">Contribution Amount</Label>
                      <Field
                        as={Input}
                        id="contribution"
                        name="contribution"
                        type="number"
                        placeholder="Enter contribution amount"
                      />
                      <ErrorMessage
                        name="contribution"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contributionFrequency">Contribution Frequency</Label>
                      <Select
                        name="contributionFrequency"
                        value={values.contributionFrequency}
                        onValueChange={(value) => {
                          setFieldValue("contributionFrequency", value)
                        }}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="quarterly">Quarterly</SelectItem>
                          <SelectItem value="annually">Annually</SelectItem>
                        </SelectContent>
                      </Select>
                      <ErrorMessage
                        name="contributionFrequency"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="years">Years</Label>
                      <Field
                        as={Input}
                        id="years"
                        name="years"
                        type="number"
                        placeholder="Enter number of years"
                      />
                      <ErrorMessage
                        name="years"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="rate">Interest Rate (%)</Label>
                      <Field
                        as={Input}
                        id="rate"
                        name="rate"
                        type="number"
                        placeholder="Enter interest rate"
                        step="0.1"
                      />
                      <ErrorMessage
                        name="rate"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inflation">Inflation Rate (%)</Label>
                      <Field
                        as={Input}
                        id="inflation"
                        name="inflation"
                        type="number"
                        placeholder="Enter inflation rate"
                        step="0.1"
                      />
                      <ErrorMessage
                        name="inflation"
                        component="div"
                        className="text-sm text-red-500"
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Calculate
                    </Button>
                  </Form>
                )}
              </Formik>
            </CardContent>
          </Card>

          <div>
            <ResultsChart results={calculatorResults} />
          </div>
        </div>
      </main>
      
      <footer className="border-t mt-auto">
        <div className="container mx-auto py-6 px-4">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Compound Interest Calculator. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
