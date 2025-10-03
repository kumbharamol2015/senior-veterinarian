import { Component, OnInit, OnDestroy, ViewChild, TemplateRef, Input,
  Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Product } from "../../../classes/product";
import { ProductService } from '../../../../shared/services/product.service';

@Component({
  selector: 'app-quick-view-users',
  templateUrl: './quick-view-users.component.html',
  styleUrls: ['./quick-view-users.component.scss']
})
export class QuickViewUsersComponent implements OnInit, OnDestroy  {

  @Input() users: any;
  @Input() currency: any;  
  @ViewChild("quickViewUsers", { static: false }) QuickViewUsers: TemplateRef<any>;

  public closeResult: string;
  public ImageSrc: string;
  public counter: number = 1;
  public modalOpen: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private router: Router, private modalService: NgbModal,
    public productService: ProductService) { }

  ngOnInit(): void {
  }

  openModal(user: any) {
    this.modalOpen = true;
    this.users = user;
    if (isPlatformBrowser(this.platformId)) { // For SSR 
      this.modalService.open(this.QuickViewUsers, { 
        size: 'lg',
        ariaLabelledBy: 'modal-basic-title',
        centered: true,
        windowClass: 'Quickview' 
      }).result.then((result) => {
        `Result ${result}`
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  // Get Product Color
  Color(variants) {
    const uniqColor = []
    for (let i = 0; i < Object.keys(variants).length; i++) {
      if (uniqColor.indexOf(variants[i].color) === -1 && variants[i].color) {
        uniqColor.push(variants[i].color)
      }
    }
    return uniqColor
  }

  // Get Product Size
  Size(variants) {
    const uniqSize = []
    for (let i = 0; i < Object.keys(variants).length; i++) {
      if (uniqSize.indexOf(variants[i].size) === -1 && variants[i].size) {
        uniqSize.push(variants[i].size)
      }
    }
    return uniqSize
  }

  // Change Variants
  ChangeVariants(color, product) {
    product.variants.map((item) => {
      if (item.color === color) {
        product.images.map((img) => {
          if (img.image_id === item.image_id) {
            this.ImageSrc = img.src
          }
        })
      }
    })
  }

  // Increament
  increment() {
    this.counter++ ;
  }

  // Decrement
  decrement() {
    if (this.counter > 1) this.counter-- ;
  }

  // Add to cart
  async addToCart(product: any) {
    product.quantity = this.counter || 1;
    const status = await this.productService.addToCart(product);
    if(status)
      this.router.navigate(['/shop/cart']);
  }

  ngOnDestroy() {
    if(this.modalOpen){
      this.modalService.dismissAll();
    }
  }

}
