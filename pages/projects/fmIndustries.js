import ImageGallery from "react-image-gallery";

const images = [
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
];

function fm_industries() {
  return <ImageGallery items={images} fullscreen="true" />;
}

export default fm_industries;
