import { PartialType } from '@nestjs/swagger';
import { CreateMovieDto } from './creat-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
