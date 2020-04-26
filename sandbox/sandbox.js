const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status == 200) {
      callback(undefined, request.response);
    } else if (request.readyState === 4) {
      callback({ status: request.status, requestObj: request });
      //console.log('could not fetch data. error occured.');
    }

  })

  request.open('GET', 'https://jsonplaceholder.typicode.com/todossd/');
  request.send();
};

getTodos((err, data) => {
  if (!err) {
    console.log(data)
  }
  else{
    console.log(err.status)
  }
});