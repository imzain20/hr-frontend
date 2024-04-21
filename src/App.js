import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IndexCall from "./screens";
import GlobalScreen from "./screens";
import Employees from "./screens/employees/employees";
import MyTeam from "./screens/employees/my-team";
import EmployeesTable from "./screens/employees/employees-table";
import SelectedEmployee from "./screens/employees/selected-employee";
import PersonalInformation from "./screens/employees/personal-information";
import JobInformation from "./screens/employees/job-information";
import Timeoff from "./screens/employees/timeoff";
import Payslips from "./screens/employees/payslips";
import Expenses from "./screens/employees/expenses";
import Training from "./screens/employees/training";
import Appraisals from "./screens/employees/appraisals";
import Assets from "./screens/employees/assets";
import FilesAndForms from "./screens/employees/files-and-forms";
import DepartmentTable from "./screens/employees/department-table";
import BranchesTable from "./screens/employees/branches-table";
import TeamTable from "./screens/employees/team-table";
import GroupTable from "./screens/employees/group-table";
import EditInformation from "./screens/employees/edit-personal-info";
import TimeOff from "./screens/timeoff/TimeOff";
import EmployeeTimeOff from "./screens/timeoff/EmployeeTimeOff";
import Appraisal from "./screens/appraisal/Appraisal";
import AppraisalEmployeeTable from "./screens/appraisal/employee-table";
import MyTeamTable from "./screens/appraisal/myteam-table";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexCall />} />

        <Route path="/hr/*" element={<GlobalScreen />}>
          <Route path="time-off" element={<TimeOff />}>
          {/* <Route path="time-off" element={<EmployeeTimeOff />}> */}
            
          </Route>

          <Route path="appraisal" element={<Appraisal />}>
          <Route index element={<AppraisalEmployeeTable />} />
          <Route path="myteam" element={<MyTeamTable />} />
            
          </Route>
          <Route path="employees" element={<Employees />}>
            <Route index element={<MyTeam />} />

            <Route path="employees" element={<EmployeesTable />} />
            <Route path="department" element={<DepartmentTable />} />
            <Route path="branches" element={<BranchesTable />} />
            <Route path="team" element={<TeamTable />} />
            <Route path="group" element={<GroupTable />} />
          </Route>{" "}
          <Route
            path="employees/employees/selected-employee"
            element={<SelectedEmployee />}
          >
            <Route index element={<PersonalInformation />} />
            <Route path="edit-personal-info" element={<EditInformation />} />
            <Route path="job-information" element={<JobInformation />} />
            <Route path="timeoff" element={<Timeoff />} />
            <Route path="payslips" element={<Payslips />} />
            <Route path="expenses" element={<Expenses />} />
            <Route path="training" element={<Training />} />
            <Route path="appraisals" element={<Appraisals />} />
            <Route path="assets" element={<Assets />} />
            <Route path="files-and-forms" element={<FilesAndForms />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
