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
          <p className="text-gray-700 leading-relaxed">
            Neon Health Services is a cardiology-based specialist hospital with a strong 
            focus on the diagnosis, treatment, and management of cardiovascular, vascular, 
            and metabolic disorders. We are committed to delivering excellent, patient-centred 
            care through integrity, compassion, and teamwork. Our hospital is supported by a 
            multidisciplinary team of 100% specialist consultants who work collaboratively across 
            departments to ensure accurate diagnosis, effective treatment, and improved patient 
            outcomes. With adequate investigative capacity and access to advanced medical technology, 
            we are well positioned to provide comprehensive cardiovascular care, including logistics 
            for interventional procedures such as cardiac stenting and pacing. Beyond cardiology, 
            Neon Health Services offers specialist care across a range of medical disciplines, 
            including Endocrinology, Neurology, Paediatrics, Obstetrics and Gynaecology, General 
            Surgery, Urology, Hematology, Dermatology, and Pulmonology. This integrated approach 
            allows us to address complex health needs while maintaining continuity of care. At Neon 
            Health Services, our patients are at the centre of everything we do. We are driven by a 
            commitment to accessibility, quality, and continuous improvement, with the goal of becoming 
            a leading centre for cardiovascular excellence recognized for innovation, research, and 
            best patient outcomes in our region.
          </p>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Mission */}
        <div className="bg-teal-50 rounded-3xl p-8  border border-teal-100">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to reduce the scourge of peripartum cardiomyopathy through awareness campaigns, screenings, and support for patients and families. With PPCM being one of the leading causes of maternal mortality in Nigeria, we believe urgent action is needed to empower communities with knowledge and resources. Our mission also encompasses our ongoing research in this field.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-blue-100 rounded-3xl p-8 border border-blue-200">
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
           Our vision is a future Nigeria where Peripartum cardiomyopathy is detected early, properly treated, and possibly cured, ensuring nationwide reduction in maternal and neonatal morbidity and mortality. Our vision also entails the construction of an ultra-modern Cardiac Centre, featuring a Cardiac Catheterization Lab and a Cardiac Intensive Care Unit, specifically designed for the care of individuals with PPCM who may require device therapy or cardiac surgery. We also hope to conduct some clinical drug trials in the near future, under the proper guidance of our nation's regulatory bodies.
          </p>
        </div>
      </div>
    </div>
  );
}