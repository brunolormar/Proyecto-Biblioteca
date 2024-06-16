import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AutoresService } from './autores.service';
import { CreateAutoreDto } from './dto/create-autore.dto';
import { UpdateAutoreDto } from './dto/update-autore.dto';

@Controller('autores')
export class AutoresController {
  constructor(private readonly autoresService: AutoresService) {}

  @Post()
  create(@Body() createAutoreDto: CreateAutoreDto) {
    console.log('usuario creado')
    return this.autoresService.create(createAutoreDto);
  }

  @Get()
  findAll() {
    return this.autoresService.findAll();
  }

  @Get(':codigo_de_autor')
  findOne(@Param('codigo_de_autor') codigo_de_autor: string) {
    return this.autoresService.findOne(codigo_de_autor);
  }

  @Patch(':codigo_de_autor')
  update(@Param('codigo_de_autor') codigo_de_autor: string, @Body() updateAutoreDto: UpdateAutoreDto) {
    return this.autoresService.update(codigo_de_autor, updateAutoreDto);
  }

  @Delete(':codigo_de_autor')
  remove(@Param('codigo_de_autor') codigo_de_autor: string) {
    return this.autoresService.remove(codigo_de_autor);
  }
}
