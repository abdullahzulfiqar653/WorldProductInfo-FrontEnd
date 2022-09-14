export function checkImage(type) {
  const array = [
    'Tour',
    '220-Canvas',
    'User-Manual',
    'Energy-Guide',
    '360-main-view',
    'Additional-pdf1',
    'Additional-pdf2',
    'Additional-pdf3',
    'Additional-pdf4',
    'Additional-pdf5',
    'Additional-pdf6',
    'Additional-pdf6',
    'Additional-pdf7',
    'Assembly-Instructions',
    'Manufacturer-Brochure',
  ];
  return !array.includes(type);
}

export function checkLabel(label) {
  const array = [
    'Brand Name',
    'Product Type',
    'Product Name',
    'Manufacturer',
    'Package Contents',
    'Marketing Information',
    'Manufacturer Part Number',
    'Certifications & Standards',
    'Manufacturer Website Address',
    'Minimum Operating Temperature',
    'Maximum Operating Temperature',
  ];
  return !array.includes(label);
}

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

export const urlList = [
  { link: '/home', title: 'Home' },
  { link: '', title: 'Products List' },
];
