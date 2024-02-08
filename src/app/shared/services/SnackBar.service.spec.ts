import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarService } from './SnackBar.service';
import { TestBed } from '@angular/core/testing';

describe('SnackBarService', () => {
  let service: SnackBarService;
  let snackBar: MatSnackBar;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule],
    });
    service = TestBed.inject(SnackBarService);
    snackBar = TestBed.inject(MatSnackBar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call snackBar.open', () => {
    const spy = spyOn(snackBar, 'open');
    service.openSnackBar('message', 'action');
    expect(spy).toHaveBeenCalled();
  });
});
