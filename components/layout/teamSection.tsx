import Image from 'next/image';
import Link from 'next/link';
import { getTeamMembers } from '@/lib/team';

type TeamSectionProps = {
  detailed?: boolean;
  showHeader?: boolean;
  limit?: number;
};

export default async function TeamSection({ detailed = false, showHeader = true, limit }: TeamSectionProps) {
  let teamMembers = await getTeamMembers();
  const totalCount = teamMembers.length;

  if (limit) {
    teamMembers = teamMembers.slice(0, limit);
  }

  return (
    <section className="w-full bg-[#f5faf9] max-sm:pt-14 py-20 px-4 sm:px-6 lg:px-8" id="team">
      <div className="max-w-7xl mx-auto">
        {showHeader && (
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#1a7f7a]">Our Team</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#0a4d4a] leading-tight tracking-tight">
              Exceptional Care, Led by Specialists
            </h2>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Meet the clinical experts behind Neon Health Services. We combine advanced diagnostic expertise with compassionate, patient-first care.
            </p>
          </div>
        )}

        <div className="space-y-8 md:space-y-12">
          {teamMembers.map((member, index) => {
            const isEven = index % 2 === 0;
            return (
              <article
                key={`${member.name}-${member.role}`}
                className={`grid grid-cols-1 gap-8 md:gap-16 items-center transition-all duration-500 group ${isEven ? 'md:grid-cols-[300px_1fr]' : 'md:grid-cols-[1fr_300px]'
                  }`}
              >
                {/* Image Panel */}
                <div className={`relative h-[380px] w-full max-w-[300px] mx-auto rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-br from-teal-50 to-emerald-50/40 border border-teal-100/50 shadow-sm ${!isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <Image
                    src={member.image}
                    alt={member.imageAlt}
                    fill
                    className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-950/5 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content Panel */}
                <div className={`flex flex-col justify-center ${!isEven ? 'md:order-1' : 'md:order-2'}`}>
                  {/* Header Group (ensure name is always above role) */}
                  <div className="space-y-2">
                    <h3 className="order-1 text-3xl font-black text-[#0a4d4a] leading-tight tracking-tight group-hover:text-teal-700 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <span className="order-2 text-sm font-black uppercase tracking-[0.2em] text-[#1a7f7a] block">
                      {member.role}
                    </span>
                  </div>

                  {/* Soft Smart Divider */}
                  <div className="w-16 h-[2px] bg-teal-100 rounded-full my-6 group-hover:w-32 group-hover:bg-teal-400 transition-all duration-500 ease-out" />

                  {/* Bio Group */}
                  <p className="text-gray-700 font-semibold leading-relaxed text-lg">
                    {member.fullBio}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {limit && totalCount > limit && (
          <div className="mt-16 flex justify-center">
            <Link href="/team">
              <button
                className="px-8 py-4 text-white text-xs font-black uppercase tracking-widest rounded-xl shadow-lg hover:shadow-teal-500/20 hover:scale-105 transition-all duration-300 active:scale-95 cursor-pointer"
                style={{ backgroundColor: '#1a7f7a' }}
              >
                View All Team Members
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
