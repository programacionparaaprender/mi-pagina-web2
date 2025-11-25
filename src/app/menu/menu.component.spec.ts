import { TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { of } from 'rxjs';

// ===== MOCKS =====

// Mock TranslateService
class TranslateServiceMock {
  currentLang = 'es';
  langs = ['es', 'en'];

  setDefaultLang(lang: string) {}
  use(lang: string) { this.currentLang = lang; }
  addLangs(langs: string[]) {}
  getLangs() { return this.langs; }
  get(value: any) { return of(value); }
}

// Mock Router
class RouterMock {
  navigate = jasmine.createSpy('navigate');
}

// Mock Location
class LocationMock {}

describe('MenuComponent', () => {
  let component: MenuComponent;
  let translateService: TranslateServiceMock;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent],   // Standalone component
      providers: [
        { provide: TranslateService, useClass: TranslateServiceMock },
        { provide: Router, useClass: RouterMock },
        { provide: Location, useClass: LocationMock }
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService) as any;
    fixture.detectChanges();
  });

  // ========================
  //      TESTS
  // ========================

  it('debería crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar los idiomas desde TranslateService', () => {
    expect(component.langs.length).toBe(2);
    expect(component.langs).toEqual(['es', 'en']);
  });

  it('debería llamar translate.use() cuando cambiarLang es ejecutado', () => {
    const spy = spyOn(translateService, 'use').and.callThrough();

    component.cambiarLang('en');

    expect(spy).toHaveBeenCalledWith('en');
    expect(translateService.currentLang).toBe('en');
  });

  it('debería llamar translate.setDefaultLang y translate.addLangs en el constructor', () => {
    const spySetDefault = spyOn(translateService, 'setDefaultLang');
    const spyAddLangs = spyOn(translateService, 'addLangs');

    // Se debe recrear el componente para que el constructor se ejecute nuevamente
    TestBed.createComponent(MenuComponent);

    expect(spySetDefault).toHaveBeenCalledWith('es');
    expect(spyAddLangs).toHaveBeenCalledWith(['es', 'en']);
  });

  it('ngOnInit debería ejecutarse sin errores', () => {
    expect(() => component.ngOnInit()).not.toThrow();
  });
});
