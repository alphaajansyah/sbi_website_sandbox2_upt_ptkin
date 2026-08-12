import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://upt-bahasa-ptkin-d501822.public.builtwithrocket.new"),
  title: "Program Penguatan Kelembagaan UPT Bahasa PTKIN | Briton English Education",
  description: "Program pengembangan dan pendampingan UPT Pusat Bahasa PTKIN oleh Briton English Education, Cambridge English Authorised Exam Centre, untuk memperkuat layanan Bahasa Inggris, kompetensi SDM, tata kelola, serta akses terhadap standar dan kualifikasi internasional.",
  openGraph: {
    title: "Program Penguatan Kelembagaan UPT Bahasa PTKIN",
    description: "Membangun UPT Pusat Bahasa PTKIN yang profesional, mandiri, dan berdaya saing melalui pengembangan layanan, SDM, tata kelola, dan kemitraan internasional.",
    type: 'website',
    url: "https://upt-bahasa-ptkin-d501822.public.builtwithrocket.new",
    siteName: "Program Penguatan Kelembagaan UPT Bahasa PTKIN — Briton English Education",
    locale: "id_ID",
    images: [
      {
        url: '/assets/images/favicon_image_upt_ptkin-1785421613400.png',
        width: 1200,
        height: 630,
        alt: 'Program Penguatan Kelembagaan UPT Bahasa PTKIN — Briton English Education',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Program Penguatan Kelembagaan UPT Bahasa PTKIN",
    description: "Membangun UPT Pusat Bahasa PTKIN yang profesional, mandiri, dan berdaya saing melalui pengembangan layanan, SDM, tata kelola, dan kemitraan internasional.",
    images: ['/assets/images/favicon_image_upt_ptkin-1785421613400.png'],
  },
  icons: {
    icon: [
      { url: '/assets/images/favicon_image_upt_ptkin-1785421613400.png', type: 'image/png' }
    ],
    apple: [
      { url: '/assets/images/favicon_image_upt_ptkin-1785421613400.png', type: 'image/png' }
    ],
  },
  alternates: {
    canonical: 'https://upt-bahasa-ptkin-d501822.public.builtwithrocket.new',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://campusinqu1583.builtwithrocket.new/#organization',
      name: 'Briton English Education',
      description: 'Cambridge English Authorised Exam Centre ID003 yang mengembangkan dan mengelola Program Sekolah Berbahasa Inggris (SBI).',
      url: 'https://campusinqu1583.builtwithrocket.new',
    },
    {
      '@type': 'EducationalOccupationalProgram',
      '@id': 'https://campusinqu1583.builtwithrocket.new/#program',
      name: 'Program Sekolah Berbahasa Inggris (SBI)',
      description: 'Program pengembangan mutu pembelajaran Bahasa Inggris yang menghubungkan pengembangan kompetensi guru, kualifikasi internasional, implementasi pembelajaran, pendampingan profesional, pengembangan pemimpin instruksional daerah, dan penjaminan mutu dalam satu sistem pengembangan yang berkelanjutan.',
      provider: {
        '@id': 'https://campusinqu1583.builtwithrocket.new/#organization',
      },
      educationalProgramMode: 'blended',
      inLanguage: 'id',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
</head>
      <body>{children}</body>
    </html>
  );
}