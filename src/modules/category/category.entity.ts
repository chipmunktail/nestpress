import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category.interface';

@Entity()
export class CategoryEntity implements Category {
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
