import { useContext } from "react";

import { InfoAboutEmployee } from "pages/EmployeeProjectApp/components/LayoutEmployee/LayoutEmployee";
import { LayoutEmployeeContextData } from "pages/EmployeeProjectApp/components/LayoutEmployee/types";
import { EMPLOYEE_FORM_NAMES } from "pages/EmployeeProjectApp/components/CreateEmployee/types";

import { PageWrapperEmployee, EmployeeCard, DataContainer, Title, Field, ButtonControl} from "./styles";
import Button from "components/Button/Button";

function Employees() {
  const dataFromCreateEmployee =
    useContext<LayoutEmployeeContextData>(InfoAboutEmployee);

  return (
    <PageWrapperEmployee>
    <EmployeeCard>
      <DataContainer>
        <Title>Name</Title>
        <Field>
          {dataFromCreateEmployee.employeeData?.[EMPLOYEE_FORM_NAMES.NAME]}
        </Field>
      </DataContainer>
      <DataContainer>
        <Title>Surname</Title>
        <Field>
          {dataFromCreateEmployee.employeeData?.[EMPLOYEE_FORM_NAMES.SURNAME]}
        </Field>
      </DataContainer>
      <DataContainer>
        <Title>Age</Title>
        <Field>
          {dataFromCreateEmployee.employeeData?.[EMPLOYEE_FORM_NAMES.AGE]}
        </Field>
      </DataContainer>
      <DataContainer>
        <Title>Job Position</Title>
        <Field>
          {
            dataFromCreateEmployee.employeeData?.[
              EMPLOYEE_FORM_NAMES.JOB_POSITION
            ]
          }
        </Field>
      </DataContainer>
      <Button name = "Delete" type = "button" onClick={()=>{}} isRed = {true}/>
    </EmployeeCard>
    <ButtonControl><Button name = "Remove All Employee" type = "button" onClick={()=>{}} isRed = {true} /></ButtonControl>
    </PageWrapperEmployee>
  );
}

export default Employees;
