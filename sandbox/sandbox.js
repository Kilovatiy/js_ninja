const requset = new XMLHttpRequest();

requset.addEventListener('readystatechange', () => {
  if (requset.readyState === 4 && requset.status == 200) {
    console.log(requset.responseText);
  } else if (requset.readyState === 4) {
    console.log('could not fetch data. error occured.');
  }
})

requset.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
let response = requset.send();
