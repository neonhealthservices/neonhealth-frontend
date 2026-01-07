import Image from 'next/image';

export default function AboutSection() {
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