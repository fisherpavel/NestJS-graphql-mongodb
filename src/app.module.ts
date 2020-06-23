import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import {GraphQLModule} from '@nestjs/graphql'


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://pavel:pavel@cluster0-0ti6t.mongodb.net/passport?retryWrites=true',
      synchronize: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      entities: [
        
      ]
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    
  ],
  
})
export class AppModule {}
