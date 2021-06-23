import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { IssuesService } from './issues.service';
import { Issue } from './entities/issue.entity';
import { CreateIssueInput } from './dto/create-issue.input';
import { UpdateIssueInput } from './dto/update-issue.input';

@Resolver(() => Issue)
export class IssuesResolver {
  constructor(private readonly issuesService: IssuesService) {}

  @Mutation(() => Issue)
  async createIssue(@Args({ name: 'input', type: () => CreateIssueInput }) createIssueInput: CreateIssueInput) {
    return await this.issuesService.create(createIssueInput);
  }

  @Query(() => [Issue])
  async findAll() {
    return await this.issuesService.findAll();
  }

  @Query(() => Issue)
  async findOne(@Args('id') id: number) {
    return await this.issuesService.findOne(id);
  }

  @Mutation(() => Issue)
  async updateIssue(
    @Args({ name: 'input', type: () => UpdateIssueInput })
    data: UpdateIssueInput) {
    return await this.issuesService.update(data);
  }

  @Mutation(() => Issue)
  async removeIssue(@Args('id') id: number) {
    return await this.issuesService.remove(id);
  }
}
