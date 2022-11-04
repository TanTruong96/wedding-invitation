import React from 'react';
import styled, { css } from 'styled-components';
import WeddingBanner from '../../assets/images/wedding-anime-img.png';
import ImageDecor from '../../assets/images/wedding-flower-img.png';

const StyledIntroduce = styled.div`
  width: 100%;
  height: auto;

  position: relative;
  overflow: hidden;
  background-color: ${props => props.theme.colors.green386};

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 40px 16px 16px;
`;
const BlockImage = styled.div`
  overflow: hidden;
  position: relative;
  /* margin-bottom: ${props => props.noMargin ? 0 : '40px'};
  margin-top: ${props => props.noMargin ? 0 : "20px"}; */


  ${props => props.noMargin && css`
    margin-top: 0;
    margin-bottom: 0;
  `}
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

  padding: 0 24px;
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
  color: ${props => props.theme.colors.brownBEA};
`;
const Name = styled(Title)`
  font-size: 42px;
  font-weight: 600;
  line-height: 73px;

  margin-bottom: 24px;
  font-style: italic;
  color: ${props => props.colorBrownBEA ? props.theme.colors.brownBEA : props.theme.colors.whiteFFF};
`;
const Date = styled(Title)`
  margin-bottom: 0;
  font-size: 28px;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    padding: 0 12px;
    font-family: "UTMViceroyJF";
    &:nth-child(2) {
      border: 2px solid ${props => props.theme.colors.brownBEA};
      border-top: 0;
      border-bottom: 0;
    }
  }
`;
const StyledSpan = styled.span`
  padding: 0 12px;
    &:nth-child(2) {
      border: 2px solid ${props => props.theme.colors.brownBEA};
      border-top: 0;
      border-bottom: 0;
    }
`;
const BlockDecor = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 24px;
`;
const DashedLine = styled.div`
  width: 117px;
  flex-shrink: 0;
  border-top: 2px dashed ${props => props.theme.colors.brownBEA};

  margin-top: 50px;
`;

function Introduce() {
  return (
    <StyledIntroduce>
      <BlockImage>
        <Image src={WeddingBanner} alt='img' />
      </BlockImage>
      <BlockContent>
        <Title>The wedding of</Title>
        <Name>Thúy & Nhân</Name>
        <Date><StyledSpan>26</StyledSpan><StyledSpan>DEC</StyledSpan><StyledSpan>2022</StyledSpan></Date>
      </BlockContent>
      <BlockDecor>
        <BlockImage noMargin>
          <Image matrix widthFit src={ImageDecor} alt='img' />
        </BlockImage>
        <DashedLine><span /></DashedLine>
        <BlockImage noMargin>
          <Image widthFit src={ImageDecor} alt='img' />
        </BlockImage>
      </BlockDecor>
    </StyledIntroduce>
  )
}

export default Introduce