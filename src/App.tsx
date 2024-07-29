import Homework15 from "homeworks/Homework15/Homework15"
import Homework16 from "homeworks/Homework16/Homework16"

import Lesson_16 from "lessons/Lesson_16/Lesson_16"

import LayoutEmployee from "pages/EmployeeProjectApp/components/LayoutEmployee/LayoutEmployee"
import { Route, Routes } from "react-router-dom";
import CreateEmployee from "pages/EmployeeProjectApp/components/CreateEmployee/CreateEmployee";
import Employees from "pages/EmployeeProjectApp/components/Employees/Employees";
import Lesson_18 from "lessons/Lesson_18/Lesson_18";



function App() {
  return (
     // <Homework15 />
    // <Homework16/>

    // <Lesson_16/>
    <Lesson_18/>

    // <LayoutEmployee>
    //     <Routes>
    //       <Route path="/" element={<CreateEmployee />} />
    //       <Route path="/createEmployee" element={<CreateEmployee />} />
    //       <Route path="/employee" element={<Employees />} />
    //       <Route path="*" element="Page Not Found!" />
    //     </Routes>
    //   </LayoutEmployee>
  )
}

export default App
