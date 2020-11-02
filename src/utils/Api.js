import axios from "axios";

export default {
  getAllEmployees: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
}


// function getAllEmployees() {
//   return axios.get("https://randomuser.me/api/?results=200&nat=us");
// }

// export default getAllEmployees


// Export an object containing methods we'll use for accessing the random user API
// export default {
// function getAllEmployees() {
//     return new Promise((resolve, reject) => {
//       axios
//         .get("https://randomuser.me/api/?results=200&nat=us")
//         .then(res => {
//             console.log (res.data)
//             return res.data
//         //   const users = res.data;
//         //   const results = users.map(user => {
//         //     return {
//         //       login: user.login,
//         //       image: user.avatar_url,
//         //       language: language
//         //     };
//         //   });
//         //   resolve(results);
//         })
//         .catch(err => reject(err));
//     });

// //   // Return a Promise to simulate an async call
// // export function getLanguagesList() {
// //     return new Promise(resolve => {
// //       resolve(languages);
// //     });
//   }

//   export default getAllEmployees
