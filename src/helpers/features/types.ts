export interface IAppSlice {
  userPermissions: Array<number>;
  shoppingCart: Array<IShoppingCard>;
  isUserLoggedIn: boolean;
  currentStep: OrderSteps_Enum;
  userInfo: IUserInfo | undefined;
  receiverInfo: IReceiverInfo | undefined;
  courierCompany: ICourierCompany | undefined;
  receiveDate: ISelectedReceiveDate | undefined;
}

export interface IShoppingCard {
  productData: IProductData;
  quantity: number;
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
  FinalConfirmation = 5,
  SuccessPayment = 6,
}

export interface IUserInfo {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

export interface IReceiverInfo {
  province: string;
  city: string;
  address: string;
  postalCode: string;
}

export interface ISelectedReceiveDate {
  day: number;
  month: string;
  weekday: string;
}

export interface ICourierCompany {
  caption: string;
  id: number;
  price: number;
}
