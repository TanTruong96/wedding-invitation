import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import HeartImage from '../../assets/images/heart-img.png';
import { BlockImage, BlockWrapper, Image } from '../../common/styles';
import FlowerOneImage from '../../assets/images/wedding-flower-5-img.png';
import FlowerTwoImage from '../../assets/images/wedding-flower-6-img.png';
import moment from 'moment/moment';

const StyledCountDown = styled(BlockWrapper)`
  background-color: ${props => props.theme.colors.orangeC05};
`;
const Title = styled.h2`
  font-size: 20px;
  text-align: center;
  color: ${props => props.theme.colors.whiteFFF};
  margin-bottom: 24px;
`;
const BlockCountDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 12px;
`;
const BlockTime = styled.div`
  width: calc(25% - 12px);
  border: 1px solid ${props => props.theme.colors.whiteFFF};
  border-radius: 16px;
  padding: 6px;

  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;
const TimeNumber = styled.p`
  font-size: 48px;
  font-weight: bold;

  line-height: 120%;
  letter-spacing: 0.05em;

  color: ${props => props.theme.colors.whiteFFF};
`;
const TimeText = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-top: 12px;
  color: ${props => props.theme.colors.whiteFFF};
`;
const Layer = styled(BlockImage)`
  width: ${props => props.typeTwo ? '26px' : '20px'};

  ${props => props.topRight && css`
    top: -8px;
    right: -6px;
    left: unset;
  `}

  ${props => props.bottomLeft && css`
    top: unset;
    left: -6px;
    bottom: ${props => props.typeOne ? '0px' : '-14px'};
    z-index: ${props => props.typeOne ? 9 : 1};
  `}
`;

function CountDown({ timeStamp, finalDate }) {
  const [timeCount, setTimeCount] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const beforeMidnight = (finalDate) => {
    const today = moment(new Date(timeStamp)).format('YYYY-MM-DD HH:mm:ss');
    const dateRest = moment(finalDate, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss');

    const isBeforeDate = moment(today).isSameOrBefore(dateRest);
    if (isBeforeDate) {
      const now = new Date(timeStamp);
      const daysLeft = Number(moment(dateRest).diff(today, 'days'));
      const hoursLeft = 23 - now.getHours();
      let minutesLeft = 59 - now.getMinutes();
      let secondsLeft = 59 - now.getSeconds();

      //format 0 prefixes
      if (minutesLeft < 10) minutesLeft = 0 + minutesLeft;
      if (secondsLeft < 10) secondsLeft = 0 + secondsLeft;

      setTimeCount({
        days: daysLeft,
        hours: hoursLeft,
        minutes: minutesLeft,
        seconds: secondsLeft,
      });
    } else {
      setTimeCount({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    }
  };

  const convertTimeToSeconds = (hours, minutes, seconds) => {
    return seconds + minutes * 60 + hours * 60 * 60;
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const countDown = () => {
    const c_seconds = convertTimeToSeconds(timeCount.hours, timeCount.minutes, timeCount.seconds);
    if (c_seconds) {
      // seconds change
      timeCount.seconds > 0
        ? setTimeCount((prevState) => ({
            ...prevState,
            seconds: prevState.seconds - 1,
          }))
        : setTimeCount((prevState) => ({
            ...prevState,
            seconds: 59,
          }));

      // minutes change
      if (c_seconds % 60 === 0 && timeCount.minutes) {
        setTimeCount((prevState) => ({
          ...prevState,
          minutes: prevState.minutes - 1,
        }));
      }

      if (!timeCount.minutes && timeCount.hours) {
        setTimeCount((prevState) => ({
          ...prevState,
          minutes: 59,
        }));
      }

      // hours change
      if (c_seconds % 3600 === 0 && timeCount.hours) {
        setTimeCount((prevState) => ({
          ...prevState,
          hours: prevState.hours - 1,
        }));
      }
    }
  };

  useEffect(() => {
    return finalDate ? beforeMidnight(finalDate) : '';
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finalDate]);

  useEffect(() => {
    if (!timeCount) return;

    const intervalId = setInterval(() => {
      const c_seconds = convertTimeToSeconds(timeCount.hours, timeCount.minutes, timeCount.seconds);
      c_seconds <= 0 ? clearInterval(intervalId) : countDown();
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeCount]);

  return (
    <StyledCountDown>
      <Title>Mình cùng đếm ngược thời gian:</Title>
      <BlockCountDown>
        <BlockTime>
          <TimeNumber>{timeCount.days}</TimeNumber>
          <TimeText>Ngày</TimeText>
          <Layer topRight>
            <Image src={HeartImage} alt='countdown-image' />
          </Layer>
          <Layer bottomLeft typeOne>
            <Image src={FlowerOneImage} alt='countdown-image' />
          </Layer>
          <Layer bottomLeft typeTwo>
            <Image src={FlowerTwoImage} alt='countdown-image' />
          </Layer>
        </BlockTime>
        <BlockTime>
          <TimeNumber>{timeCount.hours}</TimeNumber>
          <TimeText>Giờ</TimeText>
          <Layer topRight>
            <Image src={HeartImage} alt='countdown-image' />
          </Layer>
          <Layer bottomLeft typeOne>
            <Image src={FlowerOneImage} alt='countdown-image' />
          </Layer>
          <Layer bottomLeft typeTwo>
            <Image src={FlowerTwoImage} alt='countdown-image' />
          </Layer>
        </BlockTime>
        <BlockTime>
          <TimeNumber>{timeCount.minutes}</TimeNumber>
          <TimeText>Phút</TimeText>
          <Layer topRight>
            <Image src={HeartImage} alt='countdown-image' />
          </Layer>
          <Layer bottomLeft typeOne>
            <Image src={FlowerOneImage} alt='countdown-image' />
          </Layer>
          <Layer bottomLeft typeTwo>
            <Image src={FlowerTwoImage} alt='countdown-image' />
          </Layer>
        </BlockTime>
        <BlockTime>
          <TimeNumber>{timeCount.seconds}</TimeNumber>
          <TimeText>Giây</TimeText>
          <Layer topRight>
            <Image src={HeartImage} alt='countdown-image' />
          </Layer>
          <Layer bottomLeft typeOne>
            <Image src={FlowerOneImage} alt='countdown-image' />
          </Layer>
          <Layer bottomLeft typeTwo>
            <Image src={FlowerTwoImage} alt='countdown-image' />
          </Layer>
        </BlockTime>
      </BlockCountDown>
    </StyledCountDown>
  )
}

export default CountDown