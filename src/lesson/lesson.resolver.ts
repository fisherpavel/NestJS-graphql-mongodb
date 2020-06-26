import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { LessonService } from "./lesson.service";


@Resolver(of => LessonType)
export class LessonResolver {
    constructor(
        private lessonservice: LessonService
    ){}

    @Query(returns => LessonType)
    lesson(){
        return {
            id: 'sd123fd',
            name: 'Physics class',
            startDate: (new Date()).toISOString(),
            endDate:(new Date()).toISOString()
        }
    }

    @Mutation(returns => LessonType)
    createLesson(
        @Args('name') name: string,
        @Args('startDate') startDate: string,
        @Args('endDate') endDate: string
    ){
        return this.lessonservice.createLesson(name, startDate, endDate)
    }
}