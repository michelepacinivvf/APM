import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtra'
})

export class FiltraTesto implements PipeTransform {
  transform(items: any[], filtro: string): any[] {
    if (!items || !filtro) {
      return items;
    }

    return items.filter((item: any) => { // Aggiungi il tipo any per item
      return Object.values(item).some((value: any) => { // Aggiungi il tipo any per value
        return value.toString().toLowerCase().includes(filtro.toLowerCase());
      });
    });
  }
}