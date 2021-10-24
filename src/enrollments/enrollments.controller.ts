import { Controller, Get, Param } from "@nestjs/common";
import { EnrollmentService } from "./enrollment.service";

@Controller('enrollments')
export class EnrollmentController {
    constructor(private enrollmentService: EnrollmentService) {}

    @Get()
    listAllEnrollments() {
        return this.enrollmentService.listAllEnrollment();
    }

    // 9. everyone can get an enrollment by enrollment id
    @Get(':id')
    getEnrollmentById(@Param('id') enrollmentId: number) {
        return this.enrollmentService.getEnrollmentById(enrollmentId);
    }
}