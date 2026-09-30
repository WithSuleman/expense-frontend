import React from 'react';
import { Wallet, TrendingUp, TrendingDown } from 'lucide-react';

export default function SummaryCards({ totalExpenses = 0 }) {
  const totalIncome = 6500.0;
  const totalBalance = totalIncome - totalExpenses;

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(val);
  };

  return (
    <section id="dashboard" className="py-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Total Balance */}
          <div className="group relative bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Total Balance
              </span>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Wallet className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 mt-3">
              {formatCurrency(totalBalance)}
            </h3>
            <p className="mt-1 text-xs text-slate-500 font-medium">
              Available remaining budget
            </p>
          </div>

          {/* Card 2: Total Income */}
          <div className="group relative bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Total Income
              </span>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-3xl font-extrabold text-emerald-600 mt-3">
              {formatCurrency(totalIncome)}
            </h3>
            <p className="mt-1 text-xs text-slate-500 font-medium">
              Total monthly earnings
            </p>
          </div>

          {/* Card 3: Total Expenses */}
          <div className="group relative bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-rose-500" />
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Total Expenses
              </span>
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingDown className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-3xl font-extrabold text-orange-600 mt-3">
              {formatCurrency(totalExpenses)}
            </h3>
            <p className="mt-1 text-xs text-slate-500 font-medium">
              Total spending recorded
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
