import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto, ProdutoService } from 'src/app/servicos/produto.service';

@Component({
  selector: 'app-cadastroproduto',
  templateUrl: './cadastroproduto.component.html',
  styleUrls: ['./cadastroproduto.component.css']
})
export class CadastroprodutoComponent implements OnInit {
  produto: Produto = {
    produto: '',
    categoria: '',
    descricao: '',
    foto: '',
    preco: null,
    destaque: false,
    tags: []
  };
  tagsTexto = '';

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.produtoService.obterProdutoPorId(Number(id)).subscribe((dados) => {
        this.produto = {
          ...dados,
          tags: dados.tags ?? []
        };
        this.tagsTexto = (dados.tags ?? []).join(', ');
      });
    }
  }

  salvarProduto(): void {
    const produtoParaSalvar: Produto = {
      ...this.produto,
      tags: this.tagsTexto
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean)
    };

    if (produtoParaSalvar.id) {
      this.produtoService.atualizarProduto(produtoParaSalvar.id, produtoParaSalvar).subscribe(() => {
        alert('Produto atualizado com sucesso!');
        this.router.navigate(['/painel-principal']);
      });
      return;
    }

    this.produtoService.adicionarProduto(produtoParaSalvar).subscribe(() => {
      alert('Produto cadastrado com sucesso!');
      this.router.navigate(['/painel-principal']);
    });
  }
}
