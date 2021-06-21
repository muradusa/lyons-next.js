import cloudinary from "cloudinary";

export default function handler(req, res) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
    secure: true,
  });

  cloudinary.v2.api.resources(
    {
      type: "upload",
      prefix: "samples/animals", // add your folder
    },
    function (error, result) {
      console.log(result.resources);
      res.status(200).json(result.resources);
    }
  );
}
