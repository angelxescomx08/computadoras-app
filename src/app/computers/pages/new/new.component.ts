import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  WritableSignal,
  signal,
} from '@angular/core';
import {
  FormControl,
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
import { Router } from '@angular/router';

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
  ],
  templateUrl: `./new.component.html`,
  styleUrl: './new.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewComponent implements OnInit {
  public brands: WritableSignal<string[]> = signal([]);
  public storageTypes: WritableSignal<string[]> = signal([]);
  public RAMCapacities: WritableSignal<string[]> = signal([]);
  public form = this.fb.group({
    price: ['', [Validators.required, Validators.min(0)]],
    brand: ['', Validators.required],
    storageType: ['', Validators.required],
    storageCapacity: ['', [Validators.required, Validators.minLength(3)]],
    RAMCapacity: ['', Validators.required],
  });

  constructor(
    private computersService: ComputersService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.brands = this.computersService.getBrands();
    this.storageTypes = this.computersService.getStorageTypes();
    this.RAMCapacities = this.computersService.getRAMCapacities();
  }

  cancel() {
    this.router.navigate(['/']);
  }

  submit() {
    console.log(this.form.value);
  }
}
