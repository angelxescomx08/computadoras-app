import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./text-input.component.html`,
  styleUrl: './text-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputComponent {
  @Input({
    required: true,
  })
  placeholder = '';

  @Input({
    required: true,
  })
  label = '';
}
