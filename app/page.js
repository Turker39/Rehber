'use client';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Volume2 } from 'lucide-react';
import './styles/globals.css';

// Flashcard verilerini burada tanımlıyoruz
const flashcards = [
  {
    category: 'Pasaport Kontrolü',
    question: 'Why are you traveling? (Seyahat amacınız nedir?)',
    answer: 'I am going to Bucharest for a citizenship application.\n(Vatandaşlık başvurusu için Bükreş’e gidiyorum.)',
    pronunciation: 'Ay em goin tu Bukarest for e sitizınşip epplikeyşın',
  },
  {
    category: 'Günlük Konuşmalar',
    question: 'Do you have a reservation? (Rezervasyonunuz var mı?)',
    answer: 'Yes, I have a hotel reservation.\n(Evet, otel rezervasyonum var.)',
    pronunciation: 'Yes, ay hev e hôtel rezerveyşın',
  },
  {
    category: 'Restoran',
    question: 'Can I see the menu? (Menüyü görebilir miyim?)',
    answer: 'Can I see the menu, please?\n(Menüyü görebilir miyim?)',
    pronunciation: 'Ken ay sii dhi menyu pliiiz?',
  },
];

export default function Page() {
  const [index, setIndex] = useState(0);
  const current = flashcards[index];

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow text-center space-y-4">
      <div className="text-sm text-gray-500">{current.category}</div>
      <h2 className="font-bold text-lg">{current.question}</h2>
      <p className="text-green-700">{current.answer}</p>
      <p className="text-sm italic text-gray-600">Okunuşu: {current.pronunciation}</p>
      <div className="flex justify-center space-x-4">
        <ArrowLeft
          className="cursor-pointer"
          onClick={() => setIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length)}
        />
        <ArrowRight
          className="cursor-pointer"
          onClick={() => setIndex((prevIndex) => (prevIndex + 1) % flashcards.length)}
        />
        <Volume2 className="cursor-pointer" onClick={() => speak(current.answer)} />
      </div>
    </div>
  );
}
