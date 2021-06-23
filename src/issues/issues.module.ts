import { Module } from '@nestjs/common';
import { IssuesService } from './issues.service';
import { IssuesResolver } from './issues.resolver';
import { PrismaModule } from 'src/core/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [IssuesResolver, IssuesService]
})
export class IssuesModule {}
