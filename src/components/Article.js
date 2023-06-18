import { PrismicText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import * as prismic from "@prismicio/client";

import { getExcerpt } from "@/lib/getExcerpt";
import { findFirstImage } from "@/lib/findFirstImage";
import { dateFormatter } from "@/lib/dateFormatter";

import { Heading } from "./Heading";

export function Article({ article }) {
  const featuredImage =
    (prismic.isFilled.image(article.data.featuredImage) &&
      article.data.featuredImage) ||
    findFirstImage(article.data.slices);
  const date = prismic.asDate(
    article.data.publishDate || article.first_publication_date
  );
  const excerpt = getExcerpt(article.data.slices);

  return (
    

  <div className="bg-gray-200 border shadow-sm rounded-xl hover:shadow-md transition">
<PrismicNextLink document={article}>
       
        <div className="aspect-h-3 aspect-w-4 relative bg-gray-100">
          {prismic.isFilled.image(featuredImage) && (
            <PrismicNextImage
              field={featuredImage}
              fill={true}
              className="w-full object-cover rounded-t-xl"
            />
          )}
       </div>
       <div className="p-2 md:p-2">
        <Heading as="h2">
          <PrismicNextLink document={article}>
            <PrismicText field={article.data.title} />
          </PrismicNextLink>
        </Heading>
        <p className="font-serif italic tracking-tighter text-slate-500">
          {dateFormatter.format(date)}
        </p>
        {excerpt && (
          <p className="font-serif leading-relaxed md:text-lg md:leading-relaxed">
            {excerpt}
          </p>
        )}
      </div>
   
      
     
      </PrismicNextLink>
      
    </div>
   
  );
}
