import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  signal,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ComputersService } from '../../services/computers.service';
import { Computer } from '../../interfaces/computer.interface';
import { Router, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../../../shared/layouts/MainLayout/MainLayout.component';

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
    MainLayoutComponent,
    RouterModule,
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
  dataSource = new MatTableDataSource<Computer>(
    this.computersService.getComputers()
  );

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(
    public computersService: ComputersService,
    private router: Router
  ) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  redirect(row: Computer) {
    this.router.navigateByUrl(`/computers/new?id=${row.id}`);
  }
}
