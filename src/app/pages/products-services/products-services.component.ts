import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../../services/products.service';

@Component({
  selector: 'app-products-services',
  // standalone: true,
  // imports: [],
  templateUrl: './products-services.component.html',
  styleUrl: './products-services.component.css'
})
export class ProductsServicesComponent implements OnInit {
  products: Product[] = []; // Define la variable para almacenar los productos

  // Inyectamos el servicio en el constructor
  constructor(private productService: ProductsService) {}

  // Usamos ngOnInit para cargar los productos al inicializar el componente
  ngOnInit(): void {
    this.products = this.productService.getProducts(); // Cargamos los productos desde el servicio
  }
}
