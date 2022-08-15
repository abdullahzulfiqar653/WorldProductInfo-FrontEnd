export function show(which, id) {
  let html = document.getElementById("tab-content").childNodes;

  let tabs = document.getElementById("tabs").childNodes;
  // console.log(tabs);
  tabs.forEach((tab) => {
    if (tab.firstChild === id) {
      // console.log(tab.firstChild.classList.add("active"));
      tab.firstChild.classList.add("active");
      // console.log(tab.firstChild);
    } else {
      // console.log(tab.firstChild);
      tab.firstChild.classList.remove("active");
    }
  });
  html.forEach((div) => {
    if (div === document.querySelector(which)) {
      div.classList.add("active");
    } else {
      div.classList.remove("active");
    }
  });
}
