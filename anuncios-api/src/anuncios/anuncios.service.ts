import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Anuncio } from './entities/anuncio.entity';
import * as data from './data/data.json';
import { CreateAnuncioDto } from './dto/create-anuncio.dto';
import { UpdateAnuncioDto } from './dto/update-anuncio.dto';

const anuncios: Anuncio[] = [
  {
    id: "1",
    titulo: "Paseo de perros",
    descripcion: "Ofrezco paseo de perros para aquellos que necesiten ayuda para mantener a sus mascotas activas y felices.",
    precio: "10",
    categoria: "Mascotas"
  },
  {
    id: "2",
    titulo: "Ayuda a personas mayores",
    descripcion: "Estoy disponible para hacer la compra y ayudar a personas mayores con sus tareas diarias.",
    precio: "15",
    categoria: "Asistencia"
  }
];

@Injectable()
export class AnunciosService {
  private anuncios: Anuncio[] = data.anuncios;

  private _idGenerator() {
    const timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
      return (Math.random() * 16 | 0).toString(16);
    }).toLowerCase();
  };

  createAnuncio(createAnuncioDto: CreateAnuncioDto): Anuncio {
    const id = this._idGenerator();

    const newAnuncio: Anuncio = {
      id: id,
      ...createAnuncioDto,
      categoria: ''
    };

    if (typeof createAnuncioDto.precio !== 'string') {
      throw new InternalServerErrorException();
    }

    this.anuncios.push(newAnuncio);
    return newAnuncio;
  }

  findAll(): Anuncio[] {
    return this.anuncios;
  }

  findOne(id: string): Anuncio {
    return this.anuncios.find(anuncio => anuncio.id === id);
  }

  updateAnuncio(id: string, updateAnuncioDto: UpdateAnuncioDto): Anuncio {
    const anuncio = this.findOne(id);
    if (!anuncio) {
      throw new InternalServerErrorException(`Anuncio with ID ${id} not found`);
    }

    const updatedAnuncio: Anuncio = {
      id: anuncio.id,
      titulo: '', 
      descripcion: '', 
      precio: '', 
      categoria: '',
      ...updateAnuncioDto,
    };
    

    
    this.anuncios = this.anuncios.map(anuncio => anuncio.id === id ? updatedAnuncio : anuncio);
    return updatedAnuncio;
  }

  removeAnuncio(id: string): void {
    this.anuncios = this.anuncios.filter(anuncio => anuncio.id !== id);
  }
}
