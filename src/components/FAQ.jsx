import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const items = [
  {
    q: 'What is this website about?',
    a: 'A vibrant, social-first platform to explore movies, track your favorites, and share recommendations with friends.'
  },
  {
    q: 'Is it free to use?',
    a: 'Yes, browsing, searching, and sharing are free. Additional perks may be introduced later.'
  },
  {
    q: 'Can I share movies on social media?',
    a: 'Absolutely. You can share directly to platforms like X/Twitter, Facebook, LinkedIn, and Telegram.'
  },
  {
    q: 'How do I join the Telegram channel?',
    a: 'Use the Join us on Telegram section above to hop into the channel and get updates.'
  }
];

function FAQItem({ q, a, open, onToggle }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5">
      <button onClick={onToggle} className="flex w-full items-center justify-between p-4 text-left">
        <span className="text-base font-medium text-white">{q}</span>
        <ChevronDown className={`h-5 w-5 text-white/70 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-white/70">{a}</div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-black py-20 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Frequently asked questions</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          Can’t find what you’re looking for? Reach out on Telegram and we’ll help.
        </p>

        <div className="mt-10 space-y-3">
          {items.map((it, idx) => (
            <FAQItem
              key={it.q}
              q={it.q}
              a={it.a}
              open={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
