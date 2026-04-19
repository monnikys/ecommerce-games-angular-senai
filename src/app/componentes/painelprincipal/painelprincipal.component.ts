import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto, ProdutoService } from 'src/app/servicos/produto.service';

@Component({
  selector: 'app-painelprincipal',
  templateUrl: './painelprincipal.component.html',
  styleUrls: ['./painelprincipal.component.css']
})
export class PainelprincipalComponent implements OnInit {
  produtos: Produto[] = [];
  carregando = false;
  erro = '';

  constructor(
    private produtoService: ProdutoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos(): void {
    this.carregando = true;
    this.erro = '';

    this.produtoService.obterProdutos().subscribe({
      next: (dados) => {
        this.produtos = dados;
        this.carregando = false;
      },
      error: () => {
        this.erro = 'Nao foi possivel carregar os produtos da API local.';
        this.carregando = false;
      }
    });
  }

  editarProduto(id?: number): void {
    if (!id) {
      return;
    }

    this.router.navigate(['/cadastro-produto', id]);
  }

  excluirProduto(id?: number): void {
    if (!id) {
      return;
    }

    if (confirm('Deseja realmente excluir este produto?')) {
      this.produtoService.deletarProduto(id).subscribe({
        next: () => {
          alert('Produto excluido com sucesso!');
          this.listarProdutos();
        },
        error: () => {
          alert('Nao foi possivel excluir o produto.');
        }
      });
    }
  }
}
