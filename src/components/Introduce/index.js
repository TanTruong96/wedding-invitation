import React from 'react';
import styled, { css } from 'styled-components';
import WeddingBanner from '../../assets/images/img-wedding-album-1.jpg';

const StyledIntroduce = styled.div`
  width: 100%;

  position: relative;
  overflow: hidden;
  /* background-color: ${props => props.theme.colors.green386}; */

  display: flex;
  flex-direction: column;
  justify-content: center;

  /* padding: 40px 16px 16px; */
`;
const BlockImage = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: auto;

  ${props => props.noMargin && css`
    margin-top: 0;
    margin-bottom: 0;
  `}

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100vh;

    background-color: ${props => props.theme.colors.black2C2};
    opacity: 0.2;
  }

  .introduce-bg-image {
    width: 100%;
    height: 100vh;
  }
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;

  ${props => props.matrix && css`
    -moz-transform: matrix(-1, 0, 0, 1, 0, 0);
    -webkit-transform: matrix(-1, 0, 0, 1, 0, 0);
    -o-transform: matrix(-1, 0, 0, 1, 0, 0);
  `}

  ${props => props.widthFit && css`
    width: 110px;
  `}
`;
const BlockContent = styled.div`
  width: 100%;
  flex-grow: 1;

  padding: 60px 24px 0;
  position: absolute;
  top: 0;
  left: 0;
  ${props => props.topContent && css`
    flex-grow: unset;
    margin-bottom: 16px;
  `}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 120%;
  text-align: center;
  letter-spacing: 0.05em;

  margin-bottom: 16px;
  color: ${props => props.theme.colors.yellowFFD};
`;
const Name = styled(Title)`
  font-size: 42px;
  font-weight: 600;
  line-height: 72px;

  margin-bottom: 12px;
  font-style: italic;
  color: ${props => props.colorbeigeB49 ? props.theme.colors.beigeB49 : props.theme.colors.whiteFFF};
`;
const Date = styled(Title)`
  margin-bottom: 0;
  font-size: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledSpan = styled.span`
  padding: 0 4px;
  color: ${props => props.theme.colors.yellowFFD};
`;
// const BlockDecor = styled.div`
//   width: 100%;

//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   margin-top: 24px;
// `;
// const DashedLine = styled.div`
//   width: 117px;
//   flex-shrink: 0;
//   border-top: 2px dashed ${props => props.theme.colors.beigeB49};

//   margin-top: 50px;
// `;

function Introduce({ data }) {
  return (
    <StyledIntroduce>
      <BlockImage>
        <Image className='introduce-bg-image' src={WeddingBanner} alt='banner-image' />
      </BlockImage>
      <BlockContent>
        <Title>The wedding of</Title>
        <Name>{data.mainTitle}</Name>
        <Date>
          <StyledSpan>{data.dateTime.date} .</StyledSpan>
          <StyledSpan> {data.dateTime.month} </StyledSpan>
          <StyledSpan>. {data.dateTime.year}</StyledSpan>
        </Date>
      </BlockContent>
      {/* <BlockDecor>
        <BlockImage noMargin>
          <Image matrix widthFit src={ImageDecor} alt='img' />
        </BlockImage>
        <DashedLine><span /></DashedLine>
        <BlockImage noMargin>
          <Image widthFit src={ImageDecor} alt='img' />
        </BlockImage>
      </BlockDecor> */}
    </StyledIntroduce>
  )
}

export default Introduce