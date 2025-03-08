import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Products } from "./routes/Products";
import { SpecificProduct } from "./routes/SpecificProduct";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "", element: <Products />,
      },
      { path: "products", element: <Products /> },
      {
        path: "product/:id",
        element: <SpecificProduct />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
