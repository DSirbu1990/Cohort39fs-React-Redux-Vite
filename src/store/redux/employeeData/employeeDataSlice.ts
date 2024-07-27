import { createAppSlice } from "store/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"
import {EmployeeData} from "pages/EmployeeProjectApp/components/LayoutEmployee/types"


import {EmployeeSliceIntialState} from "./types"

const employeeInitialState: EmployeeSliceIntialState = {
    employees: []
}


export const employeeDataSlice = createAppSlice ({

    name: "EMPLOYEE",

    initialState: employeeInitialState,

    reducers: create => ({
        createEmployeeCard: create.reducer ((state:EmployeeSliceIntialState, action: PayloadAction<EmployeeData>)=> {
           state.employees = [...state.employees, action.payload]
            
        }),

    })
})