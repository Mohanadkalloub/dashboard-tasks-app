import ProcessResponse from "../models/ProcessResponse";
import TaskModel from "../models/TaskModel";

class TaskController {
    /**
     * Functions : 
     *  - Create
     *  - Read
     *  - Delete
     */
    async create(TaskModel) {
        if (
            TaskModel.name.value !=""&& 
            TaskModel.category.value !="" && 
            TaskModel.details.value != "" && 
            TaskModel.startDate.value != "" && 
            TaskModel.endDate.value != "" 
        ){
            let response = await TaskModel.save()
            if(response != null){
                return new ProcessResponse(true , 'Task created successfully' , response);
            }else{
                return new ProcessResponse(false , 'Failed to create new task');
            }
        }else {
            return new ProcessResponse(false , 'Enter required data' )
        };
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