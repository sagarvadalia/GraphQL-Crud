import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
@ObjectType()
@Entity()
export class Stock extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;
  @Field()
  @Column()
  symbol: string;
  @Field()
  @Column()
  company: string;
  @Field()
  @Column()
  sector: string;
}
