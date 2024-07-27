import { useAppDispatch, useAppSelector } from "store/hooks"


import { EmployeeData, LayoutEmployeeContextData } from "pages/EmployeeProjectApp/components/LayoutEmployee/types";
import { EMPLOYEE_FORM_NAMES } from "pages/EmployeeProjectApp/components/CreateEmployee/types";

import { PageWrapperEmployee, EmployeeCard, DataContainer, Title, Field, ButtonControl} from "./styles";
import Button from "components/Button/Button";
import {employeeDataSliceAction, employeeDataSliceSelectors} from "store/redux/employeeData/employeeDataSlice"
import { ReactNode } from "react";
import { v4 } from "uuid";

function Employees() {
const dispatch = useAppDispatch()

const onResetEmployee = () => {
  dispatch(employeeDataSliceAction.removeAllEmployees())
}

const dataFromCreateEmployee = useAppSelector(employeeDataSliceSelectors.employees)

const employeesCards:ReactNode = dataFromCreateEmployee.map ((employeeObj: EmployeeData) =>{
  return  (
  <EmployeeCard  key= {v4()} >
  <DataContainer>
    <Title>Name</Title>
    <Field>
      {employeeObj?.[EMPLOYEE_FORM_NAMES.NAME]}
    </Field>
  </DataContainer>
  <DataContainer>
    <Title>Surname</Title>
    <Field>
      {employeeObj?.[EMPLOYEE_FORM_NAMES.SURNAME]}
    </Field>
  </DataContainer>
  <DataContainer>
    <Title>Age</Title>
    <Field>
      {employeeObj?.[EMPLOYEE_FORM_NAMES.AGE]}
    </Field>
  </DataContainer>
  <DataContainer>
    <Title>Job Position</Title>
    <Field>
      { employeeObj?.[EMPLOYEE_FORM_NAMES.JOB_POSITION]}
    </Field>
  </DataContainer>
  <Button name = "Delete" type = "button" onClick={()=>{}} isRed = {true}/>
</EmployeeCard>)
})
console.log(employeesCards)

  return (
    <PageWrapperEmployee>
      {dataFromCreateEmployee.length>0 && <>{employeesCards}</>}
  
    <ButtonControl><Button name = "Remove All Employee" type = "button" onClick={onResetEmployee} isRed = {true} /></ButtonControl>
    </PageWrapperEmployee>
  );
}

export default Employees;