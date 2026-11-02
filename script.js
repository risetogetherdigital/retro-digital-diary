const noteDialog = document.querySelector("#noteDialog");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogBody = document.querySelector("#dialogBody");

document.querySelectorAll(".read-more").forEach((button) => {
  button.addEventListener("click", () => {
    const [title, body] = button.dataset.note.split("|");
    dialogTitle.textContent = title;
    dialogBody.textContent = body;
    noteDialog.showModal();
  });
});

document.querySelector("#closeDialog").addEventListener("click", () => {
  noteDialog.close();
});

noteDialog.addEventListener("click", (event) => {
  if (event.target === noteDialog) noteDialog.close();
});

const treasureMessage = document.querySelector("#treasureMessage");
document.querySelectorAll(".treasure").forEach((tile) => {
  tile.addEventListener("click", () => {
    treasureMessage.textContent = tile.dataset.message;
  });
});

const guestbookForm = document.querySelector("#guestbookForm");
const guestNotes = document.querySelector("#guestNotes");

guestbookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.querySelector("#visitorName");
  const messageInput = document.querySelector("#visitorMessage");
  const note = document.createElement("p");
  const name = document.createElement("strong");

  note.className = "guest-note";
  name.textContent = `${nameInput.value.trim()}: `;
  note.append(name, document.createTextNode(messageInput.value.trim()));
  guestNotes.prepend(note);
  guestbookForm.reset();
});

// The guestbook is a front-end demo: notes are not saved to a server.
