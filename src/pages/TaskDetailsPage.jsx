import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { tasksAction } from "../redux/slices/tasks-slice";
import TaskController from "../controller/TaskController";
import TaskModel from "../models/TaskModel";

const TaskDetailsPage = () => {
  const params = useParams();
  // First Soulation
  // const tasks = useSelector((state) => state.tasks.data);
  // const [task, setTask] = useState({});
  // const getDatails = () => {
  //   const item = tasks.find((element) => element.id == params.id);
  //   setTask(item);
  // };
  // useEffect(getDatails, []);

  // Second Soulation
  // const dispatch = useDispatch();
  // const task = useSelector((state) => state.tasks.task);
  // const getDatails = () => {
  //   dispatch(tasksAction.showDetails(params.id));
  // };
  // useEffect(getDatails, []);
  // Third Soulation
  // const task = useSelector((state) => state.tasks.task);

  // Four Soulation
  const dispatch = useDispatch();
  const task = useSelector((state) => state.tasks.task);
  const controller = new TaskController();

  const getDatails = async () => {
    if (Object.keys(task).length == 0) {
      const tasks = await controller.read();
      dispatch(tasksAction.read(tasks));
      dispatch(tasksAction.showDetails(params.id));
    }
  };
  useEffect(() => {
    getDatails();
  }, []);
  const updateStatusHandler = async (status) => {
    task.status = status;
    let updated = await controller.update(task);
    if (updated) {
      let newTask = new TaskModel();
      newTask.id = task.id;
      newTask.name = task.name;
      newTask.status = task.status;
      newTask.category = task.category;
      newTask.startDate = task.startDate;
      newTask.endDate = task.endDate;
      newTask.details = task.details;
      dispatch(tasksAction.updateStatus(newTask));
    }
  };
  return (
    <Fragment>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">{task.name}</h1>
          <div className=" mb-2 mb-md-0">
            <div className="d-flex align-items-center ms-3 ms-lg-4"></div>
            <div className="d-flex align-items-center ms-3 ms-lg-4"></div>
          </div>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
              <button
                type="button"
                onClick={() => updateStatusHandler("In Progress")}
                className={`btn btn-sm btn-outline-secondary ${
                  task.status == "In Progress" && "active"
                }`}>
                In Progress
              </button>
              <button
                type="button"
                onClick={() => updateStatusHandler("Complete")}
                className={`btn btn-sm btn-outline-secondary ${
                  task.status == "Complete" && "active"
                }`}>
                Complete
              </button>
              <button
                type="button"
                onClick={() => updateStatusHandler("Waiting")}
                className={`btn btn-sm btn-outline-secondary ${
                  task.status == "Waiting" && "active"
                }`}>
                Waiting
              </button>
              <button
                type="button"
                onClick={() => updateStatusHandler("Canceled")}
                className={`btn btn-sm btn-outline-secondary ${
                  task.status == "Canceled" && "active"
                }`}>
                Canceled
              </button>
            </div>
            <button type="button" className="btn btn-light-main btn">
              <span data-feather="edit-3"></span> Edit
            </button>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <img src="img/1.png" className="img-fluid rounded de-img" />
          </div>
          <div className="col-md-6  mt-5">
            <div className=" mb-3">
              <span data-feather="bookmark" className="main-color"></span>
              <strong>Title:</strong> {task.name}
            </div>
            <div className="mb-3">
              <span data-feather="layers" className="main-color"></span>
              <strong>category:</strong> {task.category}
            </div>
            <div className="">
              <span data-feather="calendar" className="main-color"></span>
              <strong>Date:</strong> {task.startDate} to {task.endDate}
            </div>
          </div>

          <div className="row mt-5">
            <div className="task-info">{task.details}</div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};
export default TaskDetailsPage;
