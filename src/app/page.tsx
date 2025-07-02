'use client';

import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    try {
      const res = await fetch('/api/login');
      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      setMessage('Failed to fetch message.');
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>This is my home page</div>

      <button
        onClick={fetchMessage}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Call Backend
      </button>

      {message && <p className="text-lg text-green-600">{message}</p>}
    </div>
  );
}
