function openTab(evt, tabName) {
  const contents = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }

  const links = document.getElementsByClassName("tablink");
  for (let i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = "#ccc";
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.style.backgroundColor = "#aaa";
}

// Default tab
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".tablink").click();
});
