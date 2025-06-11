import React from 'react'

function TopBar({blogs}) {
const [searchTerm, setSearchTerm] = React.useState('');
  const [filterYear, setFilterYear] = React.useState('');
  const [sortBy, setSortBy] = React.useState('');
  return (
    <>
    {/* Search, Filter and Sort Section */}
      <div className="animate-fade-in delay-0 max-w-[1200px] mx-auto mt-10 mb-4 lg:mb-8 px-4">
        {/* Title and Description */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Explore Our Blog</h2>
          <p className="text-gray-600 text-base md:text-lg">Browse articles, filter by year, and sort to find the latest insights and trends in AI and technology.
          </p>
            
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white shadow rounded-lg p-4">
          {/* Search */}
          <div className="w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search blogs..."
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary transition"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filter by Year */}
          <div className="w-full md:w-1/6">
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary transition"
              value={filterYear}
              onChange={e => setFilterYear(e.target.value)}
            >
              <option value="">All Years</option>
              {[...new Set(blogs.map(blog => new Date(blog.date).getFullYear()))].map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div className="w-full md:w-1/6">
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary transition"
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
            >
              <option value="date-desc">Newest</option>
              <option value="date-asc">Oldest</option>
              <option value="views-desc">Most Viewed</option>
              <option value="views-asc">Least Viewed</option>
            </select>
          </div>
        </div>
      </div>

    </>
  )
}

export default TopBar