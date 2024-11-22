import { IsDefined, IsNumber, IsString } from "class-validator";

export class CreateSongDto {
    @IsDefined({
        message : "Title field must be filled!"
    })
    @IsString()
    title : string
    @IsDefined({
        message : "Author field must be filled!"
    })
    @IsString()
    author : string
    @IsDefined({
        message : "Length field must be filled!"
    })
    @IsNumber()
    length : number
    @IsDefined({
        message : "Price field must be filled!"
    })
    @IsNumber()
    price : number
}
