import RootLayout from "./components/layout/RootLayout";
import About from "./components/about/About.jsx";
import LandingPage from "./components/home/LandingPage.jsx";
import NewArrival from "./components/home/NewArrival.jsx";
import ProductPage from "./components/product/ProductPage.jsx";
import ProductDetails from "./components/product/ProductDetails.jsx";
import Cart from "./components/cart/Cart.jsx";
import SearchResultsPage from "./components/product/SearchResultsPage.jsx";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import ContactPage from "./components/contact/ContactPage";

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
      <Route path="/search-results" element={<SearchResultsPage />} />

      <Route path="/about" element={<About />} />
      <Route path="contact" element={<ContactPage />} />
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
