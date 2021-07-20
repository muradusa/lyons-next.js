import ImageGallery from "react-image-gallery";

const images = [
  {
    original:
      "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1623820286/samples/landscapes/nature-mountains.jpg",
    thumbnail:
      "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1623820286/samples/landscapes/nature-mountains.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/dz7rkbzdw/image/upload/v1623820280/samples/bike.jpg",
    thumbnail:
      "https://res.cloudinary.com/dz7rkbzdw/image/upload/c_thumb,w_200/v1623820280/samples/bike.jpg",
  },
];

function fm_industries() {
  return <ImageGallery items={images} fullscreen="true" />;
}

export default fm_industries;
