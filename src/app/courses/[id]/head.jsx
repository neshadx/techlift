// // src/app/courses/[id]/head.jsx
// export default function Head({ params }) {
//   const { id } = params;
//   const base = "http://localhost:3000";
//   const url = `${base}/courses/${id}`;

//   const title = `Course #${id} — LearnEdge`;
//   const desc = "LearnEdge course details and curriculum.";
//   const ogImage = `${base}/og/learnedge-og.jpg`; // 

//   return (
//     <>
//       <title>{title}</title>
//       <meta name="description" content={desc} />
//       <link rel="canonical" href={url} />

//       <meta property="og:type" content="article" />
//       <meta property="og:title" content={title} />
//       <meta property="og:description" content={desc} />
//       <meta property="og:url" content={url} />
//       <meta property="og:image" content={ogImage} />

//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:title" content={title} />
//       <meta name="twitter:description" content={desc} />
//       <meta name="twitter:image" content={ogImage} />
//     </>
//   );
// }
