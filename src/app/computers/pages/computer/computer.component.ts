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
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-computer',
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
  templateUrl: `./computer.component.html`,
  styleUrl: './computer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComputerComponent implements OnInit {
  public form = this.fb.group({
    price: [0, [Validators.required, Validators.min(0)]],
    brand: ['', Validators.required],
    storageType: ['', Validators.required],
    storageCapacity: ['', [Validators.required, Validators.minLength(3)]],
    RAMCapacity: ['', Validators.required],
  });

  constructor(
    public computersService: ComputersService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      const localStorageResult = localStorage.getItem('computers');
      const computer = this.computersService.getComputerById(
        id,
        localStorageResult
      );
      if (computer) {
        this.form.reset({
          brand: computer.brand,
          price: computer.price,
          RAMCapacity: computer.RAMCapacity,
          storageCapacity: computer.storageCapacity,
          storageType: computer.storageType,
        });
      }
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    const localStorageResult = localStorage.getItem('computers');
    this.computersService.addComputer(this.form, localStorageResult);
  }
}
