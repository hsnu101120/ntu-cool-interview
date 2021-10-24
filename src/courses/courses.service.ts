import { Injectable } from "@nestjs/common";
import { Course } from "./course";

@Injectable()
export class CourseServerice {
    private readonly courses: Course[] = [
        new Course(1, "Nestjs 101"),
        new Course(2, "成為 Nestjs 大師的路上"),
        new Course(3, "從零開始的 nestjs 之旅"),
        new Course(4, "You Don't Know Js"),
        new Course(5, "I Don't Know Js yet")
    ];

    
}