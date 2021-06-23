import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateIssueInput } from './dto/create-issue.input';
import { UpdateIssueInput } from './dto/update-issue.input';

@Injectable()
export class IssuesService {

  constructor(private readonly data: PrismaService){}

  async create(data: any) {
    return await this.data.issues.create({
      data,
  }) ;
  }

  async findAll() {
    return await this.data.issues.findMany();
  }

  async findOne(id: number) {
    const issueFroDisplay =  await this.data.issues.findUnique({
      where: { id },
    }) ;

    if (!issueFroDisplay) {
        throw new NotFoundException(`L'issue ayant l'identifiant ${id} n'existe pas`)
    }

  return issueFroDisplay
  }

  async update(data: UpdateIssueInput) {
    return await this.data.issues.update({
      where: {id: data.id},
      data
  });
  }

  async remove(id: number) {
    return this.findOne(id).then( 
      async(issue) => 
      await this.data.issues.delete({where: {id}}),
      );
  }
}
