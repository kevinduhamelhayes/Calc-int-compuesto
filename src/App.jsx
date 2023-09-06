
import Container from "./components/Container"
import Section from "./components/Section"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import "./index.css"

const compoundInterest = (deposit, contribution, years, rate) => {
  let total = deposit
  for (let i = 0; i < years; i++) {
    total = (total + contribution * 12) * (1 + rate / 100)
  }
  return Math.round(total)
}

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

  const handleSubmit = ({ deposit, contribution, years, rate }) => {
    const total = compoundInterest(deposit, contribution, years, rate)
    alert(`Total: $${total}`)
  }

  return (
    <Container>
      <Section>
        <Formik
          initialValues={{ deposit: "", contribution: "", years: "", rate: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="form-container">
            <label htmlFor="deposit">Initial Deposit</label>
            <Field
              id="deposit"
              name="deposit"
              type="number"
              className="form-input"
              onFocus={(e) => e.target.select()}
            />
            <ErrorMessage name="deposit" component="div" className="error" />

            <label htmlFor="contribution">Monthly Contribution</label>
            <Field
              id="contribution"
              name="contribution"
              type="number"
              className="form-input"
              onFocus={(e) => e.target.select()}
            />
            <ErrorMessage
              name="contribution"
              component="div"
              className="error"
            />

            <label htmlFor="years">Years</label>
            <Field
              id="years"
              name="years"
              type="number"
              className="form-input"
              onFocus={(e) => e.target.select()}
            />
            <ErrorMessage name="years" component="div" className="error" />

            <label htmlFor="rate">Interest Rate</label>
            <Field
              id="rate"
              name="rate"
              type="number"
              className="form-input"
              onFocus={(e) => e.target.select()}
            />
            <ErrorMessage name="rate" component="div" className="error" />

            <button type="submit" className="submit-button">
              Submit
            </button>
          </Form>
        </Formik>
      </Section>
    </Container>
  )
}

export default App
