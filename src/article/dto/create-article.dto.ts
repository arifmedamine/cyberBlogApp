import {Field, InputType} from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateArticleDTO {

    @IsNotEmpty()
    @Field({nullable: true})
    title: string;

    @Field({nullable: true})
    description: string;
}