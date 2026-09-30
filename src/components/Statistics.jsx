import React from 'react';
import { CATEGORIES, CATEGORY_CONFIG } from '../utils/categories.js';

export default function Statistics({ expenses = [] }) {
  const totalAmount = expenses.reduce((sum, item) => sum + item.amount, 0);

  const categoryStats = CATEGORIES.map((cat) => {
    const total = expenses
      .filter((e) => e.category === cat)
      .reduce((sum, item) => sum + item.amount, 0);

    const percentage = totalAmount > 0 ? Math.round((total / totalAmount) * 100) : 0;

    return {
      category: cat,
      amount: total,
      percentage,
      emoji: CATEGORY_CONFIG[cat]?.emoji || '•',
      barColor: CATEGORY_CONFIG[cat]?.barColor || 'from-amber-500 to-orange-500',
    };
  });

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(val);
  };

  return (
    <section id="statistics" className="py-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
          Spending by Category
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          Simple breakdown of your total expenditures across categories.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categoryStats.map((item) => (
            <div
              key={item.category}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{item.emoji}</span>
                  <span className="text-sm font-bold text-slate-800">{item.category}</span>
                </div>
                <span className="text-xs font-bold text-slate-500">{item.percentage}%</span>
              </div>

              <p className="text-lg font-extrabold text-slate-900 mb-2">
                {formatCurrency(item.amount)}
              </p>

              {/* Progress bar */}
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${item.barColor} transition-all duration-500`}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
