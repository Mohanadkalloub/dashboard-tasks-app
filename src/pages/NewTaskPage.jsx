import { Fragment, useRef } from "react";
import TaskModel from "../models/TaskModel";
import TaskController from "../controller/TaskController";
import { useDispatch } from "react-redux";
import { tasksAction } from "../redux/slices/tasks-slice";

const NewTaskPage = () => {
  const nameRef = useRef();
  const categoryRef = useRef();
  const detailsRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const controller = new TaskController();
  const dispatch = useDispatch();
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (checkData()) {
      await createTask();
    }
  };
  const checkData = () => {
    if (
      nameRef.current.value != "" &&
      categoryRef.current.value != "" &&
      detailsRef.current.value != "" &&
      startDateRef.current.value != "" &&
      endDateRef.current.value != ""
    ) {
      return true;
    }
    alert("Enter requier data !");
    return false;
  };
  const createTask = async () => {
    const task = new TaskModel(
      nameRef.current.value,
      categoryRef.current.value,
      detailsRef.current.value,
      startDateRef.current.value,
      endDateRef.current.value
    );
    const newTask = await controller.create(task);
    if (newTask != null) {
      dispatch(tasksAction.create(newTask));
      clearTask();
    } else {
      alert("Failed to create new task ! ");
    }
  };
  const clearTask = () => {
    nameRef.current.value = "";
    categoryRef.current.value = "";
    detailsRef.current.value = "";
    startDateRef.current.value = "";
    endDateRef.current.value = "";
  };
  return (
    <Fragment>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2 mt-3">Add New Task </h1>
        </div>

        <form className="row mt-5" onSubmit={onSubmitHandler}>
          <div className="col-md-12">
            <div className="form-outline mb-4">
              <label className="form-label">Task name</label>
              <input
                type="texy"
                id="loginName"
                className="form-control"
                placeholder="Task name"
                ref={nameRef}
              />
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-outline mb-4">
              <label className="form-label">Task Category</label>
              <select
                className=" dropdown form-control pull-right"
                placeholder="Filter By status"
                autoComplete="off"
                ref={categoryRef}>
                <option value="">Select Category</option>
                <option value="Work">Work</option>
                <option value="Hom1e">Home</option>
                <option value="Family">Family</option>
                <option value="Sport">Sport</option>
              </select>
            </div>
          </div>

          {/* <div className="col-md-12">
            <div className="form-outline mb-4">
              <label className="form-label">Image For Task</label>
              <input className="form-control" type="file" id="formFile" />
            </div>
          </div> */}

          <div className="col-md-12">
            <label className="form-label">Task Details</label>
            <div className="form-outline mb-4">
              <textarea
                className="form-control"
                ref={detailsRef}
                id="exampleFormControlTextarea1"
                rows="3"></textarea>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-outline mb-4">
              <label className="form-label">Start date</label>
              <input
                type="date"
                className="form-control"
                placeholder="Task name"
                ref={startDateRef}
              />
            </div>
          </div>
          <div className="col-md-6">
            <label className="form-label">End date</label>
            <div className="form-outline mb-4">
              <input
                type="date"
                className="form-control"
                placeholder="Task name"
                ref={endDateRef}
              />
            </div>
          </div>

          <div>
            <button type="submit" className="pull-right btn btn-main mb-4">
              Add New Task
            </button>
          </div>
        </form>
      </main>
    </Fragment>
  );
};
export default NewTaskPage;
