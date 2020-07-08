import { Resolver, Query, Mutation, Args, ResolveField, Parent } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { LessonService } from "./lesson.service";
import { CreateLessonInput } from "./lesson.input";
import { AssignStudentsToLessonInput } from "./assignStudentToLessonInput";
import { Lesson } from "./lesson.entity";
import { StudentService } from "../student/student.service";


@Resolver(of => LessonType)
export class LessonResolver {
    constructor(
        private lessonservice: LessonService,
        private studentService: StudentService
    ){}

    @Query(returns => LessonType)
    lesson(
        @Args('id') id: string
    ){
        return this.lessonservice.getLesson(id)
    }

    @Query(returns => [LessonType])
    lessons(){
        return this.lessonservice.getLessons()
    }

    @Mutation(returns => LessonType)
    createLesson(
       @Args('createLessonInput') createLessonInput: CreateLessonInput
    ){
        return this.lessonservice.createLesson(createLessonInput)
    }

    @Mutation(returns => LessonType)
    assignStudentsToLesson(
        @Args('assignStudentsToLessonInput') assignStudentsToLessonInput: AssignStudentsToLessonInput
    ){
        const {lessonId, studentIds} = assignStudentsToLessonInput
        return this.lessonservice.assignStudentsToLesson(lessonId, studentIds)
    }

    @ResolveField()
    async students(@Parent() lesson: Lesson){
        console.log(lesson)
        return this.studentService.getManyStudents(lesson.students)
    }

}