import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Skeleton } from "../components/loader";
import ProductCard from "../components/product-card";
import { useLatestProductsQuery } from "../redux/api/productAPI";
import { addToCart } from "../redux/reducer/cartReducer";
import { CartItem } from "../types/types";
import downloadImage from "../assets/download.jpg";

const Home = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, isLoading, isError } = useLatestProductsQuery("");

  const dispatch = useDispatch();

  const addToCartHandler = (cartItem: CartItem) => {
    if (cartItem.stock < 1) return toast.error("Out of Stock");
    dispatch(addToCart(cartItem));
    toast.success("Added to cart");
  };

  if (isError) toast.error("Cannot Fetch the Products");

  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
      {isLoading ? (
  <Skeleton width="80vw" />
) : (
  // Displaying simple mock data for ProductCard components
  <>
    <ProductCard
      key="1"
      productId="1"
      name="Product 1"
      price={10}
      stock={10}
      handler={addToCartHandler}
      photo="https://www.google.com/imgres?q=product%20images%20jpg&imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F2536965%2Fpexels-photo-2536965.jpeg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fproduct%2F&docid=nMjIODhQZ_AKUM&tbnid=bHd09wELR0lfwM&vet=12ahUKEwi9zvDsiaSFAxUxcvUHHdWjDl0QM3oECFcQAA..i&w=3743&h=3040&hcb=2&ved=2ahUKEwi9zvDsiaSFAxUxcvUHHdWjDl0QM3oECFcQAA"
    />
    <ProductCard
      key="2"
      productId="2"
      name="Product 2"
      price={10}
      stock={5}
      handler={addToCartHandler}
      photo={downloadImage}
    />
    <ProductCard
      key="3"
      productId="3"
      name="Product 3"
      price={10}
      stock={15}
      handler={addToCartHandler}
      photo={downloadImage}
    />
    <ProductCard
      key="3"
      productId="3"
      name="Product 3"
      price={10}
      stock={15}
      handler={addToCartHandler}
      photo={downloadImage}
    />
    <ProductCard
      key="3"
      productId="3"
      name="Product 3"
      price={10}
      stock={15}
      handler={addToCartHandler}
      photo={downloadImage}
    />
  </>
)}

      </main>
    </div>
  );
};

export default Home;
