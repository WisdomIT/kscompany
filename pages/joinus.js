import Head from 'next/head'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import MotionMain from "@/components/motionmain";
import Background from '@/components/background';

const BackgroundColor = styled.div`
    width: 100%;
    height: 100%;
    background: var(--linear-blue);
`

export default function Home() {
  return (
    <>
      <Head>
        <title>KSCOMPANY - JOIN US</title>
        <meta name="description" content="촘촘한 기획을 바탕으로 신뢰를 얻는 기업, 차별화된 가치를 만드는 확실한 대안, KS는 그 본질에 집중합니다" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0" />
        <link rel="stylesheet" href="/font/pretendard/pretendard-subset.css" />
      </Head>
      <MotionMain key="brand">
        <Background>
            <BackgroundColor />
        </Background>
      </MotionMain>
    </>
  )
}
