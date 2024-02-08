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
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ComputersService } from '../../services/computers.service';
import { MatSelectModule } from '@angular/material/select';

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
  ],
  templateUrl: `./new.component.html`,
  styleUrl: './new.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewComponent implements OnInit {
  public brands: WritableSignal<string[]> = signal([]);
  public storageTypes: WritableSignal<string[]> = signal([]);
  public RAMCapacities: WritableSignal<string[]> = signal([]);
  constructor(private computersService: ComputersService) {}

  ngOnInit(): void {
    this.brands = this.computersService.getBrands();
    this.storageTypes = this.computersService.getStorageTypes();
    this.RAMCapacities = this.computersService.getRAMCapacities();
  }
}
