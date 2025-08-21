// src/app/about/head.jsx
export default function Head() {
  const url = "http://localhost:3000/about";
  const title = "About — TechLift";
  const desc =
    "TechLift is a modern learning platform helping you master skills with expert-led courses.";
  const ogImage = "http://localhost:3000/og/learnedge-og.jpg"; // 

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />
    </>
  );
}
