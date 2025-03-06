import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { calculateCompoundInterest, formatCurrency } from "@/lib/utils"
import type { CalculatorFormValues } from "@/types/calculator"

function App() {
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
  })

  const initialValues: CalculatorFormValues = {
    deposit: 0,
    contribution: 0,
    years: 0,
    rate: 0,
  }

  const handleSubmit = (values: CalculatorFormValues) => {
    const total = calculateCompoundInterest(
      values.deposit,
      values.contribution,
      values.years,
      values.rate
    )
    alert(`Total: ${formatCurrency(total)}`)
  }

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Compound Interest Calculator</CardTitle>
          <CardDescription>
            Calculate your investment growth over time with compound interest
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
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
                <Label htmlFor="contribution">Monthly Contribution</Label>
                <Field
                  as={Input}
                  id="contribution"
                  name="contribution"
                  type="number"
                  placeholder="Enter monthly contribution"
                />
                <ErrorMessage
                  name="contribution"
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
                />
                <ErrorMessage
                  name="rate"
                  component="div"
                  className="text-sm text-red-500"
                />
              </div>

              <Button type="submit" className="w-full">
                Calculate
              </Button>
            </Form>
          </Formik>
        </CardContent>
      </Card>
    </div>
  )
}

export default App
