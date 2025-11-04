import Hero from './components/Hero';
import Features from './components/Features';
import Overview from './components/Overview';
import FAQ from './components/FAQ';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Features />
      <Overview />
      <FAQ />

      <footer className="border-t border-white/10 bg-black/60 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Movies Hub. All rights reserved.
      </footer>
    </div>
  );
}
