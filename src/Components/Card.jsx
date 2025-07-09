import React from 'react'

function Card() {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-2xl bg-gray-800 flex flex-col my-8 mx-4 transition-transform hover:scale-105 hover:shadow-3xl">
      <img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" alt="Delicious Meal" />
      <div className="px-8 py-6">
        <div className="font-bold text-2xl mb-3 text-white">Grilled Chicken Salad</div>
        <p className="text-gray-300 text-lg">
          A healthy and tasty grilled chicken salad with fresh greens, cherry tomatoes, and a light vinaigrette dressing.
        </p>
      </div>
    </div>
  )
}

export default Card