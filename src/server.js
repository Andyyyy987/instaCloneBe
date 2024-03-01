require("dotenv").config();
const express = require("express");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

// const FetchFunc = async () => {
//     const res = await fetch(
//         "https://api.unsplash.com/photos/?page=1&client_id=VuXluV_uFWSgATOLaklXbuJwlwaIKodXvrdZbQEmk0g"
//     );

//     const data = await res.json();

//     const photosSorted = await data.map ((photo)=> {
//         return {
//             id:photo.id,
//             imageUrls: {
//                 small: photo.urls.small
//             },
//             likes: photo.likes,
//             photographer_name: photo.user.username,
//         };
//     });
    
//     console.log(data);
// };

// FetchFunc();

app.listen(PORT, () => {
    console.log(`Server is running on port 5001`);
});