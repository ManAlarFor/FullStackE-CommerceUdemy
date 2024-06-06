import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [] ;

  totalPrice: Subject<number> = new Subject<number> ;
  totalQuantity: Subject<number> = new Subject<number> ;

  constructor() { }

  addToCart(cartItem: CartItem){

    let alreadyExistInCart: boolean = false ;
    let existingCartItem: CartItem = undefined ;

    if(this.cartItems.length > 0) {
      for (const item of this.cartItems) {

        if(item.id === cartItem.id) {

          existingCartItem = item ;

          break ;

        }
      }

      alreadyExistInCart = (existingCartItem != undefined)

    }

    if(alreadyExistInCart) {
      existingCartItem.quantity++ ;
    }else{
      this.cartItems.push(cartItem)
    }

    this.computeCartTotals() ;

  }
  computeCartTotals() {
    let totalPriceValue: number = 0 ;
    let totalQuantityValue: number = 0 ;

    for (const currentCartItem of this.cartItems) {

      totalPriceValue += (currentCartItem.quantity * currentCartItem.unitPrice) ;
      totalQuantityValue += currentCartItem.quantity ;

    }

    this.totalPrice.next(totalPriceValue) ;
    this.totalQuantity.next(totalQuantityValue) ;

    this.logCartData(totalPriceValue, totalQuantityValue) ;

  }
  logCartData(totalPriceValue: number, totalQuantityValue: number) {
    console.log("content")

    console.log("***********************************************")
    for (const item of this.cartItems) {

      console.log(item.name)
      console.log(item.quantity * item.unitPrice)
      
      }
    console.log("------------------------------------------------------------------------")
  }
}
