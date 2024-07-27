import { createAppSlice } from "store/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"
import { EmployeeData } from "pages/EmployeeProjectApp/components/LayoutEmployee/types"

import { EmployeeSliceIntialState } from "./types"

const employeeInitialState: EmployeeSliceIntialState = {
  employees: [],
}

export const employeeDataSlice = createAppSlice({
  name: "EMPLOYEE",

  initialState: employeeInitialState,

  reducers: create => ({
    createEmployeeCard: create.reducer(
      (
        state: EmployeeSliceIntialState,
        action: PayloadAction<EmployeeData>,
      ) => {
        state.employees = [...state.employees, action.payload]
      },
    ),
    deleteEmployeeCard: create.reducer(
      (state: EmployeeSliceIntialState, action: PayloadAction<string>) => {
        state.employees = state.employees.filter(
          employee => employee.id !== action.payload,
        )
      },
    ),
  }),
  selectors: {
    employees: (state: EmployeeSliceIntialState) => {
      return state.employees
    },
  },
})

export const employeeDataSliceAction = employeeDataSlice.actions

export const employeeDataSliceSelectors = employeeDataSlice.selectors
