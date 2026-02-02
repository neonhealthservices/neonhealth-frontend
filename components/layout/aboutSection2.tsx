import Image from 'next/image';
import { Activity, Shield, Star } from 'lucide-react';

interface AboutSectionProps {
  variant?: 'default' | 'foundation';
}

// Calculate time elapsed since foundation launch
function getFoundationAge(): string {
  const FOUNDATION_LAUNCH_DATE = new Date('2025-10-10');
  const now = new Date();

  const diffTime = Math.abs(now.getTime() - FOUNDATION_LAUNCH_DATE.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const months = Math.floor(diffDays / 30.44);
  const weeks = Math.floor(diffDays / 7);

  if (months > 0) {
    return months === 1 ? '1 month' : `${months} months`;
  }
  return weeks === 1 ? '1 week' : `${weeks} weeks`;
}

export default function AboutSection({ variant = 'default' }: AboutSectionProps) {
  if (variant === 'foundation') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-gray-800">
        {/* Neon Heart Foundation Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
            <Image
              src="/images/pregnant.jpg"
              alt="Neon Heart Foundation - Supporting Mothers"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-8">
            <div className="border-l-8 border-teal-600 pl-6">
              <h2 className="text-5xl font-black text-gray-900 mb-2 uppercase tracking-tight">Neon Heart Foundation</h2>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-light">
              <p>
                We are honoured to introduce the <span className="font-semibold text-teal-700">NEON HEART FOUNDATION</span>, a non-governmental, nonprofit organization dedicated to improving cardiovascular health and saving lives through education, prevention, and access to care.
              </p>
              <p>
                Neon Heart Foundation is focused on Pregnancy-induced cardiomyopathy, otherwise called <span className="font-semibold">Peripartum Cardiomyopathy (PPCM)</span>. Since its inception, we have been able to provide <span className="font-semibold">free Echocardiography and ECG</span> for PPCM patients.
              </p>
            </div>

            <div className="p-8 bg-teal-50 rounded-3xl border border-teal-100">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 uppercase">Why PPCM?</h3>
              <p className="text-gray-700 leading-relaxed font-light">
                PPCM is the most common heart disease of pregnancy and a leading cause of non-obstetric maternal mortality. Nigeria has some of the highest numbers in sub-Saharan Africa. Early detection and treatment can significantly improve outcomes.
                <span className="block mt-4 font-bold text-teal-800 italic">PPCM is a life-threatening but potentially reversible condition.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Mission */}
          <div className="bg-[#0a4d4a] text-white rounded-[2.5rem] p-12 shadow-2xl">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-widest text-teal-400">Neon Heart Foundation Mission</h2>
            <p className="text-xl font-light leading-relaxed">
              To reduce the scourge of peripartum cardiomyopathy through awareness campaigns, screenings, and support for patients and families. With PPCM being one of the leading causes of maternal mortality in Nigeria, we believe urgent action is needed to empower communities with knowledge and resources. Our mission also encompasses our ongoing research in this field.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-teal-700 text-white rounded-[2.5rem] p-12 shadow-2xl">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-widest text-teal-200">Neon Heart Foundation Vision</h2>
            <p className="text-lg font-light leading-relaxed space-y-4">
              Our vision is a future Nigeria where PPCM is detected early, properly treated, and possibly cured, ensuring nationwide reduction in maternal and neonatal morbidity and mortality.
              <br /><br />
              Our vision also entails the construction of an ultra-modern Cardiac Centre, featuring a Cardiac Catheterization Lab and a Cardiac Intensive Care Unit, specifically designed for the care of individuals with PPCM who may require device therapy or cardiac surgery.
              <br /><br />
              We also hope to conduct some clinical drug trials in the near future, under the proper guidance of our nation's regulatory bodies.
            </p>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-gray-900 rounded-[3rem] p-12 text-white border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -mr-48 -mt-48" />
          <h2 className="text-4xl font-black mb-8 uppercase tracking-tight relative z-10">Get Involved</h2>
          <p className="text-xl text-gray-300 font-light mb-12 relative z-10">
            You can be a part of us by <span className="font-bold text-teal-400">volunteering</span> or <span className="font-bold text-teal-400">contributing</span> to this course.
          </p>

          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            {/* Bank Details */}
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold mb-6 text-teal-400 uppercase tracking-widest">Neon Heart Foundation</h3>
              <div className="space-y-4 text-lg font-light">
                <p><span className="font-bold text-gray-400 uppercase text-sm block">Bank</span> Taj Bank</p>
                <p><span className="font-bold text-gray-400 uppercase text-sm block">Account Number</span> 0013108411</p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold mb-6 text-teal-400 uppercase tracking-widest">For Inquiries</h3>
              <div className="space-y-6 text-lg font-light">
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-gray-400 uppercase text-sm">Email</span>
                  <a href="mailto:neonheartfoundation@gmail.com" className="text-white hover:text-teal-400 transition-colors">neonheartfoundation@gmail.com</a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-gray-400 uppercase text-sm">Phone</span>
                  <a href="tel:+2347078942676" className="text-white hover:text-teal-400 transition-colors">+234 707 894 2676</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-gray-800">
      {/* About Us Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
          <Image
            src="/images/hospital-hall.jpg"
            alt="Modern hospital corridor"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-8">
          <div className="border-l-8 border-teal-600 pl-6">
            <h2 className="text-5xl font-black text-gray-900 mb-2 uppercase tracking-tight">About Neon</h2>
          </div>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-light">
            <p>
              Neon health services arose from a desire to meet the unique health needs of the public. Founded in 2020, we have since expanded to become the leading private specialist hospital in the state.
            </p>
            <p>
              We are revolutionizing private health care in Nigeria with sophisticated medical technology, ethical practice, and outstanding patient experience.
            </p>
          </div>
        </div>
      </div>

      {/* Advanced Care Quote Section */}
      <div className="bg-gradient-to-r from-[#0a4d4a] to-teal-800 rounded-[3rem] p-12 mb-24 text-white text-center shadow-2xl">
        <h3 className="text-3xl md:text-4xl font-black mb-6 italic">"Advanced Care. Trusted Professional. Exceptional Outcome."</h3>
        <p className="max-w-4xl mx-auto text-xl text-teal-50 font-light leading-relaxed mb-8">
          At Neon, our approach goes beyond only treatment. We focus on prevention education and long-term wellness.
          For patients who expect the very best, Neon offers the expertise, precision, and compassion found in the world’s leading medical centers, delivered with the comfort and convenience of being close to home.
        </p>
        <div className="h-1 w-24 bg-teal-400 mx-auto rounded-full" />
        <p className="mt-8 text-2xl font-bold text-teal-400 uppercase tracking-widest">
          We Believe Quality Healthcare Is Not a Privilege ---- It’s a Promise!
        </p>
      </div>

      <div className="mb-24 space-y-8 text-lg text-gray-700 leading-relaxed font-light max-w-5xl mx-auto">
        <p>
          We are committed to delivering excellent, patient-centred care through integrity, compassion, and teamwork. Our hospital is supported by a multidisciplinary team of 100% specialist consultants who work collaboratively across departments to ensure accurate diagnosis, effective treatment, and improved patient outcomes.
        </p>
      </div>

      {/* Mission, Vision, Quality of Care Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Mission */}
        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:border-teal-500/30 transition-all group">
          <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
            <Star className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black text-[#0a4d4a] mb-6 uppercase tracking-tight">Neon Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To provide accessible, world-class healthcare with a strong focus on cardiovascular excellence, driven by innovation, ethical medical practice, and compassionate, patient-focused care that improves lives.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:border-teal-500/30 transition-all group">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
            <Activity className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black text-[#0a4d4a] mb-6 uppercase tracking-tight">Neon Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To be a leading benchmark for private healthcare in Nigeria and Africa, distinguished by excellence in cardiology and by consistently setting new standards in quality, innovation, and patient experience in Nigeria.
          </p>
        </div>

        {/* Quality of Care */}
        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:border-teal-500/30 transition-all group">
          <div className="w-16 h-16 bg-teal-800 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
            <Shield className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black text-[#0a4d4a] mb-6 uppercase tracking-tight">Quality of Care</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            We follow strict international safety guidelines and comprehensive infection control measures to protect every patient. Each procedure is overseen by a dedicated safety team, ensuring your care is delivered with the highest level of confidence and trust.
          </p>
        </div>
      </div>
    </div>
  );
}