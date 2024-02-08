import { TestBed } from '@angular/core/testing';
import { ComputersService } from './computers.service';
import { Computer } from '../interfaces/computer.interface';
import { FormBuilder } from '@angular/forms';

describe('ComputersService', () => {
  let service: ComputersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComputersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a computer by id', () => {
    const computer = service.getComputerById('1', '[]');
    expect(computer).toBeUndefined();
  });

  it('should return an empty array', () => {
    const computers = service.getComputersByString('[]');
    expect(computers).toEqual([]);
  });

  it('should return an empty array if null passed', () => {
    const computers = service.getComputersByString(null);
    expect(computers).toEqual([]);
  });

  it('should add a computer', () => {
    const computer: Computer = {
      id: '1',
      brand: 'HP',
      price: 1000,
      RAMCapacity: '8GB',
      storageCapacity: '1TB',
      storageType: 'HDD',
    };
    const computers = service.addComputer(computer, '[]');
    expect(computers).toEqual([computer]);
  });

  it('should update a computer by id only if id exists', () => {
    const computer: Computer = {
      id: '1',
      brand: 'HP',
      price: 1000,
      RAMCapacity: '8GB',
      storageCapacity: '1TB',
      storageType: 'HDD',
    };
    const computers = service.updateComputerById(computer, '1', '[]');
    expect(computers).toEqual([]);
  });

  it('should create a computer by form group', () => {
    const fb = new FormBuilder();
    const form = fb.group({
      brand: 'HP',
      price: 1000,
      RAMCapacity: '8GB',
      storageCapacity: '1TB',
      storageType: 'HDD',
    });
    const computer = service.createComputerByFormGroup(form);
    expect(computer).toEqual({
      id: jasmine.any(String),
      brand: 'HP',
      price: 1000,
      RAMCapacity: '8GB',
      storageCapacity: '1TB',
      storageType: 'HDD',
    });
  });

  it('should delete a computer by id', () => {
    const computers = service.deleteComputerById('1', '[]');
    expect(computers).toEqual([]);
  });

  it('should cancel action', () => {
    const routerSpy = spyOn(service.router, 'navigate');
    service.cancelAction();
    expect(routerSpy).toHaveBeenCalledWith(['/']);
  });

  it('should redirect on delete', () => {
    const routerSpy = spyOn(service.router, 'navigate');
    service.redirectOnDelete();
    expect(routerSpy).toHaveBeenCalledWith(['/Computers']);
  });

  it('should clear form', () => {
    const fb = new FormBuilder();
    const form = fb.group({
      brand: 'HP',
      price: 1000,
      RAMCapacity: '8GB',
      storageCapacity: '1TB',
      storageType: 'HDD',
    });
    service.clearForm(form);
    expect(form.value).toEqual({
      brand: null,
      price: null,
      RAMCapacity: null,
      storageCapacity: null,
      storageType: null,
    });
  });
});
