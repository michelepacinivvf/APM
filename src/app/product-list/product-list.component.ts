import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  isVisible: boolean = true;
  filtro: string = "";

  productData:any;
  url: string = '../../api/products/products.json';
  constructor(private http: HttpClient) {}

  //data: any = productData;

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.productData = res;
    });
  }

  mostraNascondiContenuto(){
    if(this.isVisible){
      this.isVisible = false;
    }
    else this.isVisible = true;
  }
}
