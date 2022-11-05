import styled, { css } from "styled-components";

const StyledWeddingPage = styled.div`
  overflow: hidden;

  max-width: 425px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.beigeF5E};

  position: relative;
`;

const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 48px 16px;
  position: relative;
  overflow: hidden;
`;
const MainTitle = styled.h1`
  width: fit-content;
  padding: 4px 16px;

  text-align: center;
  text-transform: capitalize;
  color: ${props => props.theme.colors.black2C2};

  font-size: 24px;
  font-weight: 600;
`;
const BlockImage = styled.div`
  width: ${props => props.customWidth ? `${props.customWidth}px` : '100%'};
  height: ${props => props.customHeight ? `${props.customHeight}px` : 'auto'};
  position: absolute;
  top: 0;
  left: 0;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${props => props.circle && css`
    border-radius: 50%;
    /* background-color: ${props => props.theme.colors.green386}; */
  `}
`;
const DashedLine = styled.div`
  width: 120px;
  height: 2px;
  border-top: 2px dashed ${props => props.theme.colors.brownBEA};
  margin: ${props => (props.top || props.bottom) ? '0 auto' : '40px auto'};

  position: ${props => (props.top || props.bottom) ? 'absolute' : 'inherit'};

  ${props => props.top && css`
    top: ${props => props.bottom ? 'unset' : 0};
    left: 50%;
    transform: translateX(-50%);
  `}

  ${props => props.bottom && css`
    bottom: ${props => props.top ? 'unset' : 0};
    left: 50%;
    transform: translateX(-50%);
  `}
`;

export { StyledWeddingPage, BlockWrapper, MainTitle, BlockImage, Image, DashedLine };