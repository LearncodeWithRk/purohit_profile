import { PrismicPreview } from "@prismicio/next";

import { repositoryName } from "../prismicio";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
     
      <Component {...pageProps} />
      <PrismicPreview repositoryName={repositoryName} />
    </>
  );
}
