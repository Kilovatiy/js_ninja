const list = document.querySelector('ul');
const form = document.querySelector('form');

const addRecipe = (recipe, id) => {
  let time = recipe.created_at.toDate().toLocaleDateString();
  let html = `
  <li data-id = "${id}">
    <div>${recipe.title} <button class="btn btn-danger btn-sm my-2">X</button></div>
    <div class="small text-muted" >${time}</div>    
  </li>
  `;
  list.innerHTML += html;
}

//Get docs
db.collection('recipes').get().then((result) => {
  result.docs.forEach(doc => {
    addRecipe(doc.data(), doc.id);
  });

}).catch((err) => {
  console.log(err);
});



//add docs
form.addEventListener('submit', e => {
  e.preventDefault();
  const now = new Date();

  const recipe = {
    title: form.recipe.value,
    created_at: firebase.firestore.Timestamp.fromDate(now),
    author: 'App user'
  }

  db.collection('recipes').add(recipe);

  //addRecipe(recipe);
});

//deleting items
list.addEventListener('click', e => {
  if (e.target.tagName === "BUTTON") {
     let id = e.target.parentElement.parentElement.getAttribute("data-id");
     //e.target.parentElement.parentElement.remove();
     db.collection('recipes').doc(id).delete().then(()=>{console.log(`${id} deleted`)});     
  }
})

