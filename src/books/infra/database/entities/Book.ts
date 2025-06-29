import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('livros')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  pages: number;

  @Column()
  ISBN_code: string

  @Column()
  publisher: string

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}
