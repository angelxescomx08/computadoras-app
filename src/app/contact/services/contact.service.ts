import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SnackBarService } from '../../shared/services/SnackBar.service';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private snackBarService: SnackBarService) {}

  contact(form: FormGroup) {
    const data = {
      email: form.value.email,
      text: form.value.text,
    };
    this.clearForm(form);
    this.snackBarService.openSnackBar('Mensaje enviado', 'Aceptar');
  }

  clearForm(form: FormGroup) {
    form.reset();
  }
}
