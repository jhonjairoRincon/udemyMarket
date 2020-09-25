import { Component, OnInit } from '@angular/core';
import { Path } from '../../config'
import {ProductsService} from '../../services/products.service'

@Component({
  selector: 'app-header-promotion',
  templateUrl: './header-promotion.component.html',
  styleUrls: ['./header-promotion.component.css']
})
export class HeaderPromotionComponent implements OnInit {

  path: String = Path.url;
  
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getData().subscribe(resp=>{
      console.log('respuesta',resp);
    })
  }

}
