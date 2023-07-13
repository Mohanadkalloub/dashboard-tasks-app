import TaskModel from "../models/TaskModel";

class TaskController {
    /**
     * Functions : 
     *  - Create
     *  - Read
     *  - Delete
     */
    async create(TaskModel) {
        return await TaskModel.save();
    }
    async read() {
        return await TaskModel.read();
    }
    async delete(TaskModel) {
        return await TaskModel.delete();
    }
    async update(TaskModel) {
        return await TaskModel.update();
    }
};
export default TaskController;