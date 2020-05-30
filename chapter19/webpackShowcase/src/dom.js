
console.log('dom file');
/*
const body = document.querySelector('body');

export const styleBody = () => {
  body.style.background = 'peachpuff';
}

export const addTitle = (text) => {
  const title = document.createElement('h1');
  title.textContent = text;
  body.append(title);
}

export const contact = "username@mail.com";
*/
// styleBody();
// addTitle('hello, world from dom file');
////////////////////////////////////////////
const body = document.querySelector('body');

const styleBody = () => {
  body.style.background = 'peachpuff';
}

const addTitle = (text) => {
  const title = document.createElement('h1');
  title.textContent = text;
  body.append(title);
}

const contact = "username@mail.com";

export { styleBody, addTitle, contact }