import { Injectable, signal } from '@angular/core';
import { Computer } from '../interfaces/computer.interface';

@Injectable({
  providedIn: 'root',
})
export class ComputersService {
  public brands = signal(['HP', 'Dell', 'Levono', 'Apple']);
  public storageTypes = signal(['HDD', 'SSD']);
  public RAMCapacities = signal(['8GB', '16GB', '32GB', '64GB']);

  constructor() {}

  addComputer(computer: Computer) {
    const computersString = localStorage.getItem('computers');
    if (!computersString) {
      localStorage.setItem('computers', JSON.stringify([computer]));
      return;
    }
    const computers: Computer[] = JSON.parse(computersString);
    computers.push(computer);
    localStorage.setItem('computers', JSON.stringify(computers));
  }
}
