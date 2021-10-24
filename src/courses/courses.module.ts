import { Module } from "@nestjs/common";
import { CourseController } from "./courses.controller";
import { CourseServerice } from "./courses.service";

@Module({
    controllers: [CourseController],
    providers: [CourseServerice]
})
export class CourseModule {}