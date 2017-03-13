import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Router, RouterLink } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {

  const mockRouter = { navigate: jasmine.createSpy('navigate') };

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: Router,
          useValue: mockRouter
        }
      ]
    });
    TestBed.compileComponents();
  });

  it('should construct', async(inject(
    [Router], (router) => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;

      expect(app).toBeTruthy();
    })));

});
