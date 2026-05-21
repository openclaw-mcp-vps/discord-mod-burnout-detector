export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Community Management
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Detect Moderator Burnout<br />
          <span className="text-[#58a6ff]">Before It Happens</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your Discord server and get real-time health scores for every moderator. Spot burnout signals early through activity patterns, response times, and sentiment analysis — then act before you lose your best people.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $19 / month
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card required to try.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {['Burnout Health Scores','Early-Warning Alerts','Intervention Suggestions','Discord OAuth','Sentiment Analysis','Activity Heatmaps'].map(f => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">per month · billed monthly</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited moderators tracked',
              'Real-time burnout health scores',
              'Automated early-warning alerts',
              'Personalised intervention suggestions',
              'Activity & sentiment heatmaps',
              'Discord OAuth — 1-click connect',
              'Priority email support'
            ].map(item => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does it connect to my Discord server?</h3>
            <p className="text-[#8b949e] text-sm">You authenticate via Discord OAuth and grant read-only access to your server. We never post messages or modify anything — we only read activity metadata to compute health scores.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What signals indicate burnout?</h3>
            <p className="text-[#8b949e] text-sm">We track declining response rates, increasing response latency, negative sentiment drift in mod messages, reduced active hours, and sudden drops in engagement — all weighted into a single health score per moderator.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel at any time?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel from your billing portal with one click and you will not be charged again. Your data is deleted within 30 days of cancellation.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Discord Mod Burnout Detector. All rights reserved.
      </footer>
    </main>
  )
}
