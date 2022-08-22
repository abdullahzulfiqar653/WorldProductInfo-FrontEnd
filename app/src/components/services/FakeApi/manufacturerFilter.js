const manufacturerFilter = [
  {
    name: 'HP Inc.',
    manufacturerid: 1043456,
    manufacturer_product_count: 1159,
  },
  {
    name: 'Cisco Systems, Inc',
    manufacturerid: 10254,
    manufacturer_product_count: 950,
  },
  {
    name: 'Sony Corporation',
    manufacturerid: 10657,
    manufacturer_product_count: 939,
  },
  {
    name: 'Tripp Lite by Eaton',
    manufacturerid: 10227,
    manufacturer_product_count: 522,
  },
  {
    name: 'Panasonic',
    manufacturerid: 10171,
    manufacturer_product_count: 492,
  },
  {
    name: 'Brother Industries, Ltd',
    manufacturerid: 10328,
    manufacturer_product_count: 416,
  },
  {
    name: 'Samsung',
    manufacturerid: 101210,
    manufacturer_product_count: 377,
  },
  {
    name: 'Nikon Corporation',
    manufacturerid: 10156,
    manufacturer_product_count: 304,
  },
  {
    name: 'Nokia',
    manufacturerid: 101203,
    manufacturer_product_count: 286,
  },
  {
    name: 'Schneider Electric SA',
    manufacturerid: 1027283,
    manufacturer_product_count: 255,
  },
  {
    name: 'Canon, Inc',
    manufacturerid: 10332,
    manufacturer_product_count: 242,
  },
  {
    name: 'Black Box Corporation',
    manufacturerid: 101529,
    manufacturer_product_count: 183,
  },
  {
    name: 'Garmin, Ltd',
    manufacturerid: 102335,
    manufacturer_product_count: 156,
  },
  {
    name: 'Axis Communications',
    manufacturerid: 10319,
    manufacturer_product_count: 155,
  },
  {
    name: 'CyberPower Systems, Inc',
    manufacturerid: 10943,
    manufacturer_product_count: 142,
  },
  {
    name: 'Zebra Technologies Corporation',
    manufacturerid: 10129,
    manufacturer_product_count: 139,
  },
  {
    name: 'Harman International Industries, Inc',
    manufacturerid: 1020508,
    manufacturer_product_count: 115,
  },
  {
    name: 'ViewSonic Corporation',
    manufacturerid: 10237,
    manufacturer_product_count: 88,
  },
  {
    name: 'Philips Electronics',
    manufacturerid: 101159,
    manufacturer_product_count: 82,
  },
  {
    name: 'Hewlett-Packard',
    manufacturerid: 10393,
    manufacturer_product_count: 82,
  },
  {
    name: 'Fuji Photo Film Co. Ltd',
    manufacturerid: 102903,
    manufacturer_product_count: 78,
  },
  {
    name: 'Star Micronics, Inc',
    manufacturerid: 101456,
    manufacturer_product_count: 77,
  },
  {
    name: 'PANDUIT CORP',
    manufacturerid: 101761,
    manufacturer_product_count: 71,
  },
  {
    name: 'Allied Telesis, Inc',
    manufacturerid: 10314,
    manufacturer_product_count: 71,
  },
  {
    name: 'Perle Systems, Inc',
    manufacturerid: 101054,
    manufacturer_product_count: 61,
  },
  {
    name: 'Honeywell International, Inc',
    manufacturerid: 101991,
    manufacturer_product_count: 59,
  },
  {
    name: 'Camden Door Controls',
    manufacturerid: 1030765,
    manufacturer_product_count: 59,
  },
  {
    name: 'Opengear',
    manufacturerid: 1028523,
    manufacturer_product_count: 58,
  },
  {
    name: 'Addonics Technologies',
    manufacturerid: 101110,
    manufacturer_product_count: 57,
  },
  {
    name: 'Snow Joe',
    manufacturerid: 1035899,
    manufacturer_product_count: 54,
  },
  {
    name: 'Rubbermaid Commercial Products',
    manufacturerid: 1056510,
    manufacturer_product_count: 54,
  },
  {
    name: 'ASSA ABLOY',
    manufacturerid: 1036295,
    manufacturer_product_count: 53,
  },
  {
    name: 'Pelican Products, Inc',
    manufacturerid: 102491,
    manufacturer_product_count: 53,
  },
  {
    name: 'Sharp NEC Display Solutions Ltd.',
    manufacturerid: 102353,
    manufacturer_product_count: 52,
  },
  {
    name: 'Hamilton Beach Brands, Inc',
    manufacturerid: 1024080,
    manufacturer_product_count: 50,
  },
  {
    name: 'Yamaha Corporation',
    manufacturerid: 10248,
    manufacturer_product_count: 49,
  },
  {
    name: 'Aerionics, Inc',
    manufacturerid: 1034675,
    manufacturer_product_count: 48,
  },
  {
    name: 'The Bosch Group',
    manufacturerid: 1020700,
    manufacturer_product_count: 47,
  },
  {
    name: 'Kutol Products Company',
    manufacturerid: 1039767,
    manufacturer_product_count: 45,
  },
  {
    name: 'Eaton Corporation',
    manufacturerid: 101950,
    manufacturer_product_count: 43,
  },
  {
    name: 'Newell Brands',
    manufacturerid: 10195,
    manufacturer_product_count: 42,
  },
  {
    name: 'Juniper Networks, Inc',
    manufacturerid: 1020186,
    manufacturer_product_count: 38,
  },
  {
    name: 'Datalogic S.p.A',
    manufacturerid: 1022420,
    manufacturer_product_count: 38,
  },
  {
    name: 'Altronix Corporation',
    manufacturerid: 1020641,
    manufacturer_product_count: 35,
  },
  {
    name: 'Graphtec America, Inc',
    manufacturerid: 1030781,
    manufacturer_product_count: 35,
  },
  {
    name: 'SMART Technologies, Inc',
    manufacturerid: 1022363,
    manufacturer_product_count: 33,
  },
  {
    name: 'Safety Technology International, Inc',
    manufacturerid: 1025066,
    manufacturer_product_count: 32,
  },
  {
    name: 'Impact Products',
    manufacturerid: 1022069,
    manufacturer_product_count: 32,
  },
  {
    name: 'Hikvision',
    manufacturerid: 1032190,
    manufacturer_product_count: 32,
  },
  {
    name: 'dormakaba Holding',
    manufacturerid: 1049563,
    manufacturer_product_count: 31,
  },
  {
    name: 'HSM GmbH + Co. KG',
    manufacturerid: 1024756,
    manufacturer_product_count: 30,
  },
  {
    name: 'Alcatel-Lucent',
    manufacturerid: 102329,
    manufacturer_product_count: 29,
  },
  {
    name: 'PyleUSA',
    manufacturerid: 102499,
    manufacturer_product_count: 28,
  },
  {
    name: 'Diversey, Inc',
    manufacturerid: 1036642,
    manufacturer_product_count: 26,
  },
  {
    name: 'Victaulic Company',
    manufacturerid: 1056876,
    manufacturer_product_count: 25,
  },
  {
    name: 'Jabra',
    manufacturerid: 102143,
    manufacturer_product_count: 25,
  },
  {
    name: 'Vivotek, Inc',
    manufacturerid: 1021620,
    manufacturer_product_count: 24,
  },
  {
    name: 'Deployable Systems, Inc',
    manufacturerid: 1025709,
    manufacturer_product_count: 24,
  },
  {
    name: 'Code Blue Corporation',
    manufacturerid: 1045934,
    manufacturer_product_count: 24,
  },
  {
    name: 'Tempest Lighting, Inc',
    manufacturerid: 1042087,
    manufacturer_product_count: 22,
  },
  {
    name: 'The Coleman Company, Inc',
    manufacturerid: 1022403,
    manufacturer_product_count: 20,
  },
  {
    name: 'Kramer Electronics LTD',
    manufacturerid: 1022364,
    manufacturer_product_count: 19,
  },
  {
    name: 'Enermax Technology Corporation',
    manufacturerid: 1020576,
    manufacturer_product_count: 19,
  },
  {
    name: 'Viking Electronics, Inc',
    manufacturerid: 1031720,
    manufacturer_product_count: 19,
  },
  {
    name: 'Chaney Instrument Co',
    manufacturerid: 1020704,
    manufacturer_product_count: 18,
  },
  {
    name: 'Atlas Sound LP.',
    manufacturerid: 1021322,
    manufacturer_product_count: 17,
  },
  {
    name: 'Royal Sovereign International',
    manufacturerid: 1021497,
    manufacturer_product_count: 17,
  },
  {
    name: 'Kimberly-Clark Corporation',
    manufacturerid: 102004,
    manufacturer_product_count: 17,
  },
  {
    name: 'Listen Technologies Corporation',
    manufacturerid: 1040946,
    manufacturer_product_count: 17,
  },
  {
    name: 'SECO-LARM U.S.A., Inc',
    manufacturerid: 1030744,
    manufacturer_product_count: 17,
  },
  {
    name: 'Alfred Karcher GmbH & Co. KG',
    manufacturerid: 1025609,
    manufacturer_product_count: 16,
  },
  {
    name: 'Crestron Electronics, Inc',
    manufacturerid: 1020536,
    manufacturer_product_count: 15,
  },
  {
    name: 'TAKEX America, Inc',
    manufacturerid: 1030741,
    manufacturer_product_count: 15,
  },
  {
    name: 'Xtralis Pty Ltd',
    manufacturerid: 1045019,
    manufacturer_product_count: 15,
  },
  {
    name: 'Parsec Technologies, Inc.',
    manufacturerid: 1058023,
    manufacturer_product_count: 15,
  },
  {
    name: 'Server Technology, Inc',
    manufacturerid: 1023489,
    manufacturer_product_count: 14,
  },
  {
    name: 'Zhejiang Dahua Technology Co., Ltd.',
    manufacturerid: 1040562,
    manufacturer_product_count: 13,
  },
  {
    name: 'Optex, Inc',
    manufacturerid: 1026743,
    manufacturer_product_count: 12,
  },
  {
    name: 'Kaz, Inc',
    manufacturerid: 1022812,
    manufacturer_product_count: 12,
  },
  {
    name: 'HighPoint Technologies, Inc',
    manufacturerid: 1021463,
    manufacturer_product_count: 12,
  },
  {
    name: 'Raytec, Ltd',
    manufacturerid: 1031005,
    manufacturer_product_count: 11,
  },
  {
    name: 'Allegion plc',
    manufacturerid: 1040805,
    manufacturer_product_count: 10,
  },
  {
    name: 'Omron Healthcare, Inc',
    manufacturerid: 1034867,
    manufacturer_product_count: 10,
  },
  {
    name: 'Legrand Group',
    manufacturerid: 1020570,
    manufacturer_product_count: 10,
  },
  {
    name: 'Adtran',
    manufacturerid: 10838,
    manufacturer_product_count: 10,
  },
  {
    name: 'General Electric Company',
    manufacturerid: 101970,
    manufacturer_product_count: 9,
  },
  {
    name: 'SKB Cases Corporation',
    manufacturerid: 1021983,
    manufacturer_product_count: 9,
  },
  {
    name: 'San Jamar',
    manufacturerid: 1025285,
    manufacturer_product_count: 9,
  },
  {
    name: 'FenixLight Limited',
    manufacturerid: 1027620,
    manufacturer_product_count: 9,
  },
  {
    name: "Rutherford Controls Int'l Corp",
    manufacturerid: 1030749,
    manufacturer_product_count: 8,
  },
  {
    name: 'Alpha Communications',
    manufacturerid: 1022251,
    manufacturer_product_count: 8,
  },
  {
    name: 'Cleva North America',
    manufacturerid: 1032461,
    manufacturer_product_count: 7,
  },
  {
    name: 'Security Door Controls',
    manufacturerid: 1030743,
    manufacturer_product_count: 7,
  },
  {
    name: 'Talkaphone LLC',
    manufacturerid: 1030750,
    manufacturer_product_count: 6,
  },
  {
    name: 'Minelab Electronics Pty, Ltd',
    manufacturerid: 1030699,
    manufacturer_product_count: 6,
  },
  {
    name: 'La Crosse Technology Ltd',
    manufacturerid: 1020674,
    manufacturer_product_count: 6,
  },
  {
    name: 'Tyco International, Ltd',
    manufacturerid: 1020291,
    manufacturer_product_count: 6,
  },
  {
    name: 'Stanley Black & Decker, Inc',
    manufacturerid: 102061,
    manufacturer_product_count: 5,
  },
  {
    name: 'DynaLock Corporation',
    manufacturerid: 1030746,
    manufacturer_product_count: 5,
  },
  {
    name: 'Fresh Products, LLC',
    manufacturerid: 1028486,
    manufacturer_product_count: 4,
  },
  {
    name: 'Directed Electronics, Inc',
    manufacturerid: 1021372,
    manufacturer_product_count: 3,
  },
  {
    name: 'Nice S.p.A.',
    manufacturerid: 1021876,
    manufacturer_product_count: 2,
  },
  {
    name: 'Koblenz Electrica S.A. DE C.V',
    manufacturerid: 1025310,
    manufacturer_product_count: 2,
  },
  {
    name: 'Corporacion EG',
    manufacturerid: 1052021,
    manufacturer_product_count: 2,
  },
  {
    name: 'Warren Rupp, Inc',
    manufacturerid: 1052022,
    manufacturer_product_count: 2,
  },
  {
    name: 'Avanti Products',
    manufacturerid: 1122621,
    manufacturer_product_count: 1,
  },
  {
    name: 'Wildgame Innovations',
    manufacturerid: 1030031,
    manufacturer_product_count: 1,
  },
  {
    name: 'Keri Systems, Inc',
    manufacturerid: 1030262,
    manufacturer_product_count: 1,
  },
  {
    name: 'Positec Industrial Co. LTD',
    manufacturerid: 1032871,
    manufacturer_product_count: 1,
  },
  {
    name: 'Magnasphere Corp',
    manufacturerid: 1034192,
    manufacturer_product_count: 1,
  },
  {
    name: 'RSI Video Technologies',
    manufacturerid: 1043212,
    manufacturer_product_count: 1,
  },
  {
    name: 'The Gorman-Rupp Company',
    manufacturerid: 1052020,
    manufacturer_product_count: 1,
  },
  {
    name: 'Einhell Germany AG',
    manufacturerid: 1026316,
    manufacturer_product_count: 1,
  },
  {
    name: 'Lutron Electronics Co., Inc',
    manufacturerid: 1024189,
    manufacturer_product_count: 1,
  },
];

export default manufacturerFilter;
