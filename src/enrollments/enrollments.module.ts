import { Module } from "@nestjs/common";
import { EnrollmentService } from "./enrollment.service";
import { EnrollmentController } from "./enrollments.controller";

@Module({
    controllers: [EnrollmentController],
    providers: [EnrollmentService]
})
export class EnrollmentModule {}