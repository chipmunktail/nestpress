import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ICategory } from './category.interface';

@Entity()
export class Category implements ICategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  text: string;

  @Column('int')
  userId: number;

  @Column('int')
  isDel: number;

  @Column('int')
  isPub: number;
}
