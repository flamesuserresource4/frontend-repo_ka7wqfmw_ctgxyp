import { Film, Star, Search, Users } from 'lucide-react';

const features = [
  {
    icon: Film,
    title: 'Vast Library',
    desc: 'From box-office hits to indie masterpieces — all in one place.'
  },
  {
    icon: Search,
    title: 'Smart Discovery',
    desc: 'Find your next watch with categories, moods, and curated lists.'
  },
  {
    icon: Star,
    title: 'Ratings & Reviews',
    desc: 'See what’s trending and what fans really think before you watch.'
  },
  {
    icon: Users,
    title: 'Social Sharing',
    desc: 'Share favorites with friends across your favorite platforms.'
  }
];

export default function Features() {
  return (
    <section className="relative bg-gray-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Features that make movie nights better</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          Everything you need to explore, track, and share the films you love.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
