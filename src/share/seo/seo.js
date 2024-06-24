import React from "react";
import MetaTags from "react-meta-tags";
export default function SEO({ title, description, name, type, img }) {
  return (
    <MetaTags>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="meta:description" content="desctip" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />
      <meta name="og:image" content={img} />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      {/* End Twitter tags */}
    </MetaTags>
  );
}
