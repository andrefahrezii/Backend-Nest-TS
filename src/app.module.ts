import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FAQ } from './faqs/faqs.entity';
import { FAQController } from './faqs/faqs.controller';
import { FAQService } from './faqs/faqs.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'passwordroot',
      database: 'cxo',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([FAQ]),
  ],
  controllers: [FAQController],
  providers: [FAQService],
})
export class AppModule {}
