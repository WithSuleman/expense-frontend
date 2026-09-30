import React from 'react';
import { Wallet } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 py-8 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center text-white">
            <Wallet className="w-4 h-4" />
          </div>
          <span className="font-bold text-slate-800">ExpenseFlow</span>
        </div>
        <p>© {new Date().getFullYear()} ExpenseFlow. Simple MERN Expense Tracker.</p>
      </div>
    </footer>
  );
}
