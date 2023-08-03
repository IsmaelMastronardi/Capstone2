// const LIKE_URL =
//   'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/a6bNXajACIujfMt1fQ2H/likes';

// let likeBtns;
// let likeBadges;

// const getLikes = async () => {
//   const response = await fetch(LIKE_URL);
//   const data = await response.json();
//   return data;
// };

// const displayLikes = () => {
//   likeBadges = document.querySelectorAll('.like-count');
//   getLikes().then((data) => {
//     data.forEach((like) => {
//       likeBadges.forEach((badge) => {
//         if (Number(badge.id) === Number(like.item_id)) {
//           badge.innerHTML = like.likes;
//         }
//       });
//     });
//   });
// };

// const postLikes = async (id) => {
//   const response = await fetch(LIKE_URL, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       item_id: id,
//     }),
//   });
//   return response.json();
// };

// const postAndDisplayLikes = async (id) => {
//   try {
//     await postLikes(id);
//     displayLikes();
//   } catch (error) {
//     console.error('Error posting like:', error);
//   }
// };

// const submitLikes = () => {
//   likeBtns = document.querySelectorAll('.like-btn');
//   likeBtns.forEach((btn) => {
//     btn.addEventListener('click', (event) => {
//      event.stopPropagation();
//     //     console.log('clicked');
//       const id = btn.id;
//       postAndDisplayLikes(id);
//     });
//   });
// };

// // const submitLikes = () => {
// //   likeBtns = document.querySelectorAll('.like-btn');
// //   likeBtns.forEach((btn) => {
// //     btn.addEventListener('click', async (event) => {
// //       // Make the event listener async
// //       event.stopPropagation();
// //       const id = btn.id;
// //       try {
// //         await postLikes(id); // Wait for the API response
// //         displayLikes(); // Update the likes after the API response is received
// //       } catch (error) {
// //         console.error('Error posting like:', error);
// //       }
// //     });
// //   });
// // };

// window.addEventListener('DOMContentLoaded', () => {
//   submitLikes();
// });

// export { displayLikes, submitLikes, getLikes, postLikes };
