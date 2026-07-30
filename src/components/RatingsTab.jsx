import React from 'react';
import { Star } from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';
const ratingData = [
  { month: 'Jan', rating: 4.15 },
  { month: 'Feb', rating: 4.25 },
  { month: 'Mar', rating: 4.45 },
  { month: 'Apr', rating: 4.35 },
  { month: 'May', rating: 4.55 },
  { month: 'Jun', rating: 4.70 },
];

export default function RatingsTab() {
  const breakdown = [
    { stars: 5, percentage: 80, count: 164 },
    { stars: 4, percentage: 22, count: 47 },
    { stars: 3, percentage: 9, count: 18 },
    { stars: 2, percentage: 3, count: 5 },
    { stars: 1, percentage: 1, count: 2 },
  ];

  const reviews = [
    {
      id: 1,
      store: 'ABC Retail Store',
      date: 'Oct 10, 2025',
      rating: 5,
      comment: 'Excellent service and fast delivery. Products arrived in perfect condition.',
    },
    {
      id: 2,
      store: 'XYZ Market',
      date: 'Oct 8, 2025',
      rating: 4,
      comment: 'Good quality products. Delivery was a bit delayed but overall satisfied.',
    },
    {
      id: 3,
      store: 'Quick Shop',
      date: 'Oct 5, 2025',
      rating: 5,
      comment: 'Great wholesale partner! Competitive pricing and reliable service.',
    },
  ];

  return (
    <div className="space-y-6 w-full">
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-6">
        <div>
          <h2 className="text-sm font-semibold text-gray-900">Rating Overview</h2>
          <p className="text-xs text-gray-400 mt-0.5">
            Your performance and customer satisfaction metrics
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 text-center py-2 border-b border-gray-50 pb-4">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              <span className="text-2xl font-bold text-gray-900">4.7</span>
            </div>
            <span className="text-xs font-medium text-gray-700 mt-1">Overall Rating</span>
            <span className="text-[11px] text-gray-400 mt-0.5">Based on 234 reviews</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-gray-900">98%</span>
            <span className="text-xs font-medium text-gray-700 mt-1">On-Time Delivery</span>
            <span className="text-[11px] text-gray-400 mt-0.5">Last 30 days</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-gray-900">95%</span>
            <span className="text-xs font-medium text-gray-700 mt-1">Order Accuracy</span>
            <span className="text-[11px] text-gray-400 mt-0.5">Last 30 days</span>
          </div>
        </div>
        <div className="w-full h-[197px] pt-1">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={ratingData}
              margin={{ top: 5, right: 0, left: -20, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="1 3" stroke="#E2E8F0" vertical={true} />

              <XAxis
                dataKey="month"
                axisLine={{ stroke: '#000000' }}
                tickLine={{ stroke: '#000000' }}
                tick={{ fontSize: 11, fill: '#64748B' }}
              />
              <YAxis
                domain={[0, 5]}
                ticks={[0, 2, 4, 5]}
                axisLine={{ stroke: '#000000' }}
                tickLine={{ stroke: '#000000' }}
                tick={{ fontSize: 11, fill: '#64748B' }}
              />

              <Area
                type="monotone"
                dataKey="rating"
                stroke="#000000"
                strokeWidth={1}
                fill="#000000"
                fillOpacity={0.20}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-4">
        <h2 className="text-sm font-semibold text-gray-900">Rating Breakdown</h2>

        <div className="space-y-3 pt-1">
          {breakdown.map((item) => (
            <div key={item.stars} className="flex items-center gap-3 text-xs">
              <div className="flex items-center gap-1 w-6">
                <span className="font-medium text-gray-700">{item.stars}</span>
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              </div>

              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-400 rounded-full transition-all duration-300"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>

              <span className="w-8 text-right font-medium text-gray-500">
                {item.count}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-4">
        <h2 className="text-sm font-semibold text-gray-900">Recent Reviews</h2>

        <div className="space-y-3 pt-1">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border border-gray-100 rounded-xl p-4 space-y-2 bg-white"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-semibold text-gray-900">
                  {review.store}
                </h3>
                <span className="text-[11px] text-gray-400">
                  {review.date}
                </span>
              </div>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < review.rating
                        ? 'text-amber-400 fill-amber-400'
                        : 'text-gray-200 fill-gray-200'
                    }`}
                  />
                ))}
              </div>

              <p className="text-xs text-gray-500 leading-relaxed">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}