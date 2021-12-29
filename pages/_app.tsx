import {AppProps} from 'next/app'
import 'semantic-ui-css/semantic.min.css'
import '../global.css'
import CartProvider from '@store/Cart'

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp