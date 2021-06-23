import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ArticleService } from './article.service';
import { CreateArticleDTO } from './dto/create-article.dto';
import { UpdateArticleDTO } from './dto/update-artice.dto';
import { Article } from './model/article';

@Resolver(()=> Article)
export class ArticleResolver {
    constructor(private readonly articleService: ArticleService) {}

    @Query(()=> [Article])
    async articles() {
        return await this.articleService.getMany();
    }

    @Query(()=> Article)
    async article(@Args('id') id: number) {
        return await this.articleService.get(id);
    }
    @Mutation(()=> Article)
    async createArticle(
        @Args({ name: 'input', type: () => CreateArticleDTO })
        data: CreateArticleDTO
    ){
        return await this.articleService.create(data);
    }

    @Mutation(()=> Article)
    async updateArticle(
        @Args({ name: 'input', type: () => UpdateArticleDTO })
        data: UpdateArticleDTO
    ){
        return await this.articleService.update(data);
    }

    @Mutation(()=> Article)
    async deleteArticle(@Args('id') id: number) {
        return await this.articleService.delete(id)
    }
}
