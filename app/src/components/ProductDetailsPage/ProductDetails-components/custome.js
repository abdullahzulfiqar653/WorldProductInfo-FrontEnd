export function show(which, id) {
  const html = document.getElementById('tab-content').childNodes;

  const tabs = document.getElementById('tabs').childNodes;

  tabs.forEach((tab) => {
    if (tab.firstChild === id) {
      tab.firstChild.classList.add('active');
    } else {
      tab.firstChild.classList.remove('active');
    }
  });

  html.forEach((div) => {
    if (div === document.querySelector(which)) {
      div.classList.add('active');
    } else {
      div.classList.remove('active');
    }
  });
}
