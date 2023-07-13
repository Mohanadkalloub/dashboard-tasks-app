import { Route, Routes } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import Dashboard from "../components/Dashboard/Dashboard";
import TasksPage from "../pages/TasksPage";
import NewTaskPage from "../pages/NewTaskPage";
import TaskDetailsPage from "../pages/TaskDetailsPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AuthPage />}/>
            <Route path="/Dashboard" element={<Dashboard />}>
            <Route path="/Dashboard/tasks" element={<TasksPage />} />
            <Route path="/Dashboard/tasks/new" element={<NewTaskPage />} />
            <Route path="/Dashboard/tasks/:id/details" element={<TaskDetailsPage />}/>
            {/* <Route path="/Dashboard/tasks/details" element={<TaskDetailsPage />}/> */}
                </Route>
        </Routes>
    ); 
};
export default AppRoutes;