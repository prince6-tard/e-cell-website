import React from 'react'

const TIMELINE_ITEMS = [
  {
    year: '2005',
    text:
      'The Entrepreneurship Cell was founded as part of the Innovation and Skill Development Committee (now E-Cell) in August 2010. The vision for E-Cell was formed after a survey revealed that launching startups was a preferred career path among students. E-Cell initially encouraged entrepreneurial ideas through the support of its incubation hub which began in 2011. It organized multiple seminars, workshops, expert talks, technical showcases and startup stories, along with idea pitch competitions. Thus, a fresh journey of innovation and growth took shape.'
  },
  {
    year: '2025',
    text: 
    'The biggest Hackathon I.T.S Engineering college has ever seen was TECHTRIX 2025 which was conducted and managed by E-CELL'
  }

];

const History = () => {
  return (
    <section className="relative mx-auto max-w-4xl px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl tracking-widest  text-[#FFCC00] font-extrabold">OUR HISTORY</h2>
      </div>

      {/* Vertical line */}
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-[#FFCC00]/70" />

        <ol className="space-y-12">
          {TIMELINE_ITEMS.map((item, index) => {
            const isLeft = index % 2 === 0; // alternate sides starting with left
            return (
              <li key={item.year} className="relative grid grid-cols-2 gap-6 md:gap-10 items-center">
                {/* Left column */}
                <div>
                  {isLeft && (
                    <div className="pr-6 md:pr-10">
                      <div className="rounded-lg border border-[#FFCC00]/60 bg-[#0E1628] p-4 shadow-sm">
                        <div className="mb-2 text-[25px] font-bold text-[#00BBA7] tracking-widest">{item.year}</div>
                        <p className="text-[12px] leading-5 text-white">{item.text}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Center dot */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="block h-3 w-3 rounded-full border-2 border-[#FFCC00] bg-[#FFCC00]" />
                </div>

                {/* Right column */}
                <div>
                  {!isLeft && (
                    <div className="pl-6 md:pl-10">
                      <div className="rounded-lg border border-[#FFCC00]/60 bg-[#0E1628] p-4 shadow-sm">
                        <div className="mb-2 text-[25px] font-bold text-[#00BBA7] tracking-widest">{item.year}</div>
                        <p className="text-[12px] leading-5 text-white">{item.text}</p>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  )
}

export default History