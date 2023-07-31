import axios from "axios";

class TaskModel {
    constructor(name,category,details,startDate,endDate,userId,status,id,){
        this.name=name;
        this.category=category;
        this.details=details;
        this.startDate=startDate;
        this.endDate=endDate;
        this.userId = userId;
        this.status = status;
        this.id=id;
    }
    async save() {
        let token = localStorage.getItem("token");
        let userId = localStorage.getItem("userId");
        try {
            let response = await axios.post(`https://dashboard-tasks-92683-default-rtdb.firebaseio.com/${userId}.json?auth=${token}`,{
                name:this.name,
                category:this.category,
                details:this.details,
                startDate:this.startDate,
                endDate:this.endDate,
                status: this.status,
                userId:this.userId,
            },
            );
            this.id=response.data.name;
            return this;
        } catch (error) {
            return null;
        }
    }
    async update() {
        let token = localStorage.getItem("token")
        try {
            let response = await axios.put(`https://dashboard-tasks-92683-default-rtdb.firebaseio.com/TaskModel/${this.id}.json?auth=${token}`,{
                name:this.name,
                category:this.category,
                details:this.details,
                startDate:this.startDate,
                endDate:this.endDate,
                status:this.status 
            },
            );
            return true;
        } catch (error) {
            return false;
        }
    }
    async delete() {
        let token = localStorage.getItem("token");
            try {
            let response = await axios.delete(`https://dashboard-tasks-92683-default-rtdb.firebaseio.com/${this.userId}/${this.id}.json?auth=${token}` ,
            );
            console.log(response);
            return true
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    static async read() {
        let token = localStorage.getItem("token");
        let userId = localStorage.getItem("userId")
        try {
            let response = await axios.get(`https://dashboard-tasks-92683-default-rtdb.firebaseio.com/${userId}.json?auth=${token}`,
            );
            let tasks = []
            for(const key in response.data){
                const object = response.data[key];
                const task = new TaskModel(
                    object.name,
                    object.category,
                    object.details,
                    object.startDate,
                    object.endDate,
                    object.userId,
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
