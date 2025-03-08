import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../store";
export function SpecificProduct() {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState(false);
  const { cart, addToCart } = useCart();
  const url = "https://v2.api.noroff.dev/online-shop/";

  console.log(cart);

  useEffect(() => {
    async function getProduct() {
      const res = await fetch(url + id);
      const data = await res.json();

      setProduct(data.data);
    }
    getProduct();
  }, [id]);

  return (
    <>
      <h1>Specific</h1>
      {product ? (
        <div>
          <img
            src={product.image.url}
            alt={product.image.alt}
            className="h-64"
          />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          {product.discountedPrice < product.price ? (
              <>
                <p className="line-through text-gray-500">${product.price}</p>
                <p className="text-red-500 font-bold">SALE: ${product.discountedPrice}</p>
              </>
          ) : (
              <p className="font-bold">${product.price}</p>
          )}
          <button
            className="border p-1 cursor-pointer"
            onClick={() => {
              addToCart(product);
            }}
          >
            Purchase
          </button>
        </div>
      ) : (
        <p>loading</p>
      )}
    </>
  );
}
