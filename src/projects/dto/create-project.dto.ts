import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";

export class CreateProjectDto {
  @ApiProperty({ description: "The title of the project" })
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: "The description of the project",
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly description?: string;
}
