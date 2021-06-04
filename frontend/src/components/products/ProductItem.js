import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addToCart } from "../../actions/cartActions";
import { toast } from "react-toastify";
import Rating from "../../components/Rating";

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

const Price = styled.div``;

const ProductItemList = ({ item, index }) => {
  const dispatch = useDispatch();
  const qty = 1;

  const addToCartHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const outOfStockHandler = () => {
    toast.error("Out of Stock");
  };

  return (
    <ProductItem key={index}>
      <ImgContainer>
        <Link to={`/products/${item._id}`}>
          <img src={item.image} alt={item.name} />
        </Link>
        {item.countInStock === 0 ? (
          <IconWrapper className='disabled' onClick={() => outOfStockHandler()}>
            <i className='fas fa-shopping-cart'></i>
          </IconWrapper>
        ) : (
          <IconWrapper onClick={() => addToCartHandler(item._id, qty)}>
            <i className='fas fa-shopping-cart'></i>
          </IconWrapper>
        )}
      </ImgContainer>
      <Bottom>
        <ProductLink to={`/products/${item._id}`}>{item.name}</ProductLink>
        <Rating value={item.rating} fontSize='14px' textSize='12px' />
        <Price>
          <PriceLabel>${item.price}</PriceLabel>
        </Price>
      </Bottom>
    </ProductItem>
  );
};

export default ProductItemList;
