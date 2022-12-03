import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskRepository{
    private tasks = [];

    async listTask(){
        return this.tasks;
    }

    async addNewtask(task){
        this.tasks.push(task);
    }

    async updateTask(task){
        this.tasks = this.tasks.filter(oldTask=>{
            return oldTask.id != task.id
        });
        console.log(this.tasks)
        this.tasks.push(task);

        return this.tasks;
    }

    async deleteTask(id){
        this.tasks = this.tasks.filter(task=>{
            return task.id != id
        });
        return this.tasks;
    }
}