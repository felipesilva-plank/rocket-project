import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import Crewman from "./Crewman";

@Entity("crew")
class Crew{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => Crewman)
    @JoinTable({name: "crew_crewman"})
    crewman : Crewman[];

    constructor(name: string, crewman?: Crewman[]){
        this.name = name;
        this.crewman = crewman;
    }
    
}
export default Crew;