import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
    
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(["Gay", "Straight", "Pan"], {message: "Role must be Gay, Straight or Pan"})
    role: "Gay" | "Straight" | "Pan";
}

