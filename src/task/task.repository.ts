import { Injectable } from "@nestjs/common";
import { TaskEntity } from "./task.entity";


@Injectable()
export class TaskRepository{
    private tasks = [];

    async listTask(){
        return this.tasks;
    }

    async addNewtask(task :TaskEntity){
        this.tasks.push(task);
    }

    async updateTask(task){
        this.tasks = this.tasks.filter(oldTask=>{
            return oldTask.id != task.id
        });
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