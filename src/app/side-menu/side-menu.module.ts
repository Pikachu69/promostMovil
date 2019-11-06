import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SideMenuPage } from './side-menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/side-menu/principal',
    pathMatch: 'full'
  },
  {
    path: '',
    component: SideMenuPage,
    children: [
      { path: 'principal', loadChildren: '../principal/principal.module#PrincipalPageModule' },
      { path: 'dia', loadChildren: '../dia/dia.module#DiaPageModule' },
      { path: 'favoritos', loadChildren: '../favoritos/favoritos.module#FavoritosPageModule' },
      { path: 'categorias', loadChildren: '../categorias/categorias.module#CategoriasPageModule' },
      { path: 'configuracion', loadChildren: '../configuracion/configuracion.module#ConfiguracionPageModule' },
      { path: 'acerca-de', loadChildren: '../acerca-de/acerca-de.module#AcercaDePageModule' },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SideMenuPage]
})
export class SideMenuPageModule {}
