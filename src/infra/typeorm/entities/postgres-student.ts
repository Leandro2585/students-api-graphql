import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('tb_student')
export class PostgresStudent {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  name!: string

  @Column()
  email!: string

  @Column()
  cpf!: string
}