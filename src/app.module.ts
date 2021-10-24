import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './courses/courses.module';
import { EnrollmentModule } from './enrollments/enrollments.module';
import { ProductModule } from './products/products.module';
import { UserModule } from './users/users.module';

@Module({
  imports: [ProductModule, UserModule, CourseModule, EnrollmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
