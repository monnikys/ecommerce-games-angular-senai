import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PainelprincipalComponent } from './painelprincipal.component';

describe('PainelprincipalComponent', () => {
  let component: PainelprincipalComponent;
  let fixture: ComponentFixture<PainelprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PainelprincipalComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente de painel principal', () => {
    expect(component).toBeTruthy();
  });
});
