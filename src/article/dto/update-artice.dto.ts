import {Field, InputType, PartialType} from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { CreateArticleDTO } from './create-article.dto';

@InputType()
export class UpdateArticleDTO extends PartialType(CreateArticleDTO){
    @IsNotEmpty()
    @Field({nullable: true})
    id: number;

    // @Field({defaultValue: Date.now()})
    // updateAt: Date;
}