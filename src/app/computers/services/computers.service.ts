import { Injectable, signal } from '@angular/core';
import { Computer } from '../interfaces/computer.interface';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ComputersService {
  public brands = signal(['HP', 'Dell', 'Levono', 'Apple']);
  public storageTypes = signal(['HDD', 'SSD']);
  public RAMCapacities = signal(['8GB', '16GB', '32GB', '64GB']);

  constructor(private router: Router) {}

  createComputerByFormGroup(form: FormGroup): Computer {
    const computer: Computer = {
      brand: form.value.brand!,
      price: form.value.price!,
      RAMCapacity: form.value.RAMCapacity!,
      storageCapacity: form.value.storageCapacity!,
      storageType: form.value.storageType!,
    };
    return computer;
  }

  addComputer(form: FormGroup) {
    const computersString = localStorage.getItem('computers');
    const computer = this.createComputerByFormGroup(form);
    if (!computersString) {
      localStorage.setItem('computers', JSON.stringify([computer]));
      return;
    }
    const computers: Computer[] = JSON.parse(computersString);
    computers.push(computer);
    localStorage.setItem('computers', JSON.stringify(computers));
    this.clearForm(form);
  }

  cancelAction() {
    this.router.navigate(['/']);
  }

  clearForm(form: FormGroup) {
    form.reset();
  }
}
