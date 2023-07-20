import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateAnuncioDto } from './dto/create-anuncio.dto';
import { UpdateAnuncioDto } from './dto/update-anuncio.dto';
import * as data from 'data/data.json'
import { Anuncio } from './entities/anuncio.entity';

@Injectable()
export class AnunciosService {
  private anuncios: Anuncio[] = data.anuncios;

  _idGenerator(){
      
    const timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
        return (Math.random() * 16 | 0).toString(16);
    }).toLowerCase();
};


create(createAnuncioDto: CreateAnuncioDto) {
  const id = this._idGenerator();
  
  const newAnuncio: Anuncio ={
    id: id,
    ...createAnuncioDto,
    precio:"0",
  };

  if(typeof createAnuncioDto.precio
    !== 'string') 
    throw new InternalServerErrorException();
    
  this.anuncios.push(newAnuncio);
  return this.anuncios.find((e) => e.id === id)
 // return 'This action adds a new beer';
}



  findAll() {
    return this.anuncios;
  }

  findOne(id: string) {
    return this.anuncios.find(elemento => elemento.id == id);
  }

  update(id: number, updateAnuncioDto: UpdateAnuncioDto) {
    return `This action updates a #${id} anuncio`;
  }

  remove(id: number) {
    return `This action removes a #${id} anuncio`;
  }
}
