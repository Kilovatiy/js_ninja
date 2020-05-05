const getTodos = () => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status == 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject({ status: request.status, requestObj: request });
      }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
  });
};

getTodos().then(data => {
  console.log(data)
}).catch(err => {
  console.log(err.status);
});