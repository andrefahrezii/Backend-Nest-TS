import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNotEmpty, IsArray } from 'class-validator';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('cats')
export class UpdateFAQDto {
  @ApiProperty({ description: 'Nomor FAQ (opsional)' })
  @IsOptional()
  @IsNotEmpty()
  no?: number;

  @ApiProperty({ description: 'Nama channel FAQ' })
  @IsOptional()
  @IsNotEmpty()
  nama_channel?: string;

  @ApiProperty({ description: 'Daftar pertanyaan FAQ' })
  @IsOptional()
  @IsArray()
  @IsNotEmpty()
  questions?: string[];

  @ApiProperty({ description: 'Daftar jawaban FAQ' })
  @IsOptional()
  @IsArray()
  @IsNotEmpty()
  answers?: string[];
}
