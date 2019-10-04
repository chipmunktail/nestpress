import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IMenu } from './menu.interface';

@Entity()
export class Menu implements IMenu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 36 })
  uuid: string;

  @Column({ length: 500 })
  text: string;

  @Column('varchar')
  categoryId: string;

  @Column('int')
  isDel: number;
}
