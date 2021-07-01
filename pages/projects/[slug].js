// import React from "react";

// function Project() {
//   return (
//     <div>
//       <p>Hello this is slug.js</p>
//     </div>
//   );
// }

// // This function gets called at build time
// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   const res = await fetch(`http://localhost:3000/api`);
//   const projects = await res.json();

//   // Get the paths we want to pre-render based on posts
//   const paths = projects.map((project) => ({
//     params: { id: project.asset_id.toString() },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false };
// }

// // This also gets called at build time
// export async function getStaticProps({ params }) {
//   // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1
//   const res = await fetch(`http://localhost:3000/api/${params.id}`);
//   const project = await res.json();

//   // Pass post data to the page via props
//   return { props: { project } };
// }

// export default Project;
