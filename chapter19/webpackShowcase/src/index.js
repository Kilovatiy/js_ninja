import { styleBody, addTitle, contact } from './dom';
import testUsers, {getPremUsers} from './data';

console.log('index file');

addTitle('test');
styleBody();

console.log(contact);

console.log(testUsers);

console.log(getPremUsers(testUsers));