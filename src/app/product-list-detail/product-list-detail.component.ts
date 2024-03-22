import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'pm-product-list-detail',
  templateUrl: './product-list-detail.component.html',
  styleUrls: ['./product-list-detail.component.css']
})
export class ProductListDetailComponent implements OnInit {
  id!: number; //albumId
  product: any; //album
  productList: any[] = []; //musicList
  url: string = '../../api/products/products.json';
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.id = +id;
      this.http.get<any[]>(this.url).subscribe((products) => {
      //this.http.get<any[]>('../../api/products/products.json').subscribe((products) => {
        this.product = products.find((product) => product.productId === this.id);
        this.productList = this.product.productList;
        //console.log(this.id, this.product);
      });
    }
  }

}
