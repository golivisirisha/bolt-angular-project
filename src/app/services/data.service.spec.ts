import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { firstValueFrom } from 'rxjs';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return items', async () => {
    const items = await firstValueFrom(service.getItems());
    expect(items.length).toBeGreaterThan(0);
  });

  it('should return a specific item', async () => {
    const item = await firstValueFrom(service.getItem(1));
    expect(item?.name).toBe('Item 1');
  });
});