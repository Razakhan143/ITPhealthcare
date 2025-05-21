// import React from 'react';

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="py-16 px-6 md:px-12 lg:px-24 text-center  text-[#C69749] bg-black/50 z-0"
//     >
//       <h2 className="text-3xl font-bold mb-6">About Us</h2>
//       <p className="max-w-3xl mx-auto text-lg text-[#C69749]/80">
//        At ITP, we are revolutionizing the healthcare industry through cutting-edge Electronic Health Records (EHR) solutions. Our mission is to streamline medical data management, enhance patient care, and empower healthcare providers with intelligent, secure, and efficient digital tools.

// As part of this vision, I, Raza Khan, a passionate AI enthusiast and Data Scientist, bring my expertise in Flask, Python, and Firebase integration to the forefront of healthcare innovation. With a strong foundation in UI/UX, machine learning, and backend development, I contribute to building smart systems that not only predict diseases but also support mental health assessments and personalized healthcare analytics.

// Backed by my academic journey at Mehran University Jamshoro, and my track record in competitive projects and data-driven applications, I am committed to transforming how patients and professionals interact with healthcare technologies. Together at ITP, we are building a future where healthcare is smarter, faster, and more accessible for all.
//       </p>
//     </section>
//   );
// };

// export default About;


import React from 'react';
import razaImage from '../../public/raza-khan.jpg';
const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 md:px-12 lg:px-24 text-[#C69749] bg-black/50 z-0"
    >
      <h2 className="text-3xl font-bold mb-10 text-center">About Us</h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
        {/* Developer Image Frame */}
        <div className="w-64 h-64 border-4 border-[#C69749] rounded-2xl overflow-hidden shadow-lg">
          <img
            // src={razaImage} // Replace with your actual image path
            src='\raza-khan.jpg' // Replace with your actual image path
            alt="Developer"
            className="w-full  object-cover"
          />
        </div>

        {/* Developer Details */}
        <div className="text-left max-w-xl">
          <p className="text-lg text-[#C69749]/80 leading-relaxed">
            At <strong>ITP</strong>, we are revolutionizing the healthcare industry through cutting-edge Electronic Health Records (EHR) solutions. Our mission is to streamline medical data management, enhance patient care, and empower healthcare providers with intelligent, secure, and efficient digital tools.
            <br /><br />
            I'm <strong>Raza Khan</strong>, a passionate AI enthusiast and Data Scientist with expertise in <strong>Flask, Python, ML/DL</strong>, and scalable backend systems. I specialize in building smart, responsive solutions that integrate <strong>machine learning</strong> with clean UI/UX design to serve modern healthcare needs.
            <br /><br />
            As a student of <strong>Mehran University Jamshoro</strong> and a competitive project contributor, I bring a unique blend of academic discipline and real-world impact. From disease prediction models to mental health analytics, I’m committed to transforming the way healthcare is delivered—making it smarter, faster, and more accessible for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
