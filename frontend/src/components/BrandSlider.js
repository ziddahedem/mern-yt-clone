import styled from "styled-components";

const BrandSlider = () => {
  const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (max-width: 567px) {
      width: 60px;
      height: 60px;
    }
  `;

  const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    margin: 20px auto;
    max-width: 996px;
    gap: 10px 0;
  `;

  return (
    <Wrapper>
      <Item>
        <img src='/images/brand-1.png' alt='' />
      </Item>
      <Item>
        <img src='/images/brand-2.png' alt='' />
      </Item>
      <Item>
        <img src='/images/brand-3.png' alt='' />
      </Item>
      <Item>
        <img src='/images/brand-4.png' alt='' />
      </Item>
      <Item>
        <img src='/images/brand-5.png' alt='' />
      </Item>
    </Wrapper>
  );
};

export default BrandSlider;
