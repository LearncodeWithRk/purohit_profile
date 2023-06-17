import { PrismicPreview } from "@prismicio/next";

import { repositoryName } from "../prismicio";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* TODO: Remove the following element once you have read the documentation. */}
      {process.env.NODE_ENV === "development" 
        
          
       
      }
      <Component {...pageProps} />
      <PrismicPreview repositoryName={repositoryName} />
    </>
  );
}
