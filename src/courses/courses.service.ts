import { BadRequestException, Injectable } from "@nestjs/common";
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

    listAllCourses() {
        return [ ...this.courses ];
    }

    getCourseById(id: number) {
        const course = this.findCourseById(id)[0];
        return { ...course };
    }

    private findCourseById(id: number): [Course, number] {
        const courseIndex = this.courses.findIndex(course => course.id == id);
        const course = this.courses[courseIndex];
        // if the course doesn’t exist, return Bad Request
        if (!course) {
            throw new BadRequestException('Cannot find course');
        }
        return [course, courseIndex];
    }
}