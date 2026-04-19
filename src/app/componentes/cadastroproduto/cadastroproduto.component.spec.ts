import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CadastroprodutoComponent } from './cadastroproduto.component';

describe('CadastroprodutoComponent', () => {
  let component: CadastroprodutoComponent;
  let fixture: ComponentFixture<CadastroprodutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroprodutoComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente de cadastro', () => {
    expect(component).toBeTruthy();
  });
});
