import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { tasksAction } from "../../redux/slices/tasks-slice";
import TaskController from "../../controller/TaskController";

const Task = (props) => {
  const taskController = new TaskController();
  const navigateor = useNavigate();
  const dispatch = useDispatch();
  const showDetailsHandler = () => {
    dispatch(tasksAction.showDetails(props.task.id));
    navigateor(`/Dashboard/tasks/${props.task.id}/details`);
  };
  // Four Solution
  // const navigateor = useNavigate();
  // const dispatch = useDispatch();
  // const showDetailsHandler = () => {
  //   dispatch(tasksAction.showDetails(props.task.id));
  //   navigateor(`/Dashboard/tasks/details`);
  // };
  const deleteTaskHandler = async () => {
    const deleted = await taskController.delete(props.task);
    if (deleted) {
      dispatch(tasksAction.delete(props.task.id));
    }
  };
  return (
    <Fragment>
      <div className="col-md-4">
        <div className="card task card">
          <img src="img/3.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {props.task.name} - {props.task.categroy}
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">
              <span data-feather="calendar"></span> {props.task.startDate}
              <span className="main-color"> To </span> {props.task.endDate}
            </h6>
            <p className="card-text">{props.task.details}</p>
            <hr />
            <span className="btn badge-light-warning status-btn Wating">
              {props.task.status}
            </span>
            {/* 
            <NavLink
              to={`/Dashboard/tasks/${props.task.id}/details`}
              className="btn btn-bg-gray pull-right">
              <span>Details</span>
            </NavLink> */}
            <button
              className="btn btn-bg-gray pull-right"
              onClick={showDetailsHandler}>
              details
            </button>
            <button
              className="btn btn-bg-gray pull-right"
              onClick={deleteTaskHandler}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Task;
