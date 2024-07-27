import { useAppDispatch, useAppSelector } from "store/hooks"


import { InfoAboutEmployee } from "pages/EmployeeProjectApp/components/LayoutEmployee/LayoutEmployee";
import { EmployeeData, LayoutEmployeeContextData } from "pages/EmployeeProjectApp/components/LayoutEmployee/types";
import { EMPLOYEE_FORM_NAMES } from "pages/EmployeeProjectApp/components/CreateEmployee/types";

import { PageWrapperEmployee, EmployeeCard, DataContainer, Title, Field, ButtonControl} from "./styles";
import Button from "components/Button/Button";
import {employeeDataSliceAction, employeeDataSliceSelectors} from "store/redux/employeeData/employeeDataSlice"
import { ReactNode } from "react";
import { v4 } from "uuid";

function Employees() {
  const dataFromCreateEmployee = useAppSelector(employeeDataSliceSelectors.employees)
//   const employeeCards = employee.map((employeeObj: Employee) => {
//     return <Employees_Card employee={employeeObj} key={v4()} />;
//   });

//   return (
//     <EmployeesWrapper>{employee.length > 0 && employeeCards}</EmployeesWrapper>
//   );
// } 

const employeesCards:any = dataFromCreateEmployee.map ((employeeObj: EmployeeData) =>{
  return  
  (<EmployeeCard  key= {v4()} >
  <DataContainer>
    <Title>Name</Title>
    <Field>
      {employeeObj.name}
    </Field>
  </DataContainer>
  <DataContainer>
    <Title>Surname</Title>
    <Field>
      {employeeObj.surname}
    </Field>
  </DataContainer>
  <DataContainer>
    <Title>Age</Title>
    <Field>
      {employeeObj.age}
    </Field>
  </DataContainer>
  <DataContainer>
    <Title>Job Position</Title>
    <Field>
      { employeeObj.job_position}
    </Field>
  </DataContainer>
  <Button name = "Delete" type = "button" onClick={()=>{}} isRed = {true}/>
</EmployeeCard>)
})
console.log(employeesCards)

  return (
    <PageWrapperEmployee>
      {employeesCards}
  
    <ButtonControl><Button name = "Remove All Employee" type = "button" onClick={()=>{}} isRed = {true} /></ButtonControl>
    </PageWrapperEmployee>
  );
}

export default Employees;