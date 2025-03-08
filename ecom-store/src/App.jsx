import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Products } from "./routes/Products";
import { SpecificProduct } from "./routes/SpecificProduct";
import {CheckoutPage} from "./routes/CheckoutPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "", element: <Products />,
      },
      {
        path: "products", element: <Products />
      },
      {
        path: "product/:id",
        element: <SpecificProduct />,
      },
      {
        path: "checkout", element: <CheckoutPage />
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
