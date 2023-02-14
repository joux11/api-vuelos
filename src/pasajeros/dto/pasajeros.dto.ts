import { IsNotEmpty,IsString, IsEmail} from "class-validator";

export class PasajerosDTO{
    @IsNotEmpty()
    @IsString()
    readonly name:string;
    @IsEmail()
    @IsString()
    readonly email:string;
}