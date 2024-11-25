import RootLayout from "./components/layout/RootLayout";
import About from "./components/About/About";
import LandingPage from "./components/Home/LandingPage";
import NewArrival from "./components/Home/NewArrival";
import ProductPage from "./components/Product/ProductPage";
import ProductDetails from "./components/Product/ProductDetails";
import Cart from "./components/cart/Cart";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        index
        element={
          <>
            <LandingPage />
            <NewArrival />
            <ProductPage />
          </>
        }
      />
      <Route path="/about" element={<About />} />
      <Route path="contact" element={<About />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
