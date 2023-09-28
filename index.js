const  search = document.getElementById(`taskForm`);
taskform.addEventListener('button', (event) => {
    event.preventDefault();
    console.log("Search done");

const title = document.getElementById('title').value
const description = document.getElementById('escription').value
const category = document.getElementById('category').value
const status = document.getElementById('status').value
const date = document.getElementById('date').value

profiles.push({
    id: idNew,
    title: titleNew,
    description: descriptionNew,
    status: statusNew,
    category: categoryNew,
    date: dateNew
})

idNew++
});