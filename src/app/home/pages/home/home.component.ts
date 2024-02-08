import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainLayoutComponent } from '../../../shared/layouts/MainLayout/MainLayout.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MainLayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
