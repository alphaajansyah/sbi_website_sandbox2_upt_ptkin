export interface PTKINInstitution {
  id: number;
  name: string;
  type: 'UIN' | 'IAIN' | 'STAIN';
  city: string;
  province: string;
  region: 'Sumatera' | 'Jawa' | 'Kalimantan' | 'Sulawesi' | 'Bali & Nusa Tenggara' | 'Maluku' | 'Papua';
  latitude: number;
  longitude: number;
}

export const ptkinData: PTKINInstitution[] = [
  // SUMATERA
  { id: 1, name: 'UIN Ar-Raniry', type: 'UIN', city: 'Banda Aceh', province: 'Aceh', region: 'Sumatera', latitude: 5.5577, longitude: 95.3222 },
  { id: 2, name: 'IAIN Langsa', type: 'IAIN', city: 'Langsa', province: 'Aceh', region: 'Sumatera', latitude: 4.4683, longitude: 97.9683 },
  { id: 3, name: 'IAIN Lhokseumawe', type: 'IAIN', city: 'Lhokseumawe', province: 'Aceh', region: 'Sumatera', latitude: 5.1801, longitude: 97.1522 },
  { id: 4, name: 'IAIN Takengon', type: 'IAIN', city: 'Takengon', province: 'Aceh', region: 'Sumatera', latitude: 4.6333, longitude: 96.8333 },
  { id: 5, name: 'STAIN Teungku Dirundeng Meulaboh', type: 'STAIN', city: 'Meulaboh', province: 'Aceh', region: 'Sumatera', latitude: 4.1400, longitude: 96.1300 },
  { id: 6, name: 'UIN Sumatera Utara', type: 'UIN', city: 'Medan', province: 'Sumatera Utara', region: 'Sumatera', latitude: 3.5952, longitude: 98.6722 },
  { id: 7, name: 'IAIN Padangsidimpuan', type: 'IAIN', city: 'Padangsidimpuan', province: 'Sumatera Utara', region: 'Sumatera', latitude: 1.3833, longitude: 99.2667 },
  { id: 8, name: 'STAIN Mandailing Natal', type: 'STAIN', city: 'Panyabungan', province: 'Sumatera Utara', region: 'Sumatera', latitude: 0.8667, longitude: 99.5333 },
  { id: 9, name: 'UIN Imam Bonjol', type: 'UIN', city: 'Padang', province: 'Sumatera Barat', region: 'Sumatera', latitude: -0.9492, longitude: 100.3543 },
  { id: 10, name: 'IAIN Batusangkar', type: 'IAIN', city: 'Batusangkar', province: 'Sumatera Barat', region: 'Sumatera', latitude: -0.4600, longitude: 100.5900 },
  { id: 11, name: 'IAIN Bukittinggi', type: 'IAIN', city: 'Bukittinggi', province: 'Sumatera Barat', region: 'Sumatera', latitude: -0.3060, longitude: 100.3694 },
  { id: 12, name: 'UIN Sultan Syarif Kasim Riau', type: 'UIN', city: 'Pekanbaru', province: 'Riau', region: 'Sumatera', latitude: 0.5333, longitude: 101.4500 },
  { id: 13, name: 'STAIN Bengkalis', type: 'STAIN', city: 'Bengkalis', province: 'Riau', region: 'Sumatera', latitude: 1.4800, longitude: 102.1100 },
  { id: 14, name: 'STAIN Sultan Abdurrahman', type: 'STAIN', city: 'Tanjungpinang', province: 'Kepulauan Riau', region: 'Sumatera', latitude: 0.9167, longitude: 104.4500 },
  { id: 15, name: 'IAIN Syaikh Abdurrahman Siddik', type: 'IAIN', city: 'Bangka', province: 'Bangka Belitung', region: 'Sumatera', latitude: -2.1300, longitude: 106.1200 },
  { id: 16, name: 'UIN Sulthan Thaha Saifuddin', type: 'UIN', city: 'Jambi', province: 'Jambi', region: 'Sumatera', latitude: -1.6100, longitude: 103.6100 },
  { id: 17, name: 'IAIN Kerinci', type: 'IAIN', city: 'Sungai Penuh', province: 'Jambi', region: 'Sumatera', latitude: -2.0833, longitude: 101.6667 },
  { id: 18, name: 'IAIN Bengkulu', type: 'IAIN', city: 'Bengkulu', province: 'Bengkulu', region: 'Sumatera', latitude: -3.7928, longitude: 102.2608 },
  { id: 19, name: 'IAIN Curup', type: 'IAIN', city: 'Curup', province: 'Bengkulu', region: 'Sumatera', latitude: -3.4667, longitude: 102.5167 },
  { id: 20, name: 'UIN Raden Fatah', type: 'UIN', city: 'Palembang', province: 'Sumatera Selatan', region: 'Sumatera', latitude: -2.9761, longitude: 104.7754 },
  { id: 21, name: 'UIN Raden Intan', type: 'UIN', city: 'Bandar Lampung', province: 'Lampung', region: 'Sumatera', latitude: -5.3971, longitude: 105.2668 },
  { id: 22, name: 'IAIN Metro', type: 'IAIN', city: 'Metro', province: 'Lampung', region: 'Sumatera', latitude: -5.1167, longitude: 105.3000 },

  // JAWA
  { id: 23, name: 'UIN Sultan Maulana Hasanuddin', type: 'UIN', city: 'Serang', province: 'Banten', region: 'Jawa', latitude: -6.1200, longitude: 106.1500 },
  { id: 24, name: 'UIN Syarif Hidayatullah', type: 'UIN', city: 'Tangerang Selatan', province: 'Banten', region: 'Jawa', latitude: -6.3024, longitude: 106.7421 },
  { id: 25, name: 'UIN Sunan Gunung Djati', type: 'UIN', city: 'Bandung', province: 'Jawa Barat', region: 'Jawa', latitude: -6.9175, longitude: 107.6191 },
  { id: 26, name: 'IAIN Syekh Nurjati', type: 'IAIN', city: 'Cirebon', province: 'Jawa Barat', region: 'Jawa', latitude: -6.7063, longitude: 108.5570 },
  { id: 27, name: 'UIN Walisongo', type: 'UIN', city: 'Semarang', province: 'Jawa Tengah', region: 'Jawa', latitude: -6.9932, longitude: 110.4203 },
  { id: 28, name: 'IAIN Kudus', type: 'IAIN', city: 'Kudus', province: 'Jawa Tengah', region: 'Jawa', latitude: -6.8050, longitude: 110.8400 },
  { id: 29, name: 'IAIN Pekalongan', type: 'IAIN', city: 'Pekalongan', province: 'Jawa Tengah', region: 'Jawa', latitude: -6.8886, longitude: 109.6753 },
  { id: 30, name: 'IAIN Purwokerto', type: 'IAIN', city: 'Purwokerto', province: 'Jawa Tengah', region: 'Jawa', latitude: -7.4211, longitude: 109.2350 },
  { id: 31, name: 'IAIN Salatiga', type: 'IAIN', city: 'Salatiga', province: 'Jawa Tengah', region: 'Jawa', latitude: -7.3306, longitude: 110.5083 },
  { id: 32, name: 'IAIN Surakarta', type: 'IAIN', city: 'Surakarta', province: 'Jawa Tengah', region: 'Jawa', latitude: -7.5561, longitude: 110.8317 },
  { id: 33, name: 'UIN Sunan Kalijaga', type: 'UIN', city: 'Yogyakarta', province: 'D.I. Yogyakarta', region: 'Jawa', latitude: -7.7731, longitude: 110.3717 },
  { id: 34, name: 'IAIN Ponorogo', type: 'IAIN', city: 'Ponorogo', province: 'Jawa Timur', region: 'Jawa', latitude: -7.8667, longitude: 111.4667 },
  { id: 35, name: 'UIN Maulana Malik Ibrahim', type: 'UIN', city: 'Malang', province: 'Jawa Timur', region: 'Jawa', latitude: -7.9797, longitude: 112.6304 },
  { id: 36, name: 'UIN Sunan Ampel', type: 'UIN', city: 'Surabaya', province: 'Jawa Timur', region: 'Jawa', latitude: -7.2575, longitude: 112.7521 },
  { id: 37, name: 'IAIN Jember', type: 'IAIN', city: 'Jember', province: 'Jawa Timur', region: 'Jawa', latitude: -8.1845, longitude: 113.6708 },
  { id: 38, name: 'IAIN Kediri', type: 'IAIN', city: 'Kediri', province: 'Jawa Timur', region: 'Jawa', latitude: -7.8167, longitude: 112.0167 },
  { id: 39, name: 'IAIN Madura', type: 'IAIN', city: 'Pamekasan', province: 'Jawa Timur', region: 'Jawa', latitude: -7.1583, longitude: 113.4667 },
  { id: 40, name: 'IAIN Tulungagung', type: 'IAIN', city: 'Tulungagung', province: 'Jawa Timur', region: 'Jawa', latitude: -8.0653, longitude: 111.9028 },

  // KALIMANTAN
  { id: 41, name: 'IAIN Pontianak', type: 'IAIN', city: 'Pontianak', province: 'Kalimantan Barat', region: 'Kalimantan', latitude: -0.0263, longitude: 109.3425 },
  { id: 42, name: 'IAIN Palangka Raya', type: 'IAIN', city: 'Palangka Raya', province: 'Kalimantan Tengah', region: 'Kalimantan', latitude: -2.2161, longitude: 113.9135 },
  { id: 43, name: 'UIN Antasari', type: 'UIN', city: 'Banjarmasin', province: 'Kalimantan Selatan', region: 'Kalimantan', latitude: -3.3194, longitude: 114.5908 },
  { id: 44, name: 'IAIN Samarinda', type: 'IAIN', city: 'Samarinda', province: 'Kalimantan Timur', region: 'Kalimantan', latitude: -0.5022, longitude: 117.1536 },

  // SULAWESI
  { id: 45, name: 'UIN Alauddin', type: 'UIN', city: 'Makassar', province: 'Sulawesi Selatan', region: 'Sulawesi', latitude: -5.1477, longitude: 119.4327 },
  { id: 46, name: 'IAIN Bone', type: 'IAIN', city: 'Watampone', province: 'Sulawesi Selatan', region: 'Sulawesi', latitude: -4.5333, longitude: 120.3333 },
  { id: 47, name: 'IAIN Palopo', type: 'IAIN', city: 'Palopo', province: 'Sulawesi Selatan', region: 'Sulawesi', latitude: -3.0000, longitude: 120.2000 },
  { id: 48, name: 'IAIN Parepare', type: 'IAIN', city: 'Parepare', province: 'Sulawesi Selatan', region: 'Sulawesi', latitude: -4.0167, longitude: 119.6333 },
  { id: 49, name: 'UIN Sultan Amai', type: 'UIN', city: 'Gorontalo', province: 'Gorontalo', region: 'Sulawesi', latitude: 0.5333, longitude: 123.0667 },
  { id: 50, name: 'IAIN Manado', type: 'IAIN', city: 'Manado', province: 'Sulawesi Utara', region: 'Sulawesi', latitude: 1.4748, longitude: 124.8421 },
  { id: 51, name: 'IAIN Datokrama', type: 'IAIN', city: 'Palu', province: 'Sulawesi Tengah', region: 'Sulawesi', latitude: -0.8917, longitude: 119.8707 },
  { id: 52, name: 'STAIN Majene', type: 'STAIN', city: 'Majene', province: 'Sulawesi Barat', region: 'Sulawesi', latitude: -3.5400, longitude: 118.9700 },
  { id: 53, name: 'IAIN Sultan Qaimuddin', type: 'IAIN', city: 'Kendari', province: 'Sulawesi Tenggara', region: 'Sulawesi', latitude: -3.9985, longitude: 122.5127 },

  // BALI & NUSA TENGGARA
  { id: 54, name: 'UIN Mataram', type: 'UIN', city: 'Mataram', province: 'Nusa Tenggara Barat', region: 'Bali & Nusa Tenggara', latitude: -8.5833, longitude: 116.1167 },

  // MALUKU
  { id: 55, name: 'IAIN Ambon', type: 'IAIN', city: 'Ambon', province: 'Maluku', region: 'Maluku', latitude: -3.6954, longitude: 128.1814 },
  { id: 56, name: 'IAIN Ternate', type: 'IAIN', city: 'Ternate', province: 'Maluku Utara', region: 'Maluku', latitude: 0.7833, longitude: 127.3667 },

  // PAPUA
  { id: 57, name: 'IAIN Fattahul Muluk', type: 'IAIN', city: 'Jayapura', province: 'Papua', region: 'Papua', latitude: -2.5916, longitude: 140.6690 },
  { id: 58, name: 'IAIN Sorong', type: 'IAIN', city: 'Sorong', province: 'Papua Barat', region: 'Papua', latitude: -0.8833, longitude: 131.2500 },
];

export const REGIONS = ['Sumatera', 'Jawa', 'Kalimantan', 'Sulawesi', 'Bali & Nusa Tenggara', 'Maluku', 'Papua'] as const;
export const TYPES = ['UIN', 'IAIN', 'STAIN'] as const;
