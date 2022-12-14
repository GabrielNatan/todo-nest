import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateTaskDTO } from "./dto/createTask.dto";
import { UpdateTaskDTO } from "./dto/updateTask.dto";
import { TaskRepository } from "./task.repository";

@Controller('/')
export class TaskController{

    constructor(private taskRepository: TaskRepository){}

    @Get()
    async listTask(){
        return this.taskRepository.listTask();
    }

    @Post()
    async newTask(@Body() newTask:CreateTaskDTO){
        this.taskRepository.addNewtask(newTask);
        return newTask;
    }

    @Put()
    async updateTask(@Body() updateTask:UpdateTaskDTO){
        this.taskRepository.updateTask(updateTask);
        return updateTask;
    }

    @Delete('/:id')
    async deleteTask(@Param() id){
        this.taskRepository.deleteTask(id.id)
        return id;
    }
}