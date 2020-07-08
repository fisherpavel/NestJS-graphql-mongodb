import { Resolver, Mutation, Args, Query } from "@nestjs/graphql";
import { StudentType } from "./student.type";
import { CreateStudentInput } from "./create-student.input";
import { StudentService } from "./student.service";
import { Student } from "./student.entity";


@Resolver(of => StudentType)
export class StudentResolver {

    constructor(
        private studentService: StudentService
    ){}

    @Query(returns => [StudentType])
    async students(){
        return this.studentService.getStudents()
    }

    @Query(returns => StudentType)
    async student(
        @Args('id') id: string
    ){
        return this.studentService.getStudent(id)      
    }

    @Mutation(returns => StudentType)
    async createStudent(
        @Args('CreateStudentInput') createStudentInput: CreateStudentInput
    ){
        return this.studentService.createStudent(createStudentInput)
    }
}