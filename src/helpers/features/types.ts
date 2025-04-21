export interface IAppSlice {
  userPermissions: Array<number>;
  inShoppingCartCount: number;
  shoppingCart: Array<IProductData>;
  isUserLoggedIn: boolean;
}

export interface IProductData {
  id: number;
  image: any;
  caption: string;
  description: string;
  price: number;
}
