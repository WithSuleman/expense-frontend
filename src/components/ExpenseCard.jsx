import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import { CATEGORY_CONFIG } from '../utils/categories.js';

export default function ExpenseCard({ expense, onEdit, onDelete }) {
  const config = CATEGORY_CONFIG[expense.category] || CATEGORY_CONFIG['Other'];

  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(expense.amount);

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs hover:shadow-md transition-all">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Left: Category icon + Details */}
        <div className="flex items-start gap-3.5">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-slate-50 border border-slate-100 flex-shrink-0">
            {config.emoji}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-base font-bold text-slate-900">{expense.title}</h4>
              <span className={`px-2 py-0.5 rounded-md text-[11px] font-bold ${config.badge}`}>
                {expense.category}
              </span>
            </div>

            {expense.description && (
              <p className="text-xs text-slate-500 mt-0.5">{expense.description}</p>
            )}

            <p className="text-xs text-slate-400 mt-1">{expense.date}</p>
          </div>
        </div>

        {/* Right: Amount + Edit/Delete */}
        <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 pt-2 sm:pt-0 border-t sm:border-0 border-slate-100">
          <span className="text-lg font-extrabold text-rose-600">
            -{formattedAmount}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onEdit(expense)}
              className="px-2.5 py-1 text-xs font-semibold text-slate-600 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors cursor-pointer"
            >
              Edit
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={() => onDelete(expense)}
              className="px-2.5 py-1 text-xs font-semibold text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
