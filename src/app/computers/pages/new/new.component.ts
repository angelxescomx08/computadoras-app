import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TextInputComponent } from '../../../shared/text-input/text-input.component';
import { SelectInputComponent } from '../../../shared/select-input/select-input.component';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [CommonModule, TextInputComponent, SelectInputComponent],
  templateUrl: `./new.component.html`,
  styleUrl: './new.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewComponent {}
