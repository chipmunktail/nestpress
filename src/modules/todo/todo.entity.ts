import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ITodo } from './todo.interface';

@Entity()
export class Todo implements ITodo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 36 })
  uuid: string;

  @Column({ length: 500 })
  text: string;

  @Column('int')
  menuId: number;

  @Column('int')
  isDel: number;
}
