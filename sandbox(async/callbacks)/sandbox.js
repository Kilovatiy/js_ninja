////with event listenert
// const getTodos = () => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//       if (request.readyState === 4 && request.status == 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject({ status: request.status, requestObj: request });
//       }
//     });

//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//     request.send();
//   });
// };

// getTodos().then(data => {
//   console.log(data)
// }).catch(err => {
//   console.log(err.status);
// });

//// Using fetch api
//fetch('https://jsonplaceholder.typicode.com/todos/1').then(resp => resp.json()).then(data => console.log(data));

//// async await

const getTodos = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  return await resp.json();
};

console.log(1);
console.log(2);
getTodos()
  .then(a => console.log(a))
  .catch(e => console.log(e));
console.log(3);
console.log(4);