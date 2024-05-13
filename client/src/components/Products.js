import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/loadingRedux";
import { ClipLoader } from "react-spinners";

const Container = styled.div`
  padding: 20px;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
  color: #333;
  width: 100%;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  padding: 20px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 18px;
  text-align: center;
  width: 100%;
  padding: 20px;
`;

const LoadMoreButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

const LoadMoreButton = styled.button`
  padding: 10px 20px;
  background-color: teal;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 200px;
`;

const Products = ({ cat, filters, sort }) => {
  const isLoading = useSelector((state) => state.loading.isLoading);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);
  const [visibleProducts, setVisibleProducts] = useState(20);

  useEffect(() => {
    const getProducts = async () => {
      try {
        dispatch(setLoading(true));
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data.products);
        dispatch(setLoading(false));
      } catch (err) {
        console.log(err);
        setError(
          "Oops! We couldn't load the products. Please check back later."
        );
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  const handleLoadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 20);
  };

  return (
    <Container>
      <SectionContainer>
        <SectionTitle>All {cat}</SectionTitle>
        {error ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : isLoading ? (
          <LoadingContainer>
            <ClipLoader color="teal" size={50} />
          </LoadingContainer>
        ) : cat ? (
          filteredProducts
            .slice(0, visibleProducts)
            .map((item) => <Product item={item} key={item._id} />)
        ) : (
          products
            .slice(0, visibleProducts)
            .map((item) => <Product item={item} key={item._id} />)
        )}
        {visibleProducts <
          (cat ? filteredProducts.length : products.length) && (
          <LoadMoreButtonContainer>
            <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
          </LoadMoreButtonContainer>
        )}
      </SectionContainer>
    </Container>
  );
};

export default Products;
