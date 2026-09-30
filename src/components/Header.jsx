import React, { useState } from 'react';
import { Wallet, Plus, Menu, X } from 'lucide-react';

export default function Header({ onAddExpenseClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <Wallet className="w-5 h-5" />
            </div>
            <span className="text-xl font-extrabold text-slate-900 tracking-tight">
              Expense<span className="text-orange-500">Flow</span>
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => scrollToSection('dashboard')}
              className="px-3 py-1.5 rounded-lg text-sm font-semibold text-slate-600 hover:text-orange-600 hover:bg-orange-50 transition-colors cursor-pointer"
            >
              Dashboard
            </button>
            <button
              onClick={() => scrollToSection('expenses-list')}
              className="px-3 py-1.5 rounded-lg text-sm font-semibold text-slate-600 hover:text-orange-600 hover:bg-orange-50 transition-colors cursor-pointer"
            >
              Expenses
            </button>
            <button
              onClick={() => scrollToSection('statistics')}
              className="px-3 py-1.5 rounded-lg text-sm font-semibold text-slate-600 hover:text-orange-600 hover:bg-orange-50 transition-colors cursor-pointer"
            >
              Statistics
            </button>
          </nav>

          {/* Add Expense Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onAddExpenseClick}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-md shadow-orange-500/20 transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>+ Add Expense</span>
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 px-2 border-t border-slate-100 bg-white rounded-b-xl shadow-lg">
            <div className="flex flex-col gap-1">
              <button
                onClick={() => scrollToSection('dashboard')}
                className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-600"
              >
                Dashboard
              </button>
              <button
                onClick={() => scrollToSection('expenses-list')}
                className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-600"
              >
                Expenses
              </button>
              <button
                onClick={() => scrollToSection('statistics')}
                className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-600"
              >
                Statistics
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
