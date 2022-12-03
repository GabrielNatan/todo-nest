import { IsNotEmpty } from "class-validator";

export class CreateTaskDTO {
    @IsNotEmpty({message: "filed is required!"})
    title: string;
    
    @IsNotEmpty({message: "filed is required!"})
    message: string;
}
