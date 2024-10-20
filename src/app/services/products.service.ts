import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Product[] {
    // return [
    //   { id: 1, name: 'Producto 1', description: 'Descripción del Producto 1', imageUrl: '/imagenes/pc.png' },
    //   { id: 2, name: 'Producto 2', description: 'Descripción del Producto 2', imageUrl: '/imagenes/pc.png' },
    //   { id: 3, name: 'Producto 3', description: 'Descripción del Producto 3', imageUrl: '/imagenes/silla.png' },
    // ];
    return [
      { id: 1, name: 'Producto 1', description: 'Descripción del Producto 1', imageUrl: 'assets/images/product1.jpg' },
      { id: 2, name: 'Producto 2', description: 'Descripción del Producto 2', imageUrl: 'assets/images/product2.jpg' },
      { id: 3, name: 'Producto 3', description: 'Descripción del Producto 3', imageUrl: 'assets/images/product3.jpg' },
    ];
  }
}
