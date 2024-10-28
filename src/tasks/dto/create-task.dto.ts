import {
  IsString,
  IsOptional,
  IsEnum,
  IsDateString,
  IsMongoId,
} from "class-validator";

export class CreateTaskDto {
  @IsString()
  readonly title: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @IsDateString()
  readonly dueDate?: string;

  @IsOptional()
  @IsEnum(["pending", "in-progress", "completed"])
  readonly status?: string;

  @IsOptional()
  @IsEnum(["low", "medium", "high"])
  readonly priority?: string;

  @IsMongoId()
  readonly projectId: string;
}
