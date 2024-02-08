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

  getComputerById(
    id: string,
    localStorageResut: string | null
  ): Computer | undefined {
    const computers = this.getComputersByString(localStorageResut);
    if (computers.length === 0) return;
    return computers.find((computer) => computer.id === id);
  }

  getComputersByString(localStorageResut: string | null): Computer[] {
    if (!localStorageResut) {
      return [];
    }
    return JSON.parse(localStorageResut);
  }

  createComputerByFormGroup(form: FormGroup): Computer {
    const computer: Computer = {
      id: crypto.randomUUID(),
      brand: form.value.brand!,
      price: form.value.price!,
      RAMCapacity: form.value.RAMCapacity!,
      storageCapacity: form.value.storageCapacity!,
      storageType: form.value.storageType!,
    };
    return computer;
  }

  addComputer(computer: Computer, localStorageResult: string | null) {
    const computers = this.getComputersByString(localStorageResult);
    computers.push(computer);
    localStorage.setItem('computers', JSON.stringify(computers));
    return computers;
  }

  updateComputerById(
    computer: Computer,
    id: string,
    localStorageResult: string | null
  ) {
    const computers = this.getComputersByString(localStorageResult);
    const newComputers = computers.map((c) => {
      return c.id === id ? computer : c;
    });
    localStorage.setItem('computers', JSON.stringify(newComputers));
    return newComputers;
  }

  cancelAction() {
    this.router.navigate(['/']);
  }

  clearForm(form: FormGroup) {
    form.reset();
  }
}
