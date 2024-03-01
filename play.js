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
//     // console.log (photosSorted [0]);

//     console.log(data[0]);
// };

// FetchFunc();