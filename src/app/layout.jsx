// pages/_app.js (add to existing)
import Header from '../components/Header';

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Header />
      <Component {...pageProps} />
    </CartProvider>
  );
}