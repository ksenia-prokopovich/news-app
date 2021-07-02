import { Injectable } from '@angular/core';

@Injectable()
export class ItemsService {

  items: any[] = [
    {id: 1, title: 'Ночью в Минске будут наносить дорожную разметку на 14 участках', content: '10 июня, Минск /Корр. БЕЛТА/. В ночь на 11 июня планируется нанесение дорожной разметки на 14 участках в Минске. Такая информация размещена в Telegram-канале УГАИ ГУВД Мингорисполкома, передает БЕЛТА.'},
    {id: 2, title: 'Землетрясение', content: 'Землетрясение магнитудой 5,1 произошло на юго-западе Китая'}
  ];

  add(item: any): void {
    this.items.push(item);
  }

  delete(title: any): void {
    this.items = this.items.filter((item: any) => item.title !== title);
  }
}
