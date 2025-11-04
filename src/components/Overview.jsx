import { Play, Send } from 'lucide-react';

const TELEGRAM_URL = import.meta.env.VITE_TELEGRAM_URL || 'https://t.me/yourchannel';

export default function Overview() {
  return (
    <section className="relative bg-gradient-to-b from-gray-950 to-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">All your movies, beautifully organized</h2>
            <p className="mt-4 text-white/70">
              Browse collections, follow trending charts, and keep track of your watchlist. Designed for speed and simplicity,
              the experience puts films first with rich visuals and helpful context.
            </p>
            <ul className="mt-6 space-y-2 text-white/80">
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Curated lists by genre, mood, and era</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-sky-400" /> Detailed pages with cast, trailers, and similar picks</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-violet-400" /> Seamless sharing to social platforms</li>
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="flex h-full items-center justify-center text-white/80">
                <Play className="mr-2 h-6 w-6" />
                Preview coming soon
              </div>
            </div>
            <div className="pointer-events-none absolute inset-x-10 -bottom-6 h-24 rounded-full bg-gradient-to-r from-emerald-500/20 via-sky-500/20 to-violet-500/20 blur-2xl" />
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <div className="mx-auto max-w-2xl">
            <h3 className="text-2xl font-semibold">Join us on Telegram</h3>
            <p className="mt-2 text-white/70">Be the first to know about fresh drops, curated lists, giveaways, and more.</p>
            <div className="mt-6">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 font-semibold text-gray-900 shadow-lg shadow-sky-400/30 transition hover:translate-y-[-1px] hover:bg-sky-300"
              >
                <Send className="mr-2 h-4 w-4" /> Join the channel
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
