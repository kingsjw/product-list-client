import { memo } from 'react';
import styled from 'styled-components';
import { priceFormat } from '../../helper/util';
import HeartButton from './HeartButton';

interface PropsType {
  id: string,
  title: string,
  price: number,
  coverImage: string,
  liked?: boolean
}

const ProductItemComponent = memo((props: PropsType) => {
  const { id, title, price, coverImage, liked } = props;
  return (
    <Wrapper>
      <Image>
        <img src={coverImage} alt={title}/>
        <HeartButtonWrapper>
          <HeartButton id={id} liked={liked}/>
        </HeartButtonWrapper>
      </Image>
      <Name>{ title }</Name>
      <Divider><hr/></Divider>
      <Price>{ priceFormat(price) }원</Price>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  width: 33.33%;
  padding: 0 10px;
  margin-bottom: 10px;
`;

const Image = styled.div`
  padding-top: 75%;
  overflow: hidden;
  border-radius: 6px;
  position: relative;
  mask-image: radial-gradient(rgb(255, 255, 255), rgb(0, 0, 0));
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    vertical-align: middle;
    cursor: pointer;
  }
`;

const HeartButtonWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

const Name = styled.div`
  font-size: 16px;
  color: #000;
  padding: 16px 8px;
`;

const Divider = styled.div`
  hr {
    height: 1px;
    border: none;
    box-shadow: rgb(248 248 249) 0px -1px 0px inset;
  }
`;

const Price = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #000;
  text-align: right;
  padding: 16px 8px;
`;

export default memo(ProductItemComponent);

