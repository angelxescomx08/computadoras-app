import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComputersService {
  private brands = signal(['HP', 'Dell', 'Levono', 'Apple']);
  private storageType = signal(['HDD', 'SSD']);
  private RAMCapacity = signal(['8GB', '16GB', '32GB', '64GB']);

  constructor() {}

  getBrands() {
    return this.brands;
  }

  getStorageTypes() {
    return this.storageType;
  }

  getRAMCapacities() {
    return this.RAMCapacity;
  }
}
