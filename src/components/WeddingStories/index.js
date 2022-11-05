import React from 'react';
import styled, { css } from 'styled-components';
import FemaleImage from '../../assets/images/img-wedding-album-7.jpg';
import MaleImage from '../../assets/images/img-wedding-album-8.jpg';
import FlowerTopImage from '../../assets/images/wedding-flower-3-img.png';
import FlowerBottomImage from '../../assets/images/wedding-flower-4-img.png';
import { BlockImage, BlockWrapper, DashedLine, Image } from '../../common/styles';

const BlockTop = styled.div`
  display: flex;
  align-items: stretch;
`;
const BlockMaleInfo = styled(BlockTop)`
  flex-direction: column;
  justify-content: space-evenly;
  flex: 1 0 34%;
  padding: 24px 0 24px 16px;
`;
const BlockFemaleInfo = styled(BlockMaleInfo)`
  padding: 24px 16px 24px 0;

`;
const CustomBlockImage = styled(BlockImage)`
  position: relative;
  flex-shrink: 0;
`;
const BlockName = styled(BlockTop)`
  width: 100%;
  flex-direction: column;

  ${props => props.mt16 && css`
    margin-top: 16px;
  `}
`;
const TextName = styled.h1`
  width: 100%;
  font-size: 40px;
  font-weight: 600;
  font-style: italic;

  color: ${props => props.theme.colors.green386};
  line-height: 120%;
  letter-spacing: 0.05em;
  text-align: ${props => props.textRight ? 'right' : 'left'};
`;
const TextTitle = styled(TextName)`
  font-size: 20px;
  font-style: inherit;
  line-height: 120%;
  text-align: right;
  text-transform: uppercase;
  color: ${props => props.theme.colors.brownBEA};
`;
const TextDate = styled(TextTitle)`
  color: ${props => props.theme.colors.green386};
  margin-top: 8px;

  span {
    font-size: 24px;
  }
`;
const SubName = styled(TextName)`
  font-size: 20px;
  font-style: unset;
  text-align: center;
  line-height: 150%;
  letter-spacing: inherit;
`;
const BlockBottom = styled.div`
  padding-left: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-right: -16px;
`;
const TextDescription = styled.p`
  display: block;
  max-width: 70%;
  color: ${props => props.theme.colors.brownBEA};
  font-size: 14px;
  font-style: italic;
`;

function WeddingStories({ isVuQuy, data }) {
  return (
    <BlockWrapper>
      <DashedLine top />
      <BlockImage customWidth={126}>
        <Image src={FlowerTopImage} alt='story-image' />
      </BlockImage>

      <BlockTop>
        <BlockMaleInfo>
          <CustomBlockImage customWidth={150} customHeight={150}>
            <Image circle src={FemaleImage} alt='story-image' />
          </CustomBlockImage>
          <BlockName mt16>
            <TextName>
              {isVuQuy ? data.bride : data.groom}
            </TextName>
            <SubName>&</SubName>
            <TextName textRight>
              {!isVuQuy ? data.bride : data.groom}
            </TextName>
          </BlockName>
        </BlockMaleInfo>
        <BlockFemaleInfo>
          <BlockName>
            <TextTitle>Save the Date</TextTitle>
            <TextDate>
              {data.dateTime.date}{' '}
              <span>{data.dateTime.month}</span>{' '}
              {data.dateTime.year}
            </TextDate>
          </BlockName>
          <CustomBlockImage customWidth={150} customHeight={150}>
            <Image circle src={MaleImage} alt='story-image' />
          </CustomBlockImage>
        </BlockFemaleInfo>
      </BlockTop>

      <BlockBottom>
        <TextDescription>
          Cái gọi là duyên phận, chính là trong ngàn vạn người gặp được người cần gặp, trong ngàn vạn năm, giữa mênh mông hoang hoải vô tận của thời gian, không sớm một bước cũng không muộn một bước.
        </TextDescription>

      <CustomBlockImage customWidth={126}>
        <Image src={FlowerBottomImage} alt='story-image' />
      </CustomBlockImage>
      </BlockBottom>

      {/* <CustomDashedLine bottom /> */}
    </BlockWrapper>
  )
}

export default WeddingStories