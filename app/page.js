'use client';
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import '../styles/globals.css';

const flashcards = [
  {
    category: 'Pasaport Kontrolü',
    question: 'Why are you traveling? (Seyahat amacınız nedir?)',
    answer: 'I am going to Bucharest for a citizenship application.\n(Vatandaşlık başvurusu için Bükreş’e gidiyorum.)',
    pronunciation: 'Ay em goin tu Bukarest for e sitizınşip epplikeyşın'
  },
  {
    category: 'Günlük Konuşmalar',
    question: 'Do you have a reservation? (Rezervasyonunuz var mı?)',
    answer: 'Yes, I have a hotel reservation.\n(Evet, otel rezervasyonum var.)',
    pronunciation: 'Yes, ay hev e hötel rezırveyşın'
  }
];

export default function Page() {
  const [index, setIndex] = useState(0);
  const current = flashcards[index];

  return (
    <main className='flex flex-col items-center justify-center min-h-screen p-4 gap-4'>
      <div className='w-full max-w-md border rounded-xl p-6 text-center shadow'>
        <h2 className='text-lg font-semibold mb-2'>{current.category}</h2>
        <p className='text-base mb-2'>❓ {current.question}</p>
        <p className='text-base mb-2'>💬 {current.answer}</p>
        <p className='text-sm italic text-gray-500'>📢 Okunuşu: {current.pronunciation}</p>
      </div>
      <div className='flex gap-4'>
        <button onClick={() => setIndex((index - 1 + flashcards.length) % flashcards.length)} className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300'>
          <ArrowLeft className='inline w-4 h-4 mr-2' /> Geri
        </button>
        <button onClick={() => setIndex((index + 1) % flashcards.length)} className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
          İleri <ArrowRight className='inline w-4 h-4 ml-2' />
        </button>
      </div>
    </main>
  );
}
