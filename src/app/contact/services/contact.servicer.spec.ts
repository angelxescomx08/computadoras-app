import { TestBed } from '@angular/core/testing';
import { SnackBarService } from '../../shared/services/SnackBar.service';
import { ContactService } from './contact.service';
import { FormBuilder } from '@angular/forms';

describe('ContactService', () => {
  let service: ContactService;
  let snackBarService: SnackBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnackBarService],
    });
    service = TestBed.inject(ContactService);
    snackBarService = TestBed.inject(SnackBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call snackBarService.openSnackBar', () => {
    const fb = new FormBuilder();
    const form = fb.group({
      email: '',
      text: '',
    });
    const spy = spyOn(snackBarService, 'openSnackBar');
    service.contact(form);
    expect(spy).toHaveBeenCalled();
  });

  it('should call form.reset', () => {
    const fb = new FormBuilder();
    const form = fb.group({
      email: '',
      text: '',
    });
    const spy = spyOn(form, 'reset');
    service.clearForm(form);
    expect(spy).toHaveBeenCalled();
  });
});
