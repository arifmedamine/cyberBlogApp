import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateIssueInput {

    @IsNotEmpty()
    @Field({nullable: true})
    title: string;

    @Field({nullable: true})
    description: string;
}
