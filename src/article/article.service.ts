import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { UpdateArticleDTO } from './dto/update-artice.dto';

@Injectable()
export class ArticleService {

    constructor(private readonly data: PrismaService){}

    async getMany(){
        return await this.data.article.findMany();
    }
    async get(id: number){
        const articleFroDisplay =  await this.data.article.findUnique({
            where: { id },
        }) ;
    
        if (!articleFroDisplay) {
            throw new NotFoundException(`L'article ayant l'identifiant ${id} n'existe pas`)
        }

        return articleFroDisplay
    }
    async create(data: any){
        return await this.data.article.create({
            data,
        }) ;
    }
    async update(data: UpdateArticleDTO){
        return await this.data.article.update({
            where: {id: data.id},
            data
        });
    }
    async delete(id: number){
        return this.get(id).then( 
            async(article) => 
            await this.data.article.delete({where: {id}}),
            );
    }
}

