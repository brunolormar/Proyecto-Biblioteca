import { Injectable } from '@nestjs/common';
import { CreateAutoreDto } from './dto/create-autore.dto';
import { UpdateAutoreDto } from './dto/update-autore.dto';

@Injectable()
export class AutoresService {
  create(createAutoreDto: CreateAutoreDto) {
    return 'This action adds a new autore';
  }

  findAll() {
    return `This action returns all autores`;
  }

  findOne(id: string) {
    return `This action returns a #${id} autore`;
  }

  update(id: string, updateAutoreDto: UpdateAutoreDto) {
    return `This action updates a #${id} autore`;
  }

  remove(id: string) {
    return `This action removes a #${id} autore`;
  }
}
