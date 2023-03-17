import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { type AppProps } from 'next/app';
import "../common/styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
