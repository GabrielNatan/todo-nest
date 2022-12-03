import { Module } from '@nestjs/common';
import { TaskController } from './task/task.controller';
import { TaskRepository } from './task/task.repository';

@Module({
  providers:[TaskRepository],
  controllers: [TaskController],
})
export class AppModule {}
