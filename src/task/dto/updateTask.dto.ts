import { IsNotEmpty } from "class-validator";

export class UpdateTaskDTO {
    @IsNotEmpty({message: "filed is required!"})
    id: string;

    @IsNotEmpty({message: "filed is required!"})
    title: string;
    
    @IsNotEmpty({message: "filed is required!"})
    message: string;
}
