import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import MotionMain from "@/components/motionmain";
import Background from '@/components/background';
import Foreground from '@/components/foreground';
import SectionName from '@/components/sectionname';
import { useInView } from 'framer-motion';
import { device } from '@/styles/global-style';
import Footer from '@/components/footer';

const BackgroundColor = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
`

export default function Home() {

  return (
    <>
      <Head>
        <title>KSCOMPANY - BRAND</title>
        <meta name="description" content="촘촘한 기획을 바탕으로 신뢰를 얻는 기업, 차별화된 가치를 만드는 확실한 대안, KS는 그 본질에 집중합니다" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0" />
        <link rel="stylesheet" href="/font/pretendard/pretendard-subset.css" />
      </Head>
      <MotionMain key="brand">
        <Background>
            <BackgroundColor />
        </Background>
        <Foreground>
          <Main />
          <Brand />
          <Footer />
        </Foreground>
      </MotionMain>
    </>
  )
}


const MainSection = styled.section`

    @media ${device.mobile} {
        padding: 50px 0px;
    }

    @media ${device.tablet} {
        padding: 100px 0px;
    }
`

const MainTitle = styled.p`

    color: var(--black);
    font-weight: 200;
    margin: 0px;
    word-break: keep-all;
    transition: all .5s;
    
    @media ${device.mobile} {
        margin-top: 25px;
        margin-bottom: 60px;
        font-size: 30px;
        line-height: 40px;
    }

    @media ${device.tablet} {
        margin-top: 60px;
        margin-bottom: 60px;
        font-size: 60px;
        line-height: 76px;
    }
`

const Main = (props) => {

  const [animation, setAnimation] = useState(0)

  useEffect(() => {
      setTimeout(() => setAnimation(1), 100)
  }, [])

  return <MainSection>
        <SectionName icon="office_building" name="BRAND" white />
        <MainTitle style={{
            transform: animation >= 1 ? "none" : "translateY(50px)",
            opacity: animation >= 1 ? 1 : 0
        }}><b style={{color:'var(--yellow)'}}>KS</b>는 고객이 있는 곳이라면<br/><b>어디든지 함께</b>합니다.</MainTitle>
    </MainSection>
}

const Brand = (props) => {
  return <BransListGrid>
  <BrandList url="https://smartstore.naver.com/ojahhouse/products/5114667288" img="ddasuwin" title="따스윈" body="심한 소음과 건조함이 가장 큰 문제인 온풍기 시장에서 ‘건조함 없고, 소음없이’ 우리 가족의 몸을 따스하게 녹여주는 프리미엄 난방가전 브랜드 입니다. 따스윈은 모든 분들이 안전하고, 소음 없이 편안하게 사용하시길 바라는 마음으로 끊임 없이 노력하고 연구합니다." />
  <BrandList url="https://smartstore.naver.com/ojahhouse/products/5821333069" img="hwangto" title="황토불이" body="황토불이는 지친 현대인들의 피로를 풀어주기 위해 탄생했습니다. 전자파의 위협, 알 수 없는 찜질 효과 등 저가형 제품들이 넘치는 찜질기 시장에서, 전기 열선을 이용한 온수 찜질이 아닌, 온수를 쉬지 않고 순환해 황토를 데우는 지속적인 온열 찜질로 지친 일상에 피로를 풀어줍니다." />
  <BrandList url="https://seaznhouse.com/" img="seaznhouse" title="SEAZN HOUSE" body="시즌하우스는 실용성과 기능에 초점을 둔 프리미엄 계절가전 브랜드로 더위와 추위에 힘든 고객의 일상을 더 시원하고 더 따뜻하게 만들어드리기 위해 태어났습니다. 시장에 나와있는 수많은 제품들보다 한 단계 더 업그레이드 된 제품으로 고객님들의 일상을 지켜나가고 있습니다." />
  <BrandList url="https://smartstore.naver.com/ojahhouse/products/6627024021" img="giveyou" title="기브유" body="기브유는 플라워리스트가 직접 제작한 100% 수공예 프리저브드 플라워 브랜드 입니다. 소중한 사람에게 마음이 전달될 수 있도록 기브유 프리저브드를 선물하세요." />
  </BransListGrid>
}

const BransListGrid = styled.div`
  display: grid;
  padding-bottom: 100px;

  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }

  @media ${device.tablet} {
    gap: 32px;
    margin-bottom: 60px;
  }

  @media ${device.desktop} {
    grid-template-columns: repeat(2, 1fr);
  }
`

const BrandListDiv = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: var(--white);
  border: 1px solid var(--black10);
  box-shadow: 0px 5px 15px var(--black10);
  transition: all .5s;
  cursor: pointer;

  @media ${device.mobile} {
    padding: 10px;
    border-radius: 30px;
  }

  @media ${device.tablet} {
    padding: 20px;
    border-radius: 50px;
  }

  &:hover {
    transform: scale(1.05) !important;
  }
  
  &:hover a {
    color: var(--blue);
    width: 120px;
    background-color: var(--white);
  }

  & a:before {
    content: '바로가기';
    transition: all .5s;
    opacity: 0;
    white-space: nowrap;
  }

  &:hover a:before {
    opacity: 1;
  }
  
  & a img {
    filter: contrast(0) brightness(10)
  }

  &:hover a img {
    filter: none
  }
`

const BrandListImg = styled.img`
  object-fit: cover;
  border: 1px solid var(--black10);

  @media ${device.mobile} {
    width: 100%;
    height: 170px;
    border-radius: 20px;
    margin-bottom: 30px;
  }

  @media ${device.tablet} {
    width: 670px;
    height: 330px;
    border-radius: 40px;
    margin-bottom: 20px;
  }

  @media ${device.desktop} {
    width: 490px;
    height: 240px;
  }
`

const BrandListTitle = styled.h1`

  font-weight: 800;
  color: var(--black);
  margin: 0px;

  @media ${device.mobile} {
    font-size: 20px;
    line-height: 10px;
    padding: 10px;
  }

  @media ${device.tablet} {
    font-size: 36px;
    line-height: 36px;
    padding: 20px;
  }

`

const BrandListBody = styled.p`

  color: var(--black);
  margin: 0px;
  word-break: keep-all;

  @media ${device.mobile} {
    font-size: 12px;
    line-height: 18px;
    padding: 10px;
    margin-bottom: 30px;
  }

  @media ${device.tablet} {
    font-size: 14px;
    line-height: 21px;
    padding: 0px 20px;
    margin-bottom: 70px
  }

`

const BrandListBtn = styled.a`

  position: absolute;
  border: 2px solid var(--blue);
  background-color: var(--blue);
  font-weight: 800;
  border-radius: 20px;
  transition: all .3s;
  overflow: hidden;

  @media ${device.mobile} {
    display: none;
  }

  @media ${device.tablet} {
    display: block;
    bottom: 40px;
    right: 40px;
    padding: 10px;
    height: 40px;
    width: 40px;
    font-size: 14px;
  }
`

const BrandListBtnImg = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 20px;
  height: 20px;
  object-fit: contain;
  transition: all .3s;
`

const BrandList = (props) => {
    
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const openUrl = (url) => {
    window.open( url, '_blank' );
  }

  return <BrandListDiv ref={ref} style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0
        }}
        onClick={() => openUrl(props.url)}>
    <BrandListImg src={`/images/brand/${props.img}.png`} />
    <BrandListTitle>{props.title}</BrandListTitle>
    <BrandListBody>{props.body}</BrandListBody>
    <BrandListBtn><BrandListBtnImg src="/images/arrow.png" /></BrandListBtn>
  </BrandListDiv>
}