import React from 'react';
import styled, { css } from 'styled-components';
import { BlockWrapper, BlockImage, Image } from '../../common/styles';
import ImageFlower from '../../assets/images/wedding-flower-7-img.png';


const StyledFooter = styled(BlockWrapper)`
  background-color: ${props => props.theme.colors.green386};

  padding-bottom: 16px;
`;
const Title = styled.h1`
  color: ${props => props.theme.colors.whiteFFF};
  font-weight: 600;
  font-size: 40px;

  text-align: center;
`;
const CopyRightText = styled.div`
  display: block;
  color: ${props => props.theme.colors.beigeB49};
  font-size: 12px;

  display: flex;
  align-items: center;
`;
const AuthorText = styled(CopyRightText)`
  margin-left: 2px;
  color: ${props => props.theme.colors.whiteFFF};
`;
const BlockBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 12px;
`;
const CustomBlockImage = styled(BlockImage)`
  position: relative;
  width: 50%;
  height: 100%;

  ${props => props.revert && css`
    -moz-transform: matrix(-1, 0, 0, 1, 0, 0);
    -webkit-transform: matrix(-1, 0, 0, 1, 0, 0);
    -o-transform: matrix(-1, 0, 0, 1, 0, 0);
  `}
`;
const RegisterBlock = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Footer() {
  return (
    <StyledFooter>
      <Title>Thank you !!</Title>
      <BlockBottom>
        <CustomBlockImage>
          <Image src={ImageFlower} alt='img' />
        </CustomBlockImage>
        <CustomBlockImage revert>
          <Image src={ImageFlower} alt='img' />
        </CustomBlockImage>
      </BlockBottom>
      <RegisterBlock>
        <CopyRightText>Designed by <AuthorText>Duy Phong & Trường Đoàn</AuthorText></CopyRightText>
      </RegisterBlock>
    </StyledFooter>
  )
}

export default Footer