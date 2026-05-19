import Footer from '@/components/layout/footer';
import TeamSection from '@/components/layout/teamSection';
import Navbar from '@/components/ui/navbar';
import Image from 'next/image';

export default function TeamPage() {
  return (
    <div className="bg-white">
      <Navbar />

      <div className="relative h-[560px] md:h-[640px] w-full overflow-hidden flex items-center">
        <Image
          src="/images/about-hero.jpg"
          alt="Neon Health team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-emerald-950/75" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-20">
          <div className="max-w-4xl space-y-7 lg:pt-10">
            <p className="text-sm md:text-base text-teal-200 font-bold uppercase tracking-[0.35em]">Meet The Team</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white leading-tight tracking-tight">
              The People Behind Neon
            </h1>
            <p className="text-lg md:text-xl text-emerald-50 leading-relaxed font-medium max-w-3xl">
              Our specialists, nurses, and care coordinators work together to deliver precise diagnosis,
              compassionate support, and world-class treatment experiences.
            </p>
          </div>
        </div>
      </div>

      <TeamSection detailed showHeader={false} />
      <Footer />
    </div>
  );
}
