export interface IAppSlice {
  userPermissions: Array<number>;
  inShoppingCartCount: number;
  shoppingCart: Array<IProductData>;
  isUserLoggedIn: boolean;
  orderSteps: OrderSteps_Enum;
}

export interface IProductData {
  id: number;
  image: any;
  caption: string;
  description: string;
  price: number;
}

export enum OrderSteps_Enum {
  ShoppingCart = 1,
  UserInfo = 2,
  ReceiverInfo = 3,
  DeliveryTime = 4,
  DeliveryPrice = 5,
  FinalConfirmation = 6,
}
