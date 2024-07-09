import React, { useState } from 'react'
import { render } from 'react-dom'
import Styles from './Styles'
import Editor from './Editor';
import SunEditor from './SunEditor';
import { Formik, Form, Field, FieldArray } from 'formik';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const App = () => {
  return (
    <Styles>
      <h1>🏁 React Final Form - Array Fields</h1>
      <a href="https://github.com/erikras/react-final-form#-react-final-form">
        Read Docs
      </a>
      <Formik
        onSubmit={onSubmit}
        initialValues={{
          company: 'Test company',
          customers: [
            {
              firstName: 'First Name',
              lastName: 'Last Name',
            },
          ],
        }}
        render={({ values }) => {
          return (
            <Form>
              <div>
                <label>Company</label>
                <Field name="company" component={Editor} />
              </div>
              <FieldArray
                name="customers"
                render={arrayHelpers => (
                  <>
                    <div className="buttons">
                      <button
                        type="button"
                        onClick={() => arrayHelpers.push()}
                      >
                        Add Customer
                      </button>
                      <button type="button" onClick={() => arrayHelpers.pop()}>
                        Remove Customer
                      </button>
                    </div>
                    {values.customers.map((customer, index) => (
                      <div key={index}>
                        <label>Cust. #{index + 1}</label>
                        <Field
                          name={`customers.${index}.firstName`}
                          placeholder="First Name"
                        />
                        <Field
                          name={`customers.${index}.lastName`}
                          component={SunEditor}
                          placeholder="Last Name"
                        />
                        <span
                          onClick={() => arrayHelpers.remove(index)}
                          style={{ cursor: 'pointer' }}
                        >
                          ❌
                        </span>
                      </div>
                    ))}
                  </>
                )}
              />

              <div className="buttons">
                <button type="submit">
                  Submit
                </button>
                <button
                  type="reset"
                >
                  Reset
                </button>
              </div>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </Form>
          )
        }}
      />
    </Styles>
  )
}

render(<App />, document.getElementById('root'))
