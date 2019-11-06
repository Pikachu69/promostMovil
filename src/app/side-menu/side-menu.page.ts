import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.page.html',
  styleUrls: ['./side-menu.page.scss'],
})
export class SideMenuPage implements OnInit {

  pages = [
    {
      title: 'Inicio',
      url: '/side-menu/principal',
      icon: 'home'
    },
    {
      title: 'Favoritos',
      url: '/side-menu/favoritos',
      icon: 'heart'
    },
    {
      title: 'Dias de la semana',
      children: [
        {
          title: 'Lunes',
          url: '/side-menu/dia'
        },
        {
          title: 'Martes',
          url: '/side-menu/dia'
        },
        {
          title: 'Miercoles',
          url: '/side-menu/dia'
        },
        {
          title: 'Jueves',
          url: '/side-menu/dia'
        },
        {
          title: 'Viernes',
          url: '/side-menu/dia'
        },
        {
          title: 'Sabado',
          url: '/side-menu/dia'
        },
        {
          title: 'Domingo',
          url: '/side-menu/dia'
        }
      ]
    },
    {
      title: 'Categorias',
      children: [
        {
          title: 'Restaurantes',
          url: '/side-menu/categorias'
        },
        {
          title: 'Bares',
          url: '/side-menu/categorias'
        }
      ]
    },
    {
      title: 'Configuración',
      url: '/side-menu/configuracion',
      icon: 'settings'
    },
    {
      title: 'Acerca de',
      url: '/side-menu/acerca-de',
      icon: 'information-circle'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
