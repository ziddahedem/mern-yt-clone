import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Title from "../Title";
import { listProducts } from "../../actions/productActions";
import Alert from "../Alert";
import Message from "../Message";
import CustomLoader from "../../components/CustomLoader";
import ProductItemList from "./ProductItem";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 3rem;
  padding: 0 1.6rem;
  margin-bottom: 5rem;
`;

export const ImgContainer = styled.div`
  position: relative;
  cursor: pointer;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0.6rem;
  background-color: var(--white);
  border-radius: 50%;
  padding: 1.3rem 1.6rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
  transition: all 300ms ease-in-out;

  :hover {
    background-color: var(--primary);
    color: var(--white);
  }

  &.disabled {
    pointer-event: none;
    cursor: default;
  }
`;

export const ProductItem = styled.div`
  overflow: hidden;

  i {
    transition: all 300ms ease-in-out;
  }

  :hover ${IconWrapper} {
    border-radius: 1rem 0 0 0;
  }
`;

export const Bottom = styled.div`
  padding: 1rem;
  text-align: center;
`;

export const ProductLink = styled(Link)`
  margin-bottom: 1rem;
  font-weight: inherit;
  font-size: 1.5rem;

  :hover {
    color: var(--primary);
  }
`;

export const PriceLabel = styled.span`
  color: var(--primary);
  font-size: 1.8rem;
`;

const Products = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const filteredProducts = products.filter(
    (product) => product.category !== "gemstone"
  );

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <section className='section'>
      <Title
        title='New Products'
        subtitle='Select from the premium product brands and save plenty money'
      />{" "}
      {loading ? (
        <CustomLoader type='Oval' width={40} height={40} />
      ) : error ? (
        <>
          {" "}
          <Alert type='danger' message={error} title='' />{" "}
          <Message type='warning' message={error} />{" "}
        </>
      ) : (
        <Wrapper>
          {filteredProducts.map((item, index) => (
            <ProductItemList key={`${index}${Math.random()}-hel`} item={item} />
          ))}
        </Wrapper>
      )}
    </section>
  );
};

export default Products;
