import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ICategory } from './category.interface';

@Entity()
export class Category implements ICategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 36 })
  uuid: string;

  @Column({ length: 500 })
  text: string;

  @Column('varchar')
  userId: string;

  @Column('int')
  isDel: number;

  @Column('int')
  isPub: number;
}
