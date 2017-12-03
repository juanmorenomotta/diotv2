import { Injectable } from '@angular/core';

@Injectable()
export class DiotsProvider {

  diots: any[] = [
      {
      id: 0,
      name: 'Sala',
      lastText: 'Actuadores y Sensores de la sala',
      environment: 'Sala',
      face: '/assets/imgs/sala.png',
      luzicon: '/assets/imgs/luz.jpeg',
      temperaturaicon: '/assets/imgs/temperatura.png',
      presenciaicon: '/assets/imgs/persona.jpg',
      topic: "sala"
    }, {
      id: 1,
      name: 'Dormitorio',
      lastText: 'Actuadores y Sensores del dormitorio',
      environment: 'Dormitorio',
      face: '/assets/imgs/balcon.png',
      luzicon: '/assets/imgs/luz.jpeg',
      temperaturaicon: '/assets/imgs/temperatura.png',
      presenciaicon: '/assets/imgs/persona.jpg',
      topic: "dormi"
    }
  ];

  constructor() {
    console.log('Hello DiotsProvider Provider');
  }

  getAll(){
    return this.diots;
  }

}
