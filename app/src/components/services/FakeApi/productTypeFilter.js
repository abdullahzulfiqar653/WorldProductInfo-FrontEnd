const productTypeFilter = [
  {
    value: 'Electric Strike',
    valueid: 2285136,
    category_product_count: 33,
  },
  {
    value: 'Passive Infrared Detector',
    valueid: 2287688,
    category_product_count: 27,
  },
  {
    value: 'Magnetic Lock',
    valueid: 2286339,
    category_product_count: 26,
  },
  {
    value: 'Personal Emergency Reporting System',
    valueid: 2377410,
    category_product_count: 25,
  },
  {
    value: 'Intercom Master Station',
    valueid: 2283891,
    category_product_count: 25,
  },
  {
    value: 'Fire Sprinkler',
    valueid: 19672032,
    category_product_count: 25,
  },
  { value: 'Push Button', valueid: 2285101, category_product_count: 24 },
  { value: 'Pull Station', valueid: 2280023, category_product_count: 13 },
  {
    value: 'Connector Insert',
    valueid: 2845741,
    category_product_count: 11,
  },
  {
    value: 'Metal Detector',
    valueid: 2056562,
    category_product_count: 10,
  },
  {
    value: 'Keyfob Transmitter',
    valueid: 2287640,
    category_product_count: 9,
  },
  {
    value: 'Photoelectric Beam Detector',
    valueid: 2285134,
    category_product_count: 7,
  },
  { value: 'Spray Bottle', valueid: 1705346, category_product_count: 7 },
  { value: 'Cover', valueid: 1601379, category_product_count: 6 },
  {
    value: 'Single Stage Snow Blower',
    valueid: 19345938,
    category_product_count: 6,
  },
  { value: 'Wine Cooler', valueid: 1635817, category_product_count: 5 },
  {
    value: 'Handheld Transmitter',
    valueid: 2285102,
    category_product_count: 4,
  },
  {
    value: 'Touch-free Button',
    valueid: 2672884,
    category_product_count: 4,
  },
  {
    value: 'Submersible Pump',
    valueid: 2746097,
    category_product_count: 4,
  },
  {
    value: 'Splice Cassette',
    valueid: 19359477,
    category_product_count: 4,
  },
  {
    value: 'Powered Chain Saw',
    valueid: 2623123,
    category_product_count: 3,
  },
  {
    value: 'Electric Heating Pad',
    valueid: 2385920,
    category_product_count: 3,
  },
  {
    value: 'Camera Hot Shoe Cap',
    valueid: 2605416,
    category_product_count: 2,
  },
  {
    value: 'Voltage Sensor',
    valueid: 3368529,
    category_product_count: 2,
  },
  { value: 'Wire Splice', valueid: 2318109, category_product_count: 2 },
  {
    value: 'Automation Controller',
    valueid: 2377901,
    category_product_count: 2,
  },
  {
    value: 'Embroidery Hoop Frame Kit',
    valueid: 19988923,
    category_product_count: 2,
  },
  {
    value: 'Embroidery Hoop Frame',
    valueid: 19988924,
    category_product_count: 2,
  },
  {
    value: 'KVM/AV/IT System Management Platform',
    valueid: 19792215,
    category_product_count: 2,
  },
  {
    value: 'Room Scheduling Touch Screen',
    valueid: 19225143,
    category_product_count: 2,
  },
  {
    value: 'Electric Trimmer Roll Holder Assembly',
    valueid: 2999599,
    category_product_count: 2,
  },
  {
    value: 'Cutting System Blade Holder',
    valueid: 3034595,
    category_product_count: 2,
  },
  {
    value: 'Electrotherapy Pad',
    valueid: 3038010,
    category_product_count: 2,
  },
  {
    value: 'Inverter/Charger Remote Control Module',
    valueid: 3109932,
    category_product_count: 1,
  },
  { value: 'Push Station', valueid: 3153945, category_product_count: 1 },
  {
    value: 'Lightning Arrester',
    valueid: 19319322,
    category_product_count: 1,
  },
  {
    value: '3G/HD/SD-SDI Input Card',
    valueid: 2957338,
    category_product_count: 1,
  },
  {
    value: 'Room Control System Control Processor',
    valueid: 19829880,
    category_product_count: 1,
  },
  { value: 'Splice Tray', valueid: 19845398, category_product_count: 1 },
  {
    value: 'Air Flow Sensor',
    valueid: 19851595,
    category_product_count: 1,
  },
  {
    value: 'KVM & AV/IT Manager',
    valueid: 19851615,
    category_product_count: 1,
  },
  {
    value: 'Sewing Machine Quilting Toe Set',
    valueid: 19940842,
    category_product_count: 1,
  },
  {
    value: 'Powered Jigsaw',
    valueid: 19374433,
    category_product_count: 1,
  },
  {
    value: 'Optical Network Terminal',
    valueid: 19376375,
    category_product_count: 1,
  },
  {
    value: 'Scheduling Touch Panel',
    valueid: 19591832,
    category_product_count: 1,
  },
  {
    value: 'RF Clock Transmitter',
    valueid: 19990883,
    category_product_count: 1,
  },
  {
    value: 'Transcription Foot Pedal',
    valueid: 19359241,
    category_product_count: 1,
  },
  {
    value: 'Magnetic Contact',
    valueid: 2291417,
    category_product_count: 1,
  },
  { value: 'Wine Cabinet', valueid: 1652149, category_product_count: 1 },
  {
    value: 'Splice Connector',
    valueid: 1599385,
    category_product_count: 1,
  },
  { value: 'Air Baffle', valueid: 3384385, category_product_count: 1 },
  {
    value: 'Cutting System Pen Holder',
    valueid: 3384565,
    category_product_count: 1,
  },
  {
    value: 'Fabric Interconnect',
    valueid: 3394612,
    category_product_count: 1,
  },
  {
    value: 'Gas Alarm Control Panel',
    valueid: 3404707,
    category_product_count: 1,
  },
  {
    value: 'Embroidery Hoop',
    valueid: 3408203,
    category_product_count: 1,
  },
  {
    value: 'Tablet PC Corner Guard',
    valueid: 3423541,
    category_product_count: 1,
  },
  {
    value: 'Airflow Extension Sleeve',
    valueid: 3468536,
    category_product_count: 1,
  },
  {
    value: 'Antenna Extension Base',
    valueid: 3485729,
    category_product_count: 1,
  },
  {
    value: 'Automation Control Module',
    valueid: 3503156,
    category_product_count: 1,
  },
  {
    value: 'RF Wireless Gateway',
    valueid: 3525131,
    category_product_count: 1,
  },
  { value: 'Neck Loop', valueid: 2613880, category_product_count: 1 },
  {
    value: 'Dry Contact I/O Interface',
    valueid: 2492513,
    category_product_count: 1,
  },
  { value: 'Sprayer', valueid: 2537535, category_product_count: 1 },
  {
    value: 'Pressure Washer Underbody/Gutter Spray',
    valueid: 2785521,
    category_product_count: 1,
  },
  {
    value: 'Pressure Washer Spray Extension Wand',
    valueid: 2795473,
    category_product_count: 1,
  },
  {
    value: 'Pressure Washer Surface Cleaner Attachment',
    valueid: 2810041,
    category_product_count: 1,
  },
];

export default productTypeFilter;
