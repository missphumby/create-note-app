// (function () {
const notes = document.querySelector('#notes');
const createNote = document.querySelector('#create-note');
const home = document.querySelector('#links');
const homes = document.querySelector('#home');
let allNotes = document.querySelector('#all-notes');
console.log(notes);
console.log(home);

function showNotePad() {
    // if (createNote.innerHTML = "Create Note") {
    homes.style.display = "block";
    notes.style.display = "block"
    createNote.classList.toggle('button--secondary');
    // createNote.style.borderStyle = "none"
    createNote.innerHTML = "Remove note";

};
// else if (createNote.innerHTML = "Remove note") {

function makeNote() {
    const noteTitle = document.getElementById("note-title");
    const noteText = document.getElementById("note-text");
    // noteTitle.value = note.title;
    // noteText.value = note.text;
    let div = document.createElement('div');
    div.innerHTML = `${noteTitle.value}<br>${noteText.value}`;
    div.classList.toggle('showItem');
    allNotes.appendChild(div);
    // allNotes.style.display = "block"
    notes.style.display = "none";
    console.log(noteTitle);
    createNote.innerHTML = "Create Note";
    createNote.style.backgroundColor = "#43799c";
};

//   function updateData(title, text){
//     // for(i = 0; i < allNotes.length; i++){
//         noteTitle.value = title;
//         noteText.value = text;
//   }

createNote.addEventListener('click', showNotePad)
home.addEventListener('click', function (e) {
    e.preventDefault()
    const noteTitle = document.getElementById("note-title");
    const noteText = document.getElementById("note-text");

    if (noteTitle.value === "" || noteText.value === "") {
        allNotes.innerHTML = `<p>please make a note<p>`
        return false;
    } else {
        makeNote()
        noteTitle.value = "";
        noteText.value = "";
        return true;
    }

});

//  const eachData = document.getElementById("all-notes").children;
const alltodos = document.getElementById('all-notes')

for (let i = 0; i < alltodos.children; i++) {
    const noteTitle = document.getElementById("note-title");
    const noteText = document.getElementById("note-text");

    alltodos.children[i].addEventListener('mouseover', function (e) {
        console.log(allNotes.children[i])
        e.preventDefault()
        // if (createNote.innerHTML === "Create Note") {        
        //  console.log(eachData)
        notes.style.display = "block";
        noteTitle.value = allNotes.children[i][0].innerHTML
        noteText.value = allNotes.children[i][1].innerHTML

        // }

    })
}
    // createNote.removeEventListener('click', function(e){
    //     createNote.innerHTML = "Remove Note"
    // })

// })()