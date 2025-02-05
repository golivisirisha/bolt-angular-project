import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { DataService } from '../../services/data.service';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let dataService: jasmine.SpyObj<DataService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('DataService', ['getItems']);
    spy.getItems.and.returnValue(of([{ id: 1, name: 'Test Item' }]));

    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        { provide: DataService, useValue: spy }
      ]
    }).compileComponents();

    dataService = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load items on init', () => {
    expect(dataService.getItems).toHaveBeenCalled();
    expect(component.items.length).toBe(1);
    expect(component.items[0].name).toBe('Test Item');
  });

  it('should render items in the template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.item-card')).toBeTruthy();
    expect(compiled.querySelector('.item-content h3')?.textContent).toContain('Test Item');
  });
});