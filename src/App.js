import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home, Contact, Layout, Login, Reset, Register, Admin } from "./pages";
import New from "./components/New";
import {
  Orders,
  ViewProducts,
  AddProduct,
  OrderDetails,
  AdminHome,
} from "./components";
import Cart from "./pages/cart/Cart";
import CheckoutDetails from "./pages/checkout/CheckoutDetails";
import Checkout from "./pages/checkout/Checkout";
import CheckoutSuccess from "./pages/checkout/CheckoutSuccess";
import OrderHistory from "./pages/orderHistory/OrderHistory";
import ReviewProducts from "./components/reviewProducts/ReviewProducts";
import NotFound from "./pages/notFound/NotFound";
import AdminOnlyRoute from "./components/adminOnlyRoute/AdminOnlyRoute";
import ProductDetails from "./components/product/productDetails/ProductDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="reset" element={<Reset />} />
      <Route path="register" element={<Register />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkoutDetils" element={<CheckoutDetails />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="product-details/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout-details" element={<CheckoutDetails />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="checkout-success" element={<CheckoutSuccess />} />
      <Route path="order-history" element={<OrderHistory />} />
      <Route path="order-details/:id" element={<OrderDetails />} />
      <Route path="review-product/:id" element={<ReviewProducts />} />
      <Route path="new" element={<New />} />
      <Route path="*" element={<NotFound />} />

      {/* <Route
        path="admin"
        element={
          <AdminOnlyRoute>
            <Admin />
          </AdminOnlyRoute>
        }
      > */}
      <Route path="admin" element={<Admin />}>
        <Route path="home" element={<AdminHome />} />
        <Route path="all-products" element={<ViewProducts />} />
        <Route path="add-product/:id" element={<AddProduct />} />
        <Route path="orders" element={<Orders />} />
        <Route path="order-details/:id" element={<OrderDetails />} />
      </Route>
    </Route>
  )
);
function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
