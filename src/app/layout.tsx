import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mbi-buftf85.public.builtwithrocket.new"),
  title: "Madrasah Berbahasa Inggris (MBI) | Cambridge English for Kementerian Agama RI",
  description: "Program nasional Kementerian Agama RI untuk meningkatkan kompetensi guru Bahasa Inggris madrasah melalui pelatihan berbasis Cambridge, pengembangan Master Trainer nasional, dan sistem pembelajaran berstandar internasional yang berkelanjutan.",
  openGraph: {
    title: "Madrasah Berbahasa Inggris (MBI) | Cambridge English for Kementerian Agama RI",
    description: "Program nasional Kementerian Agama RI untuk meningkatkan kompetensi guru Bahasa Inggris madrasah melalui pelatihan berbasis Cambridge, pengembangan Master Trainer nasional, dan sistem pembelajaran berstandar internasional yang berkelanjutan.",
    type: 'website',
    url: "https://mbi-buftf85.public.builtwithrocket.new",
    siteName: "Madrasah Berbahasa Inggris (MBI)",
    locale: "id_ID",
    images: [
      {
        url: '/assets/images/mbi_favicon-1786659617394.png',
        width: 1200,
        height: 630,
        alt: 'Madrasah Berbahasa Inggris (MBI) — Program Cambridge English Kementerian Agama RI',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Madrasah Berbahasa Inggris (MBI) | Cambridge English for Kementerian Agama RI",
    description: "Program nasional Kementerian Agama RI untuk meningkatkan kompetensi guru Bahasa Inggris madrasah melalui pelatihan berbasis Cambridge, pengembangan Master Trainer nasional, dan sistem pembelajaran berstandar internasional yang berkelanjutan.",
    images: ['/assets/images/mbi_favicon-1786659617394.png'],
  },
  icons: {
    icon: [
      { url: '/assets/images/mbi_favicon-1786659617394.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/images/mbi_favicon-1786659617394.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/images/mbi_favicon-1786659617394.png', sizes: '48x48', type: 'image/png' },
      { url: '/assets/images/mbi_favicon-1786659617394.png', sizes: '64x64', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/images/mbi_favicon-1786659617394.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/assets/images/mbi_favicon-1786659617394.png' },
    ],
  },
  alternates: {
    canonical: 'https://mbi-buftf85.public.builtwithrocket.new',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://mbi-buftf85.public.builtwithrocket.new/#organization',
      name: 'Madrasah Berbahasa Inggris (MBI)',
      description: 'Program nasional Kementerian Agama RI untuk meningkatkan kompetensi guru Bahasa Inggris madrasah melalui pelatihan berbasis Cambridge dan pengembangan Master Trainer nasional.',
      url: 'https://mbi-buftf85.public.builtwithrocket.new',
    },
    {
      '@type': 'EducationalOccupationalProgram',
      '@id': 'https://mbi-buftf85.public.builtwithrocket.new/#program',
      name: 'Madrasah Berbahasa Inggris (MBI)',
      description: 'Program nasional Kementerian Agama RI untuk meningkatkan kompetensi guru Bahasa Inggris madrasah melalui pelatihan berbasis Cambridge, pengembangan Master Trainer nasional, dan sistem pembelajaran berstandar internasional yang berkelanjutan.',
      provider: {
        '@id': 'https://mbi-buftf85.public.builtwithrocket.new/#organization',
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

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fsbiwebsit5429back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.20" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></head>
      <body>{children}</body>
    </html>
  );
}