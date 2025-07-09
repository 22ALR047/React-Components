import React from 'react'

function Search({ value, onChange, placeholder = "Search meals..." }) {
  return (
    <label htmlFor="Search" className="block w-full max-w-md mx-auto my-8">
      <span className="text-sm font-medium text-blue-700"> Search </span>
      <div className="relative bg-white rounded shadow-md">
        <input
          type="text"
          id="Search"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="mt-0.5 w-full rounded border-blue-400 bg-blue-100 text-blue-900 shadow-sm sm:text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
        />
        <span className="absolute inset-y-0 right-2 grid w-8 place-content-center">
          <button
            type="button"
            aria-label="Submit"
            className="rounded-full p-1.5 text-blue-700 transition-colors hover:bg-blue-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </span>
      </div>
    </label>
  )
}

export default Search
