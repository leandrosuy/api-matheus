import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
  @Prop()
  title: string;

  @Prop()
  poster: string;

  @Prop()
  sinopse: string;

  @Prop()
  isAmovie: boolean;

  @Prop()
  alreadyBeenWatched: boolean;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
