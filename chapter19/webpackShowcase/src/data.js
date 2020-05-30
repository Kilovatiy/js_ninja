const users = [
  { name: 'mario', premium: true },
  { name: 'yoyo', premium: false },
  { name: 'yoshi', premium: true },
  { name: 'toad', premium: true },
  { name: 'peach', premium: false },
];

//export
const getPremUsers = (users) => { return users.filter(u => u.premium) };

//export default users;
export { getPremUsers, useres as default }