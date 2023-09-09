import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;
}

@Entity()
export class Gab {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  content: string;

  @Column()
  authorId: string;

  @ManyToOne(() => User)
  author: User;

  @CreateDateColumn()
  authoredAt: Date;
}
