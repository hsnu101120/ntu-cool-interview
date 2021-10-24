import { Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CourseServerice } from "./courses.service";

@Controller('courses')
export class CourseController {
    constructor(private courseService: CourseServerice) {}

    @Get()
    listAllCourses() {
        return this.courseService.listAllCourses();
    }

    // 6. everyone can query users by course id
    @Get()
    queryUserByCouseId() {

    }

    // 7. everyone can enroll a user to a course by user id, course id and role
    @Post()
    enrollUserToCourse() {

    }

    // 8. everyone can withdraw a user by enrollment id
    @Delete()
    withdrawUserById() {

    }

    // 10. everyone can query enrollments by user id, course id or role
    @Get()
    queryEnrollmentByUserId() {

    }

    @Get()
    queryEnrollmentByCourseId() {

    }

    @Get()
    queryEnrollmentByRole() {

    }

    // 11. everyone can get a course by course id
    @Get(':courseId')
    getCourseByCourseId(@Param('courseId') courseId: number) {
        return this.courseService.getCourseById(courseId);
    }

    // 12. everyone can query courses by user id
    @Get()
    queryCourseByUserId() {

    }
}