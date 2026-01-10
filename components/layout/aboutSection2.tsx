import Image from 'next/image';

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
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="relative h-128 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/heart2.png"
              alt="Neon Heart Foundation - Cardiovascular Care"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">Neon Heart Foundation</h2>

            <p className="text-gray-700 text-[0.95em] leading-relaxed mb-4">
              We are honoured to introduce the <span className="font-semibold">NEON HEART FOUNDATION</span>, a non-governmental, nonprofit organization, launched {getFoundationAge()} ago, and dedicated to improving cardiovascular health and saving lives through education, prevention, and access to care.
            </p>

            <p className="text-gray-700 text-[0.95em] leading-relaxed mb-4">
              Neon Heart Foundation is focused on Pregnancy-induced cardiomyopathy, otherwise called <span className="font-semibold">Peripartum Cardiomyopathy (PPCM)</span>. Since its inception, we have been able to provide <span className="font-semibold">free Echocardiography and ECG</span> for PPCM patients.
            </p>

            <h3 className="text-2xl font-bold mb-3 text-gray-900">Why Peripartum Cardiomyopathy?</h3>
            <div className="space-y-3 text-gray-700 text-[0.95em] leading-relaxed">
              <p>
                PPCM is the most common heart disease of pregnancy and a leading cause of non-obstetric maternal mortality. It is also a significant contributor to neonatal mortality. PPCM is most common in sub-Saharan Africa, with Nigeria having the highest numbers.
              </p>
              <p>
                Awareness of PPCM is very crucial because early detection and treatment can significantly improve outcomes.
              </p>
              <p className="font-semibold">
                PPCM is a life-threatening but potentially reversible condition.
              </p>
            </div>
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="bg-teal-50 rounded-3xl p-8 border border-teal-100">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to reduce the scourge of peripartum cardiomyopathy through awareness campaigns, screenings, and support for patients and families. With PPCM being one of the leading causes of maternal mortality in Nigeria, we believe urgent action is needed to empower communities with knowledge and resources. Our mission also encompasses our ongoing research in this field.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-blue-100 rounded-3xl p-8 border border-blue-200">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              Our vision is a future Nigeria where PPCM is detected early, properly treated, and possibly cured, ensuring nationwide reduction in maternal and neonatal morbidity and mortality. Our vision also entails the construction of an ultra-modern Cardiac Centre, featuring a Cardiac Catheterization Lab and a Cardiac Intensive Care Unit, specifically designed for the care of individuals with PPCM who may require device therapy or cardiac surgery. We also hope to conduct some clinical drug trials in the near future, under the proper guidance of our nation's regulatory bodies.
            </p>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-red-50 rounded-3xl p-8 border border-red-100">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Get Involved</h2>
          <p className="text-gray-700 text-[0.95em] leading-relaxed mb-6">
            You can be a part of us by <span className="font-semibold">volunteering</span> or <span className="font-semibold">contributing</span> to this course.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bank Details */}
            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Neon Heart Foundation</h3>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-semibold">Bank:</span> Taj Bank</p>
                <p><span className="font-semibold">Account Number:</span> 0013108411</p>
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">For Inquiries</h3>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-semibold">Email:</span> <a href="mailto:neonheartfoundation@gmail.com" className="text-blue-600 hover:text-blue-800 underline">neonheartfoundation@gmail.com</a></p>
                <p><span className="font-semibold">Phone:</span> <a href="tel:+2347078942676" className="text-blue-600 hover:text-blue-800 underline">+2347078942676</a></p>
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
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="relative h-128 rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/images/hospital-hall.jpg"
            alt="Modern hospital corridor with medical beds"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div>
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-gray-700 text-[0.95em] leading-relaxed">
            Neon Health Services is a cardiology-based specialist hospital with a strong focus on the diagnosis, treatment, and management of cardiovascular, vascular, and metabolic disorders. We are committed to delivering excellent, patient-centred care through integrity, compassion, and teamwork. Our hospital is supported by a multidisciplinary team of 100% specialist consultants who work collaboratively across departments to ensure accurate diagnosis, effective treatment, and improved patient outcomes. With adequate investigative capacity and access to advanced medical technology, we are well positioned to provide comprehensive cardiovascular care, including logistics for interventional procedures such as cardiac stenting and pacing. Beyond cardiology, Neon Health Services offers specialist care across a range of medical disciplines, including Endocrinology, Neurology, Paediatrics, Obstetrics and Gynaecology, General Surgery, Urology, Hematology, Dermatology, and Pulmonology. This integrated approach allows us to address complex health needs while maintaining continuity of care. At Neon Health Services, our patients are at the centre of everything we do. We are driven by a commitment to accessibility, quality, and continuous improvement, with the goal of becoming a leading centre for cardiovascular excellence recognized for innovation, research, and best patient outcomes in our region.
          </p>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Mission */}
        <div className="bg-teal-50 rounded-3xl p-8  border border-teal-100">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To provide excellent, patient-centred cardiovascular care with integrity, compassion, and teamwork, ensuring accessibility and quality in all services.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-blue-100 rounded-3xl p-8 border border-blue-200">
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
             To be the leading centre for cardiovascular excellence in our region, recognized for innovation, research, and best patient outcomes.
          </p>
        </div>
      </div>
    </div>
  );
}