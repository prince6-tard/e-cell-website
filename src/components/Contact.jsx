import React from 'react'
import instagramIcon from '../assets/instagram-svgrepo-com.svg'
import linkedInIcon from '../assets/linkedin-icon-svgrepo-com.svg'

const Contact = () => {
  const handleSubscribe = (e) => {
    e.preventDefault()
    // Hook up your subscription logic here (API call / form submit)
  }

  return (
    <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Subscribe */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-[#8b8dff] mb-3">Talk to E-Cell</h2>
          <p className="text-white/80 mb-8">Contact to us for sponsers and ur startups</p>

          <form onSubmit={handleSubscribe} className="flex items-center gap-4 mb-10">
            <input
              type="email"
              required
              placeholder="Enter your mail"
              className="flex-1 bg-transparent border-b border-white/40 focus:border-white outline-none text-white placeholder-white/50 py-3"
            />
            <button
              href="mailto:your-email@example.com"
              className="px-5 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
            >
              Talk
            </button>
          </form>
 vc
          <div className="flex items-center gap-8">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="w-12 h-12 grid place-items-center rounded-xl border border-white/20 hover:bg-white/10 transition">
              <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="w-12 h-12 grid place-items-center rounded-xl border border-white/20 hover:bg-white/10 transition">
              <img src={linkedInIcon} alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="w-12 h-12 grid place-items-center rounded-xl border border-white/20 hover:bg-white/10 transition">
              {/* Inline YouTube icon */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
                <path d="M23.5 6.2a4.6 4.6 0 0 0-3.2-3.3C18.4 2.3 12 2.3 12 2.3s-6.4 0-8.3.6A4.6 4.6 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a4.6 4.6 0 0 0 3.2 3.3c1.9.6 8.3.6 8.3.6s6.4 0 8.3-.6a4.6 4.6 0 0 0 3.2-3.3c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.5V8.5L15.8 12l-6.2 3.5Z"/>
              </svg>
            </a>
          </div>
        </section>

        {/* Right: Contact & Map */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-white/80 mb-4">
            I.T.S Engineering college, Greator Noida, Delhi NCR, Uttar Pradesh, India,
            PIN 201310
          </p>

          <div className="rounded-xl overflow-hidden border border-white/10 mb-6">
            <iframe
            
              title="I.T.S Engineering College"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28057.103577437898!2d77.48648959999998!3d28.475392000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea0bb627ba3f%3A0x98ceba75b8e54979!2sITS%20Engineering%20College!5e0!3m2!1sen!2sin!4v1758143958210!5m2!1sen!2sin" 
              width="100%"
              height="260"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p className="text-white">
            Mail us at :-{' '}
            <a href="mailto:ecell@its.edu.in" className="text-[#8b8dff] hover:underline">ecell@its.edu.in</a>
          </p>
        </section>
      </div>
    </div>
  )
}

export default Contact