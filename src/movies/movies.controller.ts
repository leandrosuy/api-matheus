import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('api/v1/')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post('saveMovie')
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get('getAllMovie')
  findAll() {
    return this.moviesService.findAll();
  }

  @Get('getMovie/:id')
  findOne(@Param('id') id: string) {
    return this.moviesService.findOne(id);
  }

  @Patch('updateMovie/:id')
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    console.log(id);
    return this.moviesService.update(id, updateMovieDto);
  }

  @Delete('deleteMovie/:id')
  remove(@Param('id') id: string) {
    return this.moviesService.remove(id);
  }
}
