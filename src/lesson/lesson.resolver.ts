import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { LessonService } from "./lesson.service";
import { CreateLessonInput } from "./lesson.input";


@Resolver(of => LessonType)
export class LessonResolver {
    constructor(
        private lessonservice: LessonService
    ){}

    @Query(returns => LessonType)
    lesson(
        @Args('id') id: string
    ){
        return this.lessonservice.getLesson(id)
    }

    @Mutation(returns => LessonType)
    createLesson(
       @Args('createLessonInput') createLessonInput: CreateLessonInput
    ){
        return this.lessonservice.createLesson(createLessonInput)
    }
}