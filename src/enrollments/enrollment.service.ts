import { BadRequestException, Injectable } from "@nestjs/common";
import { Enrollment } from "./enrollment";

@Injectable()
export class EnrollmentService {
    private enrollments: Enrollment[] = [];

    listAllEnrollment() {
        return [...this.enrollments];
    }

    getEnrollmentById(id:number) {
        const enrollment = this.findEnrollmentById(id)[0];
        return { ...enrollment };
    }

    private findEnrollmentById(id: number): [Enrollment, number] {
        const enrollmentIndex = this.enrollments.findIndex(enroll => enroll.id == id);
        const enrollment = this.enrollments[enrollmentIndex];
        if (!enrollment) {
            throw new BadRequestException('Cannot find enrollment');
        }
        return [enrollment, enrollmentIndex];
    }
}