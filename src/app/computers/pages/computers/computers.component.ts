import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-computers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./computers.component.html`,
  styleUrl: './computers.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComputersComponent {}
