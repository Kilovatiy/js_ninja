import Tooltip from './knv-ui/tooltip';
import Dropdown from './knv-ui/dropdown';
import Tabs from './knv-ui/tabs';
import Snackbar from './knv-ui/snackbar';

//create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

//create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(d => {
  const instance = new Dropdown(d);
  instance.init();
});

//create tabs 
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

//create snackbar
const snackbar = new Snackbar();
snackbar.init();
const button = document.querySelector('button');
button.addEventListener('click', () => {
  snackbar.show('you clicked me :)');
})