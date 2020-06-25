import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import {GraphQLModule} from '@nestjs/graphql'
import { LessonModule } from './lesson/lesson.module';
import { Lesson } from './lesson/lesson.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://pavel:pavel@cluster0-0ti6t.mongodb.net/passport?retryWrites=true',
      synchronize: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      entities: [
        Lesson
      ]
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    LessonModule,
    
  ],
  
})
export class AppModule {}
