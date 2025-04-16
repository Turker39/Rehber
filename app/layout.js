export const metadata = {
  title: 'English Flashcards',
  description: 'Practice English questions and answers',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
