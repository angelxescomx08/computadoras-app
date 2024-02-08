import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainLayoutComponent } from '../../../shared/layouts/MainLayout/MainLayout.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    MainLayoutComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: `./contact.component.html`,
  styleUrl: './contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  public form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    text: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  submit() {
    if (this.form.invalid) {
      return;
    }
    this.contactService.contact(this.form);
  }
}
