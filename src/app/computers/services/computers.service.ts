import { Injectable, signal } from '@angular/core';
import { Computer } from '../interfaces/computer.interface';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { SnackBarService } from '../../shared/services/SnackBar.service';

@Injectable({
  providedIn: 'root',
})
export class ComputersService {
  public brands = signal(['HP', 'Dell', 'Levono', 'Apple']);
  public storageTypes = signal(['HDD', 'SSD']);
  public RAMCapacities = signal(['8GB', '16GB', '32GB', '64GB']);

  constructor(
    private router: Router,
    private snackBarService: SnackBarService
  ) {}

  getComputers(): Computer[] {
    const computerString = localStorage.getItem('computers');
    if (!computerString) {
      return [];
    }
    return JSON.parse(computerString);
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

  addComputer(form: FormGroup) {
    const computers = this.getComputers();
    const computer = this.createComputerByFormGroup(form);
    computers.push(computer);
    localStorage.setItem('computers', JSON.stringify(computers));
    this.snackBarService.openSnackBar('Guardado exitoso.', 'Aceptar');
    this.clearForm(form);
  }

  cancelAction() {
    this.router.navigate(['/']);
  }

  clearForm(form: FormGroup) {
    form.reset();
  }
}
