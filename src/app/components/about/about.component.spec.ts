import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render mission section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.mission-section')).toBeTruthy();
    expect(compiled.querySelector('.mission-section h2')?.textContent).toContain('Our Mission');
  });

  it('should render values section with three cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const valueCards = compiled.querySelectorAll('.value-card');
    expect(valueCards.length).toBe(3);
  });

  it('should render contact section with button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.contact-button')).toBeTruthy();
  });
});