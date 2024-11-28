// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ErrorBoundary from '../components/ErrorBoundary';
import { GoogleAnalytics } from 'nextjs-google-analytics';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;
