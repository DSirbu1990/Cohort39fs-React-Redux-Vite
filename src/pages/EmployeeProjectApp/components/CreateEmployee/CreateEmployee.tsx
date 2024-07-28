import { useFormik } from "formik"
import * as Yup from "yup"

import Button from "components/Button/Button"
import Input from "components/Input/Input"

import { EMPLOYEE_FORM_NAMES } from "./types"
import { StyledFormContainer, StyledInputsContainer } from "./styles"

import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  employeeDataSliceAction,
  employeeDataSliceSelectors,
} from "store/redux/employeeData/employeeDataSlice"
import { v4 } from "uuid"

function CreateEmployee() {
  const validationSchema = Yup.object().shape({
    [EMPLOYEE_FORM_NAMES.NAME]: Yup.string()
      .required("This field is required")
      .min(2, "Name field must contain minimum 2 characters")
      .max(50, "Name field must contain maximum 50 characters"),
    [EMPLOYEE_FORM_NAMES.SURNAME]: Yup.string()
      .required("This field is required")
      .max(15, "Surname field must contain maximum 15 characters"),
    [EMPLOYEE_FORM_NAMES.AGE]: Yup.string()
      .required("This field is required")
      .min(1, "Age field must contain minimum 1 characters")
      .max(3, "Age field must contain maximum 3 characters"),
    [EMPLOYEE_FORM_NAMES.JOB_POSITION]: Yup.string().max(
      30,
      "Job Position field must contain maximum 30 characters",
    ),
  })
  const employee = useAppSelector(employeeDataSliceSelectors.employees)
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FORM_NAMES.ID]: "",
      [EMPLOYEE_FORM_NAMES.NAME]: "",
      [EMPLOYEE_FORM_NAMES.SURNAME]: "",
      [EMPLOYEE_FORM_NAMES.AGE]: "",
      [EMPLOYEE_FORM_NAMES.JOB_POSITION]: "",
    },
    validationSchema: validationSchema,

    validateOnMount: false,

    validateOnChange: true,
    onSubmit: (values, helpers) => {
      dispatch(
        employeeDataSliceAction.createEmployeeCard({
          ...values,
          [EMPLOYEE_FORM_NAMES.ID]: v4(),
        }),
      ),
        helpers.resetForm()
    },
  })

  console.log(employee)

  return (
    <StyledFormContainer onSubmit={formik.handleSubmit}>
      <StyledInputsContainer>
        <Input
          id="name-id"
          name={EMPLOYEE_FORM_NAMES.NAME}
          type="text"
          placeholder="John"
          label="Name*"
          value={formik.values[EMPLOYEE_FORM_NAMES.NAME]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.NAME]}
        />
        <Input
          id="surname-id"
          name={EMPLOYEE_FORM_NAMES.SURNAME}
          type="text"
          placeholder="Johnson"
          label="Surname*"
          value={formik.values[EMPLOYEE_FORM_NAMES.SURNAME]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.SURNAME]}
        />
        <Input
          id="age-id"
          name={EMPLOYEE_FORM_NAMES.AGE}
          type="text"
          placeholder="25"
          label="Age*"
          value={formik.values[EMPLOYEE_FORM_NAMES.AGE]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.AGE]}
        />
        <Input
          id="job-position-id"
          name={EMPLOYEE_FORM_NAMES.JOB_POSITION}
          type="text"
          placeholder="QA"
          label="Job Position*"
          value={formik.values[EMPLOYEE_FORM_NAMES.JOB_POSITION]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.JOB_POSITION]}
        />
      </StyledInputsContainer>
      <Button name="Create" type="submit" />
    </StyledFormContainer>
  )
}

export default CreateEmployee
