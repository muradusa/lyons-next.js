const projects = [
  {
    name: "cupertino",
    // photos: [
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
    // ],
  },
  {
    name: "livermore",
    // photos: [
    //   {
    //     original:
    //       "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1623820284/samples/ecommerce/accessories-bag.jpg",
    //     thumbnail:
    //       "https://res.cloudinary.com/dz7rkbzdw/image/upload/c_thumb,w_200/v1623820284/samples/ecommerce/accessories-bag.jpg",
    //   },
    //   {
    //     original:
    //       "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1623820284/samples/ecommerce/leather-bag-gray.jpg",
    //     thumbnail:
    //       "https://res.cloudinary.com/dz7rkbzdw/image/upload/c_thumb,w_200/v1623820284/samples/ecommerce/leather-bag-gray.jpg",
    //   },
    //   {
    //     original:
    //       "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1623820276/samples/ecommerce/analog-classic.jpg",

    //     thumbnail:
    //       "https://res.cloudinary.com/dz7rkbzdw/image/upload/c_thumb,w_200/v1623820276/samples/ecommerce/analog-classic.jpg",
    //   },
    // ],
  },
];

export default function handler(req, res) {
  res.status(200).json(projects);
}
