import cloudinary from "cloudinary";

// cloudinary.config({
//     cloud_name: "xx", // add your cloud_name
//     api_key: "xx", // add your api_key
//     api_secret: "xx", // add your api_secret
//     secure: true
//    });

//    cloudinary.v2.api.resources({
//      type: 'upload',
//      prefix: 'xx' // add your folder
//    },
//      function(error, result) { console.log(result, error) });

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
