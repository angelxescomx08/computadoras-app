import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  AfterViewInit,
  ViewChild,
  signal,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ComputersService } from '../../services/computers.service';

@Component({
  selector: 'app-computers',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  templateUrl: `./computers.component.html`,
  styleUrl: './computers.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComputersComponent {
  displayedColumns = signal([
    'price',
    'brand',
    'storageType',
    'storageCapacity',
    'RAMCapacity',
  ]);
  constructor(public computersService: ComputersService) {}
}
