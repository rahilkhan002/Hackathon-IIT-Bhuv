import type { Metadata } from 'next';
import { JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';
import { BRAND } from '@/constants';
import {
  generateOrganizationSchema,
  generateSoftwareSchema,
  generateFAQSchema,
} from '@/data/structuredData';

// ---- Fonts ----
// Using Google Fonts as placeholders.
// Swap to next/font/local with competition-provided fonts by
// dropping files into src/assets/fonts/ and updating config.

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
});

// ---- Metadata ----

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: BRAND.description,
    metadataBase: new URL(BRAND.url),
    alternates: { canonical: '/' },
    robots: { index: true, follow: true },
    openGraph: {
      title: `${BRAND.name} — ${BRAND.tagline}`,
      description: BRAND.description,
      url: BRAND.url,
      siteName: BRAND.name,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${BRAND.name} — AI-powered data automation platform`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${BRAND.name} — ${BRAND.tagline}`,
      description: BRAND.description,
    },
    icons: { icon: '/favicon.ico' },
  };
}

// ---- JSON-LD Structured Data ----

function StructuredData() {
  const schemas = [
    generateOrganizationSchema(),
    generateSoftwareSchema(),
    generateFAQSchema(),
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

// ---- Root Layout ----

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
