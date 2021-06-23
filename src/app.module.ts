import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { ArticleModule } from './article/article.module';
import { IssuesModule } from './issues/issues.module';

@Module({
  imports: [CoreModule, ArticleModule, IssuesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
