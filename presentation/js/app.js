/*  window.addEventListener("DOMContentLoaded", () => {
  let visits = localStorage.getItem("visits");

  if (visits === null) {
    visits = 1;
    localStorage.setItem("visits", visits);
  } else {
    localStorage.setItem("visits", ++visits);
  }

  document.querySelector("#statisCount").textContent = `${visits} times`;
});
*/




let votes = localStorage.getItem("votes");
if (votes === null) {
  votes = 0;
  localStorage.setItem("votes", votes);
}
let voteUI = document.querySelector(".vote");
voteUI.textContent = votes;

document.querySelector(".upVote").addEventListener("click", () => {
  ++votes;
  localStorage.setItem("votes", votes);
  voteUI.textContent = votes;
});

document.querySelector(".downVote").addEventListener("click", () => {
  --votes;
  localStorage.setItem("votes", votes);
  voteUI.textContent = votes;
});
