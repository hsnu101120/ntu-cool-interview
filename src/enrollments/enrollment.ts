export class Enrollment {
    constructor(
        public id: number,
        public userId: number,
        public courseId: number,
        public role: 'student' | 'teacher'
    ) {}
}