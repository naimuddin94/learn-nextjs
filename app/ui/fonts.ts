import { Inter, Pacifico, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'] });
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
