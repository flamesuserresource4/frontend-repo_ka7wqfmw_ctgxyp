import { useMemo } from 'react';
import Spline from '@splinetool/react-spline';
import { Share2, Twitter, Facebook, Linkedin, Copy, Send, ArrowRight } from 'lucide-react';

const MAIN_SITE_URL = import.meta.env.VITE_MAIN_SITE_URL || 'https://example.com';

function openShare(url) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

export default function Hero() {
  const currentUrl = useMemo(() => window.location.href, []);
  const shareText = encodeURIComponent('Check out this vibrant movies website!');
  const encodedUrl = encodeURIComponent(currentUrl);

  const shares = [
    {
      name: 'Twitter',
      icon: Twitter,
      onClick: () => openShare(`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareText}`),
    },
    {
      name: 'Facebook',
      icon: Facebook,
      onClick: () => openShare(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`),
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      onClick: () => openShare(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`),
    },
    {
      name: 'Telegram',
      icon: Send,
      onClick: () => openShare(`https://t.me/share/url?url=${encodedUrl}&text=${shareText}`),
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      alert('Link copied to clipboard!');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 pb-16 text-center">
        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-wider text-white backdrop-blur">
          Movies • Social • Fun
        </span>
        <h1 className="mt-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">
          Your Gateway to the Ultimate Movies Universe
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Discover trending films, classics, and hidden gems. Share with friends, explore collections, and dive into a cinematic experience.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={MAIN_SITE_URL}
            className="group inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-lg shadow-black/10 transition hover:translate-y-[-1px] hover:shadow-black/20"
          >
            Visit Site
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-white backdrop-blur">
            <Share2 className="h-4 w-4 opacity-80" />
            <div className="mx-1 h-4 w-px bg-white/20" />
            {shares.map(({ name, icon: Icon, onClick }) => (
              <button
                key={name}
                onClick={onClick}
                className="rounded-full p-2 transition hover:bg-white/20"
                aria-label={`Share on ${name}`}
                title={`Share on ${name}`}
              >
                <Icon className="h-4 w-4" />
              </button>
            ))}
            <button
              onClick={handleCopy}
              className="rounded-full p-2 transition hover:bg-white/20"
              aria-label="Copy link"
              title="Copy link"
            >
              <Copy className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-gray-950 to-transparent" />
    </section>
  );
}
