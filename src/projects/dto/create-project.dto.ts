import { IsString, IsOptional } from "class-validator";

export class CreateProjectDto {
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly description?: string;
}
