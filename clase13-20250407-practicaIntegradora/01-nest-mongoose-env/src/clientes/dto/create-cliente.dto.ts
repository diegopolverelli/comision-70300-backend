import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsOptional, IsString } from "class-validator"

export class CreateClienteDto {

    @ApiProperty({example:"La Casa del Audio SRL"})
    @IsString()
    razonSocial: string
    
    @ApiProperty({example:"20-99999999-9"})
    @IsString()
    cuit: string

    @ApiProperty({example:1950000})
    @IsNumber()
    @IsOptional()
    ctaCte?: number
}
