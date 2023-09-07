import React from "react";
import Head from "next/head";

const HeadTag = (props) => {
  const title = `${props.title + " | " || ""} finemake.in`;
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="application-name" content="finemake" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="finemake" />
      <meta name="description" content="Buy a Modular Kitchens" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />

      <meta name="msapplication-tap-highlight" content="no" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, 
        user-scalable=no, viewport-fit=cover"
      />
    </Head>
  );
};

export default HeadTag;
