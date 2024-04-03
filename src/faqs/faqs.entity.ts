import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class FAQ extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name_channel: string;

  @Column('json')
  question: string[];

  @Column('json')
  answer: string[];
}
