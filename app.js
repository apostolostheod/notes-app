let notesArr = JSON.parse(localStorage.getItem("myNotes")) || [];
const textArea = document.getElementById("note-text");
const addBtn = document.getElementById("add-note");
const notesCon = document.getElementById("notes-container");
const form = document.getElementById("text-form");

let currentNote = null;
// Submit Hnadler
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (textArea.value.trim() !== "") {
    if (currentNote === null) {
      //Δημιουργία στοιχείων
      const noteDiv = document.createElement("div");
      const p = document.createElement("p");
      const delBtn = document.createElement("button");
      const editBtn = document.createElement("button");
      const saveBtn = document.createElement("button");
      delBtn.textContent = "Delete";
      editBtn.textContent = "Edit";
      saveBtn.textContent = "Save";
      p.textContent = textArea.value;
      noteDiv.appendChild(p);
      noteDiv.appendChild(editBtn);
      noteDiv.appendChild(delBtn);
      noteDiv.appendChild(saveBtn);
      //Σύνδεση του noteDiv με την HTML
      notesCon.appendChild(noteDiv);
      //Delete
      delBtn.addEventListener("click", function () {
        noteDiv.remove();
      });
      //Εdit
      editBtn.addEventListener("click", function () {
        currentNote = noteDiv;
        textArea.value = p.textContent;
        textArea.focus();
        console.log("EDIT clicked — setting currentNote:", noteDiv);
      });
      //Save
    } else {
      const pToEdit = currentNote.querySelector("p");
      pToEdit.textContent = textArea.value;
      currentNote = null;
    }
    textArea.value = "";
  }
});

textArea.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    form.requestSubmit();
  }
});

// Save Button με Local Storage
//Να κάνω ποιο όμορφο σχεδιαστικά το noteDiv
