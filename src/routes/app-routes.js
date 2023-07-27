import { Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import Dashboard from "../components/Dashboard/Dashboard";
import TasksPage from "../pages/TasksPage";
import NewTaskPage from "../pages/NewTaskPage";
import TaskDetailsPage from "../pages/TaskDetailsPage";
import { useSelector } from "react-redux";

const AppRoutes = () => {
    let loggedIn = useSelector((state) => state.auth.loggedIn);
    return (
        <Routes>    
            <Route path="/" element={!loggedIn ? <AuthPage /> : <Navigate to={'/Dashboard'}/>}/>
            <Route path="/Dashboard" element={loggedIn ? <Dashboard /> : <Navigate to={'/'}/>}>
            <Route path="/Dashboard/tasks" element={<TasksPage />} />
            <Route path="/Dashboard/tasks/new" element={<NewTaskPage />} />
            <Route path="/Dashboard/tasks/:id/details" element={<TaskDetailsPage />}/>
            {/* <Route path="/Dashboard/tasks/details" element={<TaskDetailsPage />}/> */}
                </Route>
                <Route path="/*" element={loggedIn ? <Navigate to="/Dashboard"/> : <Navigate to="/"/>}/>
        </Routes>
    ); 
};
export default AppRoutes;