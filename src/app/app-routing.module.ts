import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroprodutoComponent } from './componentes/cadastroproduto/cadastroproduto.component';
import { PainelprincipalComponent } from './componentes/painelprincipal/painelprincipal.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'painel-principal', component: PainelprincipalComponent},
  {path:'cadastro-produto', component: CadastroprodutoComponent},
  {path:'cadastro-produto/:id', component: CadastroprodutoComponent},
  {path:'inicio', component: InicioComponent},
  {path:'login', component: LoginComponent},
  {path:'', redirectTo:'/inicio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
