import { IsNotEmpty,IsString, IsEmail} from "class-validator";



export class UsuarioDTO{
    @IsNotEmpty()
    @IsString()
    readonly nombre:string;

    @IsNotEmpty()
    @IsString()
    readonly usuario:string;
    @IsEmail()
    @IsString()
    readonly email:string;
    @IsNotEmpty()
    @IsString()
    readonly password:string;

}