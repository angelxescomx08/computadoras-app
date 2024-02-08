import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-select-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./select-input.component.html`,
  styleUrl: './select-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectInputComponent {}
