import { Controller, Get, Post, Body, Param, Put, Delete, Patch, NotFoundException } from '@nestjs/common';
import { AnunciosService } from './anuncios.service';
import { CreateAnuncioDto } from './dto/create-anuncio.dto';
import { UpdateAnuncioDto } from './dto/update-anuncio.dto';

@Controller('anuncios')
export class AnunciosController {
  constructor(private readonly anunciosService: AnunciosService) {}

  @Post()
  create(@Body() createAnuncioDto: CreateAnuncioDto) {
    return this.anunciosService.createAnuncio(createAnuncioDto);
  }

  @Get()
  findAll() {
    return this.anunciosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.anunciosService.findOne(id);
  }
  
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAnuncioDto: UpdateAnuncioDto) {
    try {
      const updatedAnuncio = await this.anunciosService.updateAnuncio(id, updateAnuncioDto);
      if (!updatedAnuncio) {
        throw new NotFoundException(`Anuncio with ID ${id} not found`);
      }
      return updatedAnuncio;
    } catch (error) {
      // Aquí puedes manejar errores específicos y devolver respuestas con códigos de estado adecuados.
      // Por ejemplo, si hay un error de validación en el DTO UpdateAnuncioDto, podrías devolver un BadRequestException.
      throw error;
    }
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.anunciosService.removeAnuncio(id);
  }

}