import React, { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import _ from "lodash";
import axios from "axios";

import ImageGallery from "react-image-gallery";
import Image from "next/image";

const projects = {
  cupertino: [
    {
      original:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1627316663/Lyons/cupertino/11_g4rrut.jpg",
      thumbnail:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1627316663/Lyons/cupertino/11_g4rrut.jpg",
    },
    {
      original:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1627316663/Lyons/cupertino/7_ob6pvn.jpg",
      thumbnail:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1627316663/Lyons/cupertino/7_ob6pvn.jpg",
    },
    {
      original:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1627316663/Lyons/cupertino/5_hbjpfe.jpg",
      thumbnail:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1627316663/Lyons/cupertino/5_hbjpfe.jpg",
    },
    {
      original:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1627316662/Lyons/cupertino/12_jamivp.jpg",
      thumbnail:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1627316662/Lyons/cupertino/12_jamivp.jpg",
    },
    {
      original:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1627316662/Lyons/cupertino/9_lvkere.jpg",
      thumbnail:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1627316662/Lyons/cupertino/9_lvkere.jpg",
    },
    {
      original:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1627316662/Lyons/cupertino/8_wevg0v.jpg",
      thumbnail:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1627316662/Lyons/cupertino/8_wevg0v.jpg",
    },
    {
      original:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1627316662/Lyons/cupertino/4_e03nmr.jpg",
      thumbnail:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1627316662/Lyons/cupertino/4_e03nmr.jpg",
    },
    {
      original:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1627316662/Lyons/cupertino/10_kayjab.jpg",
      thumbnail:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1627316662/Lyons/cupertino/10_kayjab.jpg",
    },
    {
      original:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1627316661/Lyons/cupertino/6_mqwfet.jpg",
      thumbnail:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1627316661/Lyons/cupertino/6_mqwfet.jpg",
    },
    {
      original:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1627316661/Lyons/cupertino/2_io0wmq.jpg",
      thumbnail:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1627316661/Lyons/cupertino/2_io0wmq.jpg",
    },
    {
      original:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1627316661/Lyons/cupertino/3_cnh4cx.jpg",
      thumbnail:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1627316661/Lyons/cupertino/3_cnh4cx.jpg",
    },
    {
      original:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1627316661/Lyons/cupertino/1_qvht9z.jpg",
      thumbnail:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1627316661/Lyons/cupertino/1_qvht9z.jpg",
    },
  ],
  livermore: [
    {
      original:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1623820284/samples/ecommerce/accessories-bag.jpg",
      thumbnail:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/c_thumb,w_200/v1623820284/samples/ecommerce/accessories-bag.jpg",
    },
    {
      original:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1623820284/samples/ecommerce/leather-bag-gray.jpg",
      thumbnail:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/c_thumb,w_200/v1623820284/samples/ecommerce/leather-bag-gray.jpg",
    },
    {
      original:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1623820276/samples/ecommerce/analog-classic.jpg",

      thumbnail:
        "https://res.cloudinary.com/dz7rkbzdw/image/upload/c_thumb,w_200/v1623820276/samples/ecommerce/analog-classic.jpg",
    },
  ],
};

function Project() {
  const router = useRouter();
  const { slug } = router.query;

  const allowed = [slug];
  const filteredObj = _.pick(projects, allowed);
  const photos = filteredObj[slug];

  // const [pics, setPics] = useState([]);

  // useEffect(() => {
  //   axios

  //     .get(`http://localhost:3000/api/${allowed}`)
  //     .then((res) => {
  //       setPics(res.data);
  //     })

  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div>
      <p className="ml-5">Hello this is {slug}</p>

      {/* <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 p-5"
      >
        {pics.map((pic) => (
          <li key={pic.asset_id} className="relative">
            <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
              <Image
                src={pic.url}
                layout="fill"
                onClick={handle.enter}
                className="object-cover  group-hover:opacity-75 cursor-pointer"
              />
            </div>
          </li>
        ))}
      </ul> */}

      {photos && <ImageGallery items={photos} fullscreen="true" />}
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
