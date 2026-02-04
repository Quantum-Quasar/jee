import Link from 'next/link';

export default function Home() {
  // We generate the years and shifts dynamically to keep the code clean
  const years = [21, 22, 23, 24, 25, 26, 27, 28];
  const shifts = ['1st', '2nd'];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 p-6 md:p-12">
      <main className="max-w-6xl mx-auto">
        
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold text-white tracking-tight mb-2">
            JEE <span className="text-blue-500">Mains</span> Mock Test
          </h1>
          <p className="text-gray-500 text-lg">Select a session to launch the exam simulator.</p>
        </header>

        {/* Subject Wise Selection */}
        <section className="mb-16">
          <h2 className="text-xs uppercase tracking-[0.2em] text-gray-600 font-bold mb-6">Subject Wise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Chemistry', 'Physics', 'Maths'].map((subject) => (
              <Link 
                key={subject}
                href={`/${subject.toLowerCase()}`}
                className="group bg-[#161616] border border-white/5 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-medium group-hover:text-white transition-colors">{subject}</h3>
                <p className="text-sm text-gray-500 mt-1">Full Syllabus Mock</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Shift Selection */}
        <section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-gray-600 font-bold mb-6">Previous Year Shifts (2021 - 2028)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {years.map((year) => 
              shifts.map((shift) => {
                const id = `${year}-${shift}`;
                return (
                  <Link
                    key={id}
                    href={`./${id}`} // Redirects to folder/page.tsx
                    className="bg-[#161616] border border-white/5 py-4 rounded-xl text-center text-sm font-medium hover:bg-white hover:text-black transition-all duration-200"
                  >
                    {year} • {shift} Shift
                  </Link>
                );
              })
            )}
          </div>
        </section>

      </main>
    </div>
  );
}
