import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FAQ } from './faqs.entity';
import { CreateFAQDto } from './dto/create-faq.dto';
import { UpdateFAQDto } from './dto/update-faq.dto';

@Injectable()
export class FAQService {
  constructor(
    @InjectModel(FAQ)
    private faqModel: typeof FAQ,
  ) {}

  async create(createFAQDto: CreateFAQDto): Promise<FAQ> {
    const { no, nama_channel, questions, answers } = createFAQDto;
    return this.faqModel.create<FAQ>({
      no,
      nama_channel,
      questions,
      answers,
    });
  }

  async findAll(): Promise<FAQ[]> {
    return this.faqModel.findAll();
  }

  async findOne(id: number): Promise<FAQ> {
    return this.faqModel.findByPk(id);
  }

  async update(
    id: number,
    updateFAQDto: UpdateFAQDto,
  ): Promise<[number, FAQ[]]> {
    const [affectedCount, faqArray] = await this.faqModel.update(updateFAQDto, {
      where: { id },
      returning: true,
    });
    return [affectedCount, faqArray];
  }

  async remove(id: number): Promise<number> {
    return this.faqModel.destroy({
      where: { id },
    });
  }
}
