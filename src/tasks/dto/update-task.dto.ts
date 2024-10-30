import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsEnum,
  IsDate,
  IsMongoId,
} from "class-validator";

export class UpdateTaskDto {
  @ApiProperty({ description: "The title of the task", required: false })
  @IsOptional()
  @IsString()
  readonly title?: string;

  @ApiProperty({ description: "The description of the task", required: false })
  @IsOptional()
  @IsString()
  readonly description?: string;

  @ApiProperty({ description: "The due date of the task", required: false })
  @IsOptional()
  @IsDate()
  readonly dueDate?: Date;

  @ApiProperty({ description: "The status of the task", required: false })
  @IsOptional()
  @IsEnum(["pending", "in-progress", "completed"])
  readonly status?: string;

  @ApiProperty({ description: "The priority of the task", required: false })
  @IsOptional()
  @IsEnum(["low", "medium", "high"])
  readonly priority?: string;

  @IsOptional()
  @IsMongoId()
  readonly projectId?: string;
}
