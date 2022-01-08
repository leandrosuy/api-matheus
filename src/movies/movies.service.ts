import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie, MovieDocument } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movie.name) private movieModel: Model<MovieDocument>,
  ) {}

  create(createMovieDto: CreateMovieDto) {
    const movie = new this.movieModel(createMovieDto);
    return movie.save();
  }

  findAll() {
    return this.movieModel.find();
  }

  findOne(id: string) {
    return this.movieModel.findById(id);
  }

  update(id: string, updateMovieDto: UpdateMovieDto) {
    //procurar pelo id dps atualizar(_id é o id do mongo e o id é o id do parametro)
    return this.movieModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateMovieDto, //'$set' responseavel por alterar os campos
      },
      {
        new: true, //responsavel por 'salvar a alteração'
      },
    );
  }

  remove(id: string) {
    return this.movieModel
      .deleteOne({
        _id: id,
      })
      .exec(); //serve para executar o delete
  }
}
