import { CreateIssueInput } from './create-issue.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateIssueInput extends PartialType(CreateIssueInput) {
    @IsNotEmpty()
    @Field({nullable: true})
    id: number;

}
