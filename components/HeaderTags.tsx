import React, { FC } from "react";

interface HeaderTagsProps {}

const HeaderTags: FC<HeaderTagsProps> = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content="description" />
      <meta name="keywords" content="keywords" />
      <meta name="author" content="Mehdi Faraji" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="msapplication-TileColor" content="#8484ff" />
      <meta name="msapplication-TileImage" content="/icons/icon-144x144.png" />
      <meta name="msapplication-navbutton-color" content="#8484ff" />

      <meta name="apple-mobile-web-app-title" content="Mehdi Faraji" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#8484ff" />

      <meta
        property="og:title"
        content="Mehdi Faraji | Frontend Developer"
        key="title"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Mehdi Faraji Frontend Developer making helpful products that connect people specialized in creating beautiful yet functional web applications and mobile applications"
      />
      <meta property="og:image" content="/icons/og-img.png" />
      <meta property="og:site_name" content="Mehdi Faraji Frontend Developer" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mehdifaraji_" />
      <meta name="twitter:creator" content="Mehdi Faraji" />
      <meta name="twitter:title" content="Mehdi Faraji | Frontend Developer" />
      <meta
        name="twitter:description"
        content="Mehdi Faraji Frontend Developer making helpful products that connect people specialized in creating beautiful yet functional web applications and mobile applications"
      />

      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />

      <link
        href="/icons/favicon-16x16.png"
        rel="icon"
        type="image/png"
        sizes="16x16"
      />
      <link
        href="/icons/favicon-32x32.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <link
        href="/icons/favicon-96x96.png"
        rel="icon"
        type="image/png"
        sizes="96x96"
      />
      <link rel="apple-touch-icon" href="/apple-icon.png" />
    </>
  );
};

export default HeaderTags;
