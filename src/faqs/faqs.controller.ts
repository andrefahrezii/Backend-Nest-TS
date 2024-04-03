import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateFAQDto } from './dto/create-faq.dto';
import { UpdateFAQDto } from './dto/update-faq.dto';
import { FAQService } from './faqs.service';
import { FAQ } from './faqs.entity';

@Controller('faq')
export class FAQController {
  constructor(private readonly faqService: FAQService) {}

  @Get()
  async findAll(): Promise<FAQ[]> {
    return this.faqService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<FAQ> {
    return this.faqService.findOne(+id);
  }

  @Post()
  async create(@Body() createFAQDto: CreateFAQDto): Promise<FAQ> {
    return this.faqService.create(createFAQDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFAQDto: UpdateFAQDto,
  ): Promise<[number, FAQ[]]> {
    return this.faqService.update(+id, updateFAQDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<number> {
    return this.faqService.remove(+id);
  }
}
