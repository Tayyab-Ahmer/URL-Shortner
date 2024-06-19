import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UrlShortner {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    longUrl: string;

    @Column()
    shortUrl: string;

    @Column()
    urlCode: string;

}