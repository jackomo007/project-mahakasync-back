import {
  IsString,
  IsOptional,
  IsEnum,
  IsDate,
  IsMongoId,
} from "class-validator";

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  readonly title?: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @IsDate()
  readonly dueDate?: Date;

  @IsOptional()
  @IsEnum(["pending", "in-progress", "completed"])
  readonly status?: string;

  @IsOptional()
  @IsEnum(["low", "medium", "high"])
  readonly priority?: string;

  @IsOptional()
  @IsMongoId()
  readonly projectId?: string;
}
