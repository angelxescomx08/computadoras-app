import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ComputersService } from '../../services/computers.service';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MainLayoutComponent } from '../../../shared/layouts/MainLayout/MainLayout.component';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MainLayoutComponent,
  ],
  templateUrl: `./new.component.html`,
  styleUrl: './new.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewComponent implements OnInit {
  public form = this.fb.group({
    price: [null, [Validators.required, Validators.min(0)]],
    brand: ['', Validators.required],
    storageType: ['', Validators.required],
    storageCapacity: ['', [Validators.required, Validators.minLength(3)]],
    RAMCapacity: ['', Validators.required],
  });

  constructor(
    public computersService: ComputersService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  submit() {
    if (this.form.invalid) {
      return;
    }
    this.computersService.addComputer(this.form);
  }
}
