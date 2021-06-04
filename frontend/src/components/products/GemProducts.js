import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../Title";
import { listProducts } from "../../actions/productActions";
import Alert from "../Alert";
import Message from "../Message";
import CustomLoader from "../../components/CustomLoader";
import { Wrapper } from "./Products";
import ProductItemList from "./ProductItem";

const Products = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const filterGems = products.filter(
    (product) => product.category === "gemstone"
  );

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <section className='section'>
      <Title
        title='Gem Products'
        subtitle='Select from the premium gem Products'
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
          {filterGems.map((item, index) => (
            <ProductItemList item={item} index={index} />
          ))}
        </Wrapper>
      )}
    </section>
  );
};

export default Products;
