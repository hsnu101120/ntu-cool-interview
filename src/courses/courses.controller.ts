import { Controller, Delete, Get, Post } from "@nestjs/common";
import { CourseServerice } from "./courses.service";

@Controller('courses')
export class CourseController {
    constructor(private courseService: CourseServerice) {}

    // 6. everyone can query users by course id
    @Get(':id')
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

    // 9. everyone can get an enrollment by enrollment id
    @Get()
    getEnrollmentById() {

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
    @Get()
    getCourseByCourseId() {

    }

    // 12. everyone can query courses by user id
    @Get()
    queryCourseByUserId() {
        
    }
}