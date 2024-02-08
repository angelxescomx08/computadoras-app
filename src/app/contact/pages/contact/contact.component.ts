import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainLayoutComponent } from '../../../shared/layouts/MainLayout/MainLayout.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MainLayoutComponent],
  templateUrl: `./contact.component.html`,
  styleUrl: './contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {}
