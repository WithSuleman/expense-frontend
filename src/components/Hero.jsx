import React from 'react';
import { ArrowRight, DollarSign } from 'lucide-react';

export default function Hero({ onStartTrackingClick }) {
  return (
    <section id="hero" className="py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading and Start Tracking Button */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Take Control of{' '}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">
                Your Money
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Track your expenses, understand your spending, and stay in control of your finances.
            </p>

            <div className="mt-7">
              <button
                onClick={onStartTrackingClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-600 hover:via-orange-600 hover:to-rose-600 shadow-lg shadow-orange-500/25 transition-all cursor-pointer"
              >
                <span>Start Tracking</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <p className="mt-4 text-sm font-semibold text-slate-500">
              Simple • Fast • Beautiful
            </p>
          </div>

          {/* Right Column: Floating Financial Illustration */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* Balance Card */}
              <div className="rounded-3xl p-6 bg-slate-900 text-white shadow-xl border border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase text-slate-400">Total Balance</span>
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-amber-400">
                    <DollarSign className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-3xl font-extrabold text-white mt-2">$4,250.00</p>
                <div className="mt-4 pt-4 border-t border-slate-800 flex justify-between text-xs font-semibold">
                  <span className="text-emerald-400">Income: +$6,500.00</span>
                  <span className="text-rose-400">Spent: -$2,250.00</span>
                </div>
              </div>

              {/* Floating Card 1: Income */}
              <div className="absolute -top-6 -right-4 animate-float bg-white p-3 rounded-2xl shadow-lg border border-slate-200 flex items-center gap-2.5">
                <span className="text-xl">💰</span>
                <div>
                  <p className="text-[11px] text-slate-500 font-medium">Income</p>
                  <p className="text-xs font-bold text-emerald-600">+$250.00</p>
                </div>
              </div>

              {/* Floating Card 2: Food */}
              <div className="absolute -bottom-6 -left-4 animate-float-reverse bg-white p-3 rounded-2xl shadow-lg border border-slate-200 flex items-center gap-2.5">
                <span className="text-xl">🍔</span>
                <div>
                  <p className="text-[11px] text-slate-500 font-medium">Food</p>
                  <p className="text-xs font-bold text-rose-600">-$85.00</p>
                </div>
              </div>

              {/* Floating Card 3: Transport */}
              <div className="hidden sm:flex absolute top-1/2 -right-6 animate-float-slow bg-white p-2.5 rounded-2xl shadow-lg border border-slate-200 items-center gap-2">
                <span className="text-lg">🚗</span>
                <div>
                  <p className="text-[10px] text-slate-500 font-medium">Transport</p>
                  <p className="text-xs font-bold text-rose-600">-$40.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
