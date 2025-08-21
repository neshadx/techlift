// src/app/head.jsx
export default function Head() {
  const siteName = "LearnEdge";
  const siteUrl  = "http://localhost:3000"; // ডেপ্লয় হলে নিজের ডোমেইন দিন
  const title = "LearnEdge — Modern Learning Platform";
  const description =
    "Explore interactive courses, expert mentors, and a platform built for future‑ready learning.";
  const ogImage = `${siteUrl}/og/learnedge-og.jpg`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Favicon + theme  */}
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#10B981" />
      <meta name="robots" content="index,follow" />
    </>
  );
}
