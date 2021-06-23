import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Issue {
    @Field(() => ID, { nullable: true })
    id: number;

    @Field({ nullable: true })
    title: string;

    @Field({ nullable: true })
    description: string;

    @Field({ nullable: true })
    createdAt: Date;

    @Field({ nullable: true })
    updateAt: Date;
}
