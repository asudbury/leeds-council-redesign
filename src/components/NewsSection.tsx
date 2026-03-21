const newsArticles = [
  {
    id: 1,
    emoji: '🌱',
    colorClass: 'bg-green-50',
    tag: 'Environment',
    title: 'Demo leads the UK in green energy investment',
    description:
      'Demo City Council has announced a record £200 million investment in solar and wind energy projects across the region, creating 1,200 new jobs.',
    date: '2026-03-15',
    dateDisplay: '15 March 2026',
  },
  {
    id: 2,
    emoji: '🚲',
    colorClass: 'bg-blue-50',
    tag: 'Transport',
    title: 'New cycle routes approved for city centre',
    description:
      'Twenty kilometres of protected cycle lanes will be built across the Demo city centre as part of the Active Travel Programme 2026.',
    date: '2026-03-10',
    dateDisplay: '10 March 2026',
  },
  {
    id: 3,
    emoji: '🤝',
    colorClass: 'bg-amber-50',
    tag: 'Community',
    title: 'Community grants of up to £10,000 now available',
    description:
      'Local organisations and community groups can now apply for grants of up to £10,000 to fund projects that improve life in Demo neighbourhoods.',
    date: '2026-03-05',
    dateDisplay: '5 March 2026',
  },
]

export default function NewsSection() {
  return (
    <section
      className="news-section py-16 lg:py-20"
      aria-labelledby="news-heading"
      id="news"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="news-heading"
            className="text-3xl lg:text-4xl font-bold mb-3"
          >
            Latest News
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay up to date with what&apos;s happening across Demo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsArticles.map(article => (
            <article key={article.id} className="news-card shadow-sm">
              <div
                className={`${article.colorClass} h-44 flex items-center justify-center text-6xl`}
                aria-hidden="true"
              >
                {article.emoji}
              </div>
              <div className="p-6">
                <span className="news-tag mb-3 inline-block">{article.tag}</span>
                <h3 className="text-lg font-bold mb-3 leading-snug">{article.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.description}</p>
                <time className="text-xs text-gray-500 font-medium" dateTime={article.date}>
                  {article.dateDisplay}
                </time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
