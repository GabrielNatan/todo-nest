import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller('/')
export class TaskController{
    tasks = ["um"];

    @Get()
    async listTask(){
        return this.tasks;
    }

    @Post()
    async newTask(){
        this.tasks.push("dois");
        return "dois";
    }

    @Put()
    async updateTask(){
        
        let newTask = [this.tasks[0],"tres"];
        this.tasks = newTask
        return this.tasks;
    }

    @Delete()
    async deleteTask(){
        this.tasks = this.tasks.map(task=>{
           if(task != "um"){
               return task
           }
        })
        return this.tasks;
    }
}