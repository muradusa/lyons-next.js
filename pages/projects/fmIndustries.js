import ImageGallery from "react-image-gallery";
// @import "~react-image-gallery/styles/css/image-gallery.css"
// https://medium.com/@patrickjbradley/support-for-the-experimental-syntax-decorators-legacy-isn-t-currently-enabled-f69206bade39

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

function fm_industries() {
  return <ImageGallery items={images} fullscreen="true" />;
}

export default fm_industries;

