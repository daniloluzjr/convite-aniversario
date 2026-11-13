import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ximena & Rafael - Nuestra Boda',
  description: 'Estás invitado. Abre el link para ver todos los detalles.',
  openGraph: {
    title: 'Ximena & Rafael - Nuestra Boda',
    description: 'Estás invitado. Abre el link para ver todos los detalles.',
    images: ['/event-media/11783198-09ae-480d-8bef-c620d2c8aaaa.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
