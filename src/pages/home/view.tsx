import { useDispatch, useSelector } from "react-redux";
import { IProductData } from "../../helpers/features/types";
import { ProductCard } from "./components/productCard";
import FirstImg from "./image/Intersect.png";
import SecondImg from "./image/Intersect1.png";
import { appSlice } from "../../helpers/features/appSlice";
import { RootState } from "../../helpers/features/store";

export const FAKE_DATA: IProductData[] = [
  {
    id: 1,
    image: FirstImg,
    caption: "Snopy Headphone",
    description: " Snopy SN- BT96 Pretty Back Bluetooth Headphone",
    price: 6599,
  },
  {
    id: 2,
    image: SecondImg,
    caption: "Snopy Headphone",
    description: "Snopy SN- BT96 Pretty Back Bluetooth Headphone,",
    price: 4598,
  },
];

export const Home = () => {
  const dispatch = useDispatch();
  const shoppingCartCount = useSelector(
    (state: RootState) => state.app.inShoppingCartCount
  );
  const shoppingCart = useSelector(
    (state: RootState) => state.app.shoppingCart
  );

  const handleAddToShoppingCart = (productData: IProductData) => {
    dispatch(appSlice.actions.setShoppingCartCount(shoppingCartCount + 1));

    const isProductInCart = shoppingCart.find(
      (item) => item.productData.id === productData.id
    );

    if (isProductInCart) {
      dispatch(
        appSlice.actions.setShoppingCart([
          ...shoppingCart.filter(
            (item) => item.productData.id !== productData.id
          ),
          {
            productData,
            quantity: isProductInCart.quantity + 1,
          },
        ])
      );
    } else {
      dispatch(
        appSlice.actions.setShoppingCart([
          ...shoppingCart,
          {
            productData,
            quantity: 1,
          },
        ])
      );
    }
  };

  return (
    <div className="flex flex-wrap gap-4 mt-20">
      {FAKE_DATA.map((item) => (
        <ProductCard
          key={item.id}
          data={item}
          onClick={handleAddToShoppingCart}
        />
      ))}
    </div>
  );
};
