import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TextInputComponent } from '../../../shared/text-input/text-input.component';
import { SelectInputComponent } from '../../../shared/select-input/select-input.component';
import { ComputersService } from '../../services/computers.service';
import { Option } from '../../../shared/select-input/interfaces/select-input.interface';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [CommonModule, TextInputComponent, SelectInputComponent],
  templateUrl: `./new.component.html`,
  styleUrl: './new.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewComponent implements OnInit {
  public brands: Option[] = [];
  constructor(private computersService: ComputersService) {}

  ngOnInit(): void {
    this.brands = this.computersService.getBrands();
  }
}
