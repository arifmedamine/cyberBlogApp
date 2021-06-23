import { Field, ID, ObjectType } from'@nestjs/graphql';

@ObjectType()
export class Article {
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

