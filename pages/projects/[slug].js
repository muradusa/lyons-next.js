import React from "react";
import { useRouter } from "next/dist/client/router";

import ImageGallery from "react-image-gallery";

const projects = {
  cupertino: [
    {
      original:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/c_scale,w_2500/v1623820286/samples/landscapes/nature-mountains.webp",
      thumbnail:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/c_thumb,w_200/v1623820286/samples/landscapes/nature-mountains.webp",
    },
    {
      original:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/c_scale,w_2500/v1626796077/Lyons/FM%20Industries/Lyons_FM_Industries_FM-c_scale_w_2183_yz5cwt.webp",
      thumbnail:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/c_thumb,w_200/v1626796077/Lyons/FM%20Industries/Lyons_FM_Industries_FM-c_scale_w_2183_yz5cwt.webp",
    },
    {
      original:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/c_scale,w_2500/v1626827029/Lyons/FM%20Industries/2021-06-09_LyonsConstruction_FMIndustriesDJI_0604_LRG_vfofrn.webp",

      thumbnail:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/c_thumb,w_200/v1626827029/Lyons/FM%20Industries/2021-06-09_LyonsConstruction_FMIndustriesDJI_0604_LRG_vfofrn.webp",
    },
  ],
  livermore: [
    {
      original:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/c_scale,w_2500/v1623820286/samples/landscapes/nature-mountains.webp",
      thumbnail:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/c_thumb,w_200/v1623820286/samples/landscapes/nature-mountains.webp",
    },
    {
      original:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/c_scale,w_2500/v1626796077/Lyons/FM%20Industries/Lyons_FM_Industries_FM-c_scale_w_2183_yz5cwt.webp",
      thumbnail:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/c_thumb,w_200/v1626796077/Lyons/FM%20Industries/Lyons_FM_Industries_FM-c_scale_w_2183_yz5cwt.webp",
    },
    {
      original:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/c_scale,w_2500/v1626827029/Lyons/FM%20Industries/2021-06-09_LyonsConstruction_FMIndustriesDJI_0604_LRG_vfofrn.webp",

      thumbnail:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/c_thumb,w_200/v1626827029/Lyons/FM%20Industries/2021-06-09_LyonsConstruction_FMIndustriesDJI_0604_LRG_vfofrn.webp",
    },
  ],
};

// const Cupertino = [
//   {
//     original:
//       "https://res.cloudinary.com/dz7rkbzdw/image/upload/c_scale,w_2500/v1623820286/samples/landscapes/nature-mountains.webp",
//     thumbnail:
//       "https://res.cloudinary.com/dz7rkbzdw/image/upload/c_thumb,w_200/v1623820286/samples/landscapes/nature-mountains.webp",
//   },
//   {
//     original:
//       "https://res.cloudinary.com/dz7rkbzdw/image/upload/c_scale,w_2500/v1626796077/Lyons/FM%20Industries/Lyons_FM_Industries_FM-c_scale_w_2183_yz5cwt.webp",
//     thumbnail:
//       "https://res.cloudinary.com/dz7rkbzdw/image/upload/c_thumb,w_200/v1626796077/Lyons/FM%20Industries/Lyons_FM_Industries_FM-c_scale_w_2183_yz5cwt.webp",
//   },
//   {
//     original:
//       "https://res.cloudinary.com/dz7rkbzdw/image/upload/c_scale,w_2500/v1626827029/Lyons/FM%20Industries/2021-06-09_LyonsConstruction_FMIndustriesDJI_0604_LRG_vfofrn.webp",

//     thumbnail:
//       "https://res.cloudinary.com/dz7rkbzdw/image/upload/c_thumb,w_200/v1626827029/Lyons/FM%20Industries/2021-06-09_LyonsConstruction_FMIndustriesDJI_0604_LRG_vfofrn.webp",
//   },
// ];

function Project() {
  const router = useRouter();
  const { slug } = router.query;
  const name = slug;

  return (
    <div>
      <p>Hello this is {slug}</p>
      <p>{name}</p>
      {/* <ImageGallery items={projects.slug} fullscreen="true" /> */}
    </div>
  );
}

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

export default Project;
