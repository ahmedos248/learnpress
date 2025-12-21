import React from 'react'

const RatingStats = () => {
    const ratingStats = [
        { stars: 5, percent: 90 },
        { stars: 4, percent: 5 },
        { stars: 3, percent: 2 },
        { stars: 2, percent: 2 },
        { stars: 1, percent: 1 },
    ];
    return (
        <div className="mt-4 space-y-2 ">
            {ratingStats.map((item) => (
                <div key={item.stars} className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                        {[...Array(item.stars)].map((_, i) => (
                            <i key={i} className="fas fa-star text-xs"></i>
                        ))}
                        {[...Array(5 - item.stars)].map((_, i) => (
                            <i key={i} className="far fa-star text-xs"></i>
                        ))}
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded">
                        <div
                            className="bg-yellow-400 h-2 rounded"
                            style={{ width: `${item.percent}%` }}
                        ></div>
                    </div>
                    <span className="text-sm text-gray-500">{item.percent}%</span>
                </div>
            ))}
        </div>
    )
}

export default RatingStats
