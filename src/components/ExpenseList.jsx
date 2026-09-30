import React, { useState, useMemo } from 'react';
import { Search, Filter, Wallet, Plus } from 'lucide-react';
import ExpenseCard from './ExpenseCard.jsx';
import { CATEGORIES } from '../utils/categories.js';

export default function ExpenseList({
  expenses = [],
  isLoading,
  onEdit,
  onDelete,
  onAddFirstExpenseClick,
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Simple instant search and filter
  const filteredExpenses = useMemo(() => {
    return expenses.filter((item) => {
      const matchTitle = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCat = selectedCategory === 'All' || item.category === selectedCategory;
      return matchTitle && matchCat;
    });
  }, [expenses, searchTerm, selectedCategory]);

  return (
    <section id="expenses-list" className="py-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-4">
          Expense List
        </h2>

        {/* Search and Category Filter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search expenses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-orange-500"
            />
          </div>

          <div className="relative">
            <Filter className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-900 focus:outline-none focus:border-orange-500 cursor-pointer"
            >
              <option value="All">All Categories</option>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Loading state */}
        {isLoading && (
          <div className="space-y-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="bg-white rounded-2xl p-5 border border-slate-200 animate-pulse flex items-center justify-between"
              >
                <div className="w-32 h-4 bg-slate-200 rounded" />
                <div className="w-16 h-4 bg-slate-200 rounded" />
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && filteredExpenses.length === 0 && (
          <div className="bg-white rounded-3xl p-10 border border-slate-200 text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center mb-3">
              <Wallet className="w-7 h-7 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">No expenses yet</h3>
            <p className="mt-1 text-sm text-slate-500 max-w-sm mx-auto">
              Start tracking your spending by adding your first expense.
            </p>
            <button
              onClick={onAddFirstExpenseClick}
              className="mt-5 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-md transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add Your First Expense</span>
            </button>
          </div>
        )}

        {/* Expense Cards */}
        {!isLoading && filteredExpenses.length > 0 && (
          <div className="space-y-3">
            {filteredExpenses.map((expense) => (
              <ExpenseCard
                key={expense._id || expense.id}
                expense={expense}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
