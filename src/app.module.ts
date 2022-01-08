import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MoviesModule,
    MongooseModule.forRoot(
      `${process.env.MONGOBASEURL}://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}${process.env.DATABASE_URL}`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
