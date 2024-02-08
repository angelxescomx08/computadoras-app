import { Injectable } from '@angular/core';
import { Option } from '../../shared/select-input/interfaces/select-input.interface';

@Injectable({
  providedIn: 'root',
})
export class ComputersService {
  private brands = ['HP', 'Dell', 'Levono', 'Apple'];

  constructor() {}

  getBrands(): Option[] {
    return this.brands.map((brand) => ({
      name: brand,
      value: brand.toLowerCase(),
    }));
  }
}
