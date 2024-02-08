import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  WritableSignal,
  signal,
} from '@angular/core';
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
import { Router } from '@angular/router';
import { Computer } from '../../interfaces/computer.interface';

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
  public form = this.fb.group({
    price: [null, [Validators.required, Validators.min(0)]],
    brand: ['', Validators.required],
    storageType: ['', Validators.required],
    storageCapacity: ['', [Validators.required, Validators.minLength(3)]],
    RAMCapacity: ['', Validators.required],
  });

  constructor(
    public computersService: ComputersService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  cancel() {
    this.router.navigate(['/']);
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    const computer: Computer = {
      brand: this.form.value.brand!,
      price: this.form.value.price!,
      RAMCapacity: this.form.value.RAMCapacity!,
      storageCapacity: this.form.value.storageCapacity!,
      storageType: this.form.value.storageType!,
    };
    this.computersService.addComputer(computer);
  }
}
