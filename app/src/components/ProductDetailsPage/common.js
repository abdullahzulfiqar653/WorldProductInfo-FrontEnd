export const getBasicOverviewTitles = (labels) => {
  const titles = {
    1: 'Main Features',
    2: 'Marketing Information',
    3: 'Package Contents',
  };
  return ['Main Features', ...Object.values(titles).filter((value) => labels.includes(value))];
};

export function checkImage(type, manual = false) {
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

export function isAdditionalInfo(type) {
  const array = [
    'User-Manual',
    'Energy-Guide',
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
  return array.includes(type);
}

export function checkmanuals(manuals) {
  let result = false;
  for (let i = 0; i < manuals.length; i++) {
    result = isAdditionalInfo(manuals[i].type);
    if (result) {
      break;
    }
  }
  return result;
}

export function checkLabel(label, key) {
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
    'Maximum Operating Temperature',
    'Minimum Operating Temperature',
  ];
  return key === 1 ? !array.includes(label) : array.includes(label);
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
