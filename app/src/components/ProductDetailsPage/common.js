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
