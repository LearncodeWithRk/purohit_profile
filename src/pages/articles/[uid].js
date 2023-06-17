import Link from "next/link";
import Head from "next/head";
import { PrismicText, SliceZone } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Layout } from "@/components/Layout";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { HorizontalDivider } from "@/components/HorizontalDivider";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

function LatestArticle({ article }) {
  const date = prismic.asDate(
    article.data.publishDate || article.first_publication_date
  );

  return (
    <li>
      <h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
        <PrismicNextLink document={article}>
          <PrismicText field={article.data.title} />
        </PrismicNextLink>
      </h1>
      <p className="font-serif italic tracking-tighter text-slate-500">
        {dateFormatter.format(date)}
      </p>
    </li>
  );
}

export default function Article({
  article,
  

  
}) {
  const date = prismic.asDate(
    article.data.publishDate || article.first_publication_date
  );

  return (
    <Layout
      withHeaderDivider={false}
      withProfile={false}
      
     
    >
      <Head>
        <title>
          {prismic.asText(article.data.title)} |{" "}
         
        </title>
      </Head>
      <Bounded>
        <Link href="/" className="font-semibold tracking-tight text-slate-400">
          &larr; Back
        </Link>
      </Bounded>
      <article>
        <Bounded className="pb-0">
          <h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
            <PrismicText field={article.data.title} />
          </h1>
          <p className="font-serif italic tracking-tighter text-slate-500">
            {dateFormatter.format(date)}
          </p>
        </Bounded>
        <SliceZone slices={article.data.slices} components={components} />
      </article>
     
    </Layout>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const article = await client.getByUID("article", params.uid);
   
 
 

  return {
    props: {
      article,
    
      
      
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const articles = await client.getAllByType("article");

  return {
    paths: articles.map((article) => prismic.asLink(article)),
    fallback: false,
  };
}
