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

    enrollUserToCourse(userId: number, courseId: number, role: 'student' | 'teacher') {
        const id = new Date().valueOf();
        // if the user or the course doesn’t exist, return Bad Request
        if (false) {
            throw new BadRequestException('Cannot find user');
        }
        if (false) {
            throw new BadRequestException('Cannot find course');
        }
        const newEnrollment = new Enrollment(id, userId, courseId, role);
    }

    withdrawUserByEnrollmentId(enrollmentId: number) {

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