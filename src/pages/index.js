import Head from "next/head";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { Layout } from "@/components/Layout";
import { Bounded } from "@/components/Bounded";
import { Article } from "@/components/Article";

export default function Index({ articles }) {
  return (
    <Layout
      withHeaderDivider={false}
     
  
    >
      
      <Bounded size="widest">
        <ul className="grid grid-cols-1 gap-16">
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </ul>
      </Bounded>
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const articles = await client.getAllByType("article");
 
 

  return {
    props: {
      articles
     
   
    },
  };
}
