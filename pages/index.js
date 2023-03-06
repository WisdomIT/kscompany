import Head from 'next/head'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import MotionMain from "@/components/motionmain";
import Background from '@/components/background';
import Foreground from '@/components/foreground';
import { device } from '@/styles/global-style';
import { MobileBr } from '@/components/br';

const Video = styled.video`
  width: calc(100% + 40px);
  height: calc(100% + 40px);
  margin: -20px;
  object-fit: cover;
  filter: brightness(0.7) blur(10px);
`
const Pattern = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Logo = styled.img`

  @media ${device.mobile} {
    height: 30px;
    margin-bottom: 40px;
  }

  @media ${device.tablet} {
    height: 60px;
    margin-bottom: 40px;
  }
`

const Description = styled.p`
  text-align: center;
  color: #fff;
  font-weight: 300;

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 80px;
  }
  
  @media ${device.tablet} {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 100px;
  }
`

const Btn = styled.a`

  background-color: var(--white10);
  border: 1px solid var(--white10);
  backdrop-filter: blur(10px);
  color: var(--white);
  font-weight: 700;
  border-radius: 40px;
  cursor: pointer;
  transition: .2s all;
  box-shadow: 0px 3px 5px var(--black10);

  @media ${device.mobile} {
    font-size: 12px;
    line-height: 12px;
    padding: 15px 45px;
  }

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 16px;
    padding: 20px 40px;
  }

  &:hover {
    background-color: var(--white50);
    box-shadow: 0px 5px 10px var(--black20);
  }
`

const ForegroundDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export default function Home() {

    const router = useRouter()

    return (
    <>
      <Head>
        <title>KSCOMPANY</title>
        <meta name="description" content="촘촘한 기획을 바탕으로 신뢰를 얻는 기업, 차별화된 가치를 만드는 확실한 대안, KS는 그 본질에 집중합니다" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0" />
        <link rel="stylesheet" href="/font/pretendard/pretendard-subset.css" />
      </Head>
      <MotionMain key="index">
        <Background>
          <Video poster="/images/welcome.png" controls={false} autoPlay={true} muted={true} loop={true} playsInline={true}>
            <source src="/images/welcome.mp4" type="video/mp4" />
          </Video>
          <Pattern src="/images/pattern.png" />
        </Background>
        <Foreground>
          <ForegroundDiv>
            <Logo src="/images/logo.png" />
            <Description>촘촘한 기획을 바탕으로 신뢰를 얻는 기업<br />차별화된 가치를 만드는 확실한 대안, <MobileBr />KS는 그 본질에 집중합니다</Description>
            <Btn onClick={() => router.push('/introduction')}>ABOUT US</Btn>
          </ForegroundDiv>
        </Foreground>
      </MotionMain>
    </>
  )
}
