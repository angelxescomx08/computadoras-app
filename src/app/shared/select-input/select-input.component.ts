import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Option } from './interfaces/select-input.interface';

@Component({
  selector: 'app-select-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./select-input.component.html`,
  styleUrl: './select-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectInputComponent {
  @Input({
    required: true,
  })
  options: Option[] = [];
}
