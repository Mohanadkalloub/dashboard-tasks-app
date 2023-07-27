import axios from "axios";

class TaskModel {
    constructor(name,category,details,startDate,endDate,status,id){
        this.name=name;
        this.category=category;
        this.details=details;
        this.startDate=startDate;
        this.endDate=endDate;
        this.status = status;
        this.id=id
    }
    async save() {
        try {
            const response = await axios.post(`https://dashboard-tasks-92683-default-rtdb.firebaseio.com/TaskModel.json`,{
                name:this.name,
                category:this.category,
                details:this.details,
                startDate:this.startDate,
                endDate:this.endDate,
                // status: this.status,
            },
            {headers : {
                Authorization : "",
            }}
            );
            this.id=response.data.name;
            return this;
        } catch (error) {
            return null;
        }
    }
    async update() {
        try {
            const response = await axios.put(`https://dashboard-tasks-92683-default-rtdb.firebaseio.com/TaskModel/${this.id}.json`,{
                name:this.name,
                category:this.category,
                details:this.details,
                startDate:this.startDate,
                endDate:this.endDate,
                status:this.status 
            },
            {headers : {
                Authorization : "",
            }}
            );
            return true;
        } catch (error) {
            return false;
        }
    }
    async delete() {
        try {
            const response = await axios.delete(`https://dashboard-tasks-92683-default-rtdb.firebaseio.com/TaskModel/${this.id}.json` ,
            {headers : {
                Authorization : "",
            }} 
            );
            return true
        } catch (error) {
            return false;
        }
    }
    static async read() {
        try {
            const response = await axios.get(`https://dashboard-tasks-92683-default-rtdb.firebaseio.com/TaskModel.json`, {
                headers : {
                    Authorization : "",
                },
            }
            );
            const tasks = []
            for(const key in response.data){
                const object = response.data[key];
                const task = new TaskModel(
                    object.name,
                    object.category,
                    object.details,
                    object.startDate,
                    object.endDate,
                    object.status,
                    // id replace => key 
                    key
                );
                tasks.push(task);   
            }
            return tasks
        } catch (error) {
            return []
        }
    }
}
export default TaskModel;