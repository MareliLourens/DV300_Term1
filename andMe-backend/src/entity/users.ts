import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id!: number 

    @Column()
    full_name!: string 

    @Column()
    username!: string 

    @Column()
    phone_number!: string

    @Column()
    unique_question!: string

    @Column()
    unique_answer!: string

    @BeforeInsert()
    async hashanswer(): Promise<void> {
        const salt = await bcrypt.genSalt();
        this.unique_answer = await bcrypt.hash(this.unique_answer, salt);
    }
}