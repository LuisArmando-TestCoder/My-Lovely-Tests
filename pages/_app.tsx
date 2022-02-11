import type { AppProps } from 'next/app'
import {
    RecoilRoot,
} from 'recoil'
import RecoilOutside from 'recoil-outside'
import * as Components from '../components'

import '../styles/main.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <RecoilOutside />
      <Component {...pageProps} />
      <Components.L0.Card
        name="Cool card"
        link="https://www.artstation.com/artwork/Kr4xNx"
        image="https://cdnb.artstation.com/p/assets/images/images/032/505/241/large/richard-anderson-flaptraps-art-studio-bh-branding-mcs-v001-004-ra.jpg?1606660586"
      />
    </RecoilRoot>
  )
}

export default MyApp
