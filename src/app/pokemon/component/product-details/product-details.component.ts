import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.services';
import { Router} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private pdServcie : ProductService, private router: Router) { }

  public productDeatils : any;
  public imageSrc = '';
  ngOnInit(): void {
    if (window.history.state) {
      let url = window.history.state;
      if(url && url.navigationId !== 1){
        this.pdServcie.getProductDetail(url).subscribe((response)=>{
          this.productDeatils = response;
          this.imageSrc = this.productDeatils.sprites.other['official-artwork']['front_default'];
        });
      } else {
        this.redirectProductPage();
      }
    }
  }

  public redirectProductPage(){
    this.router.navigate(['/productList']);
  }
}
