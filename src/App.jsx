import React, { useState, useEffect } from 'react';
import api from './api/axios.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import SummaryCards from './components/SummaryCards.jsx';
import ExpenseForm from './components/ExpenseForm.jsx';
import ExpenseList from './components/ExpenseList.jsx';
import Statistics from './components/Statistics.jsx';
import EditExpenseModal from './components/EditExpenseModal.jsx';
import DeleteConfirmModal from './components/DeleteConfirmModal.jsx';
import Notification from './components/Notification.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // Modals state
  const [editingExpense, setEditingExpense] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [deletingExpense, setDeletingExpense] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Notification state
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
  };

  const closeNotification = () => {
    setNotification(null);
  };

  // Fetch expenses from API
  const fetchExpenses = async () => {
    try {
      setIsLoading(true);
      const res = await api.get('/api/expenses');
      if (res.data && res.data.data) {
        setExpenses(res.data.data);
      }
    } catch (err) {
      console.error('Failed to fetch expenses:', err);
      showNotification('Something went wrong while loading expenses. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  // Calculate total expense amount
  const totalExpenses = expenses.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);

  // Add new expense
  const handleAddExpense = async (newExpenseData) => {
    try {
      setIsSubmitting(true);
      const res = await api.post('/api/expenses', newExpenseData);
      if (res.data && res.data.data) {
        // Prepend new expense
        setExpenses((prev) => [res.data.data, ...prev]);
        showNotification('Expense added successfully!', 'success');
        return true;
      }
      return false;
    } catch (err) {
      console.error('Failed to add expense:', err);
      const errorMsg =
        err.response?.data?.message || 'Something went wrong while adding the expense. Please try again.';
      showNotification(errorMsg, 'error');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  // Open edit modal
  const handleOpenEdit = (expense) => {
    setEditingExpense(expense);
    setIsEditModalOpen(true);
  };

  // Save edited expense
  const handleSaveEdit = async (id, updatedData) => {
    try {
      setIsSaving(true);
      const res = await api.put(`/api/expenses/${id}`, updatedData);
      if (res.data && res.data.data) {
        setExpenses((prev) =>
          prev.map((item) => ((item._id || item.id) === id ? res.data.data : item))
        );
        setIsEditModalOpen(false);
        setEditingExpense(null);
        showNotification('Expense updated successfully!', 'success');
      }
    } catch (err) {
      console.error('Failed to update expense:', err);
      const errorMsg =
        err.response?.data?.message || 'Something went wrong while updating the expense. Please try again.';
      showNotification(errorMsg, 'error');
    } finally {
      setIsSaving(false);
    }
  };

  // Open delete confirm modal
  const handleOpenDelete = (expense) => {
    setDeletingExpense(expense);
    setIsDeleteModalOpen(true);
  };

  // Confirm delete expense
  const handleConfirmDelete = async (id) => {
    try {
      setIsDeleting(true);
      await api.delete(`/api/expenses/${id}`);
      setExpenses((prev) => prev.filter((item) => (item._id || item.id) !== id));
      setIsDeleteModalOpen(false);
      setDeletingExpense(null);
      showNotification('Expense deleted successfully!', 'success');
    } catch (err) {
      console.error('Failed to delete expense:', err);
      const errorMsg =
        err.response?.data?.message || 'Something went wrong while deleting the expense. Please try again.';
      showNotification(errorMsg, 'error');
    } finally {
      setIsDeleting(false);
    }
  };

  // Smooth scroll to form
  const scrollToAddExpense = () => {
    const el = document.getElementById('add-expense');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-amber-500/20 selection:text-amber-800">
      {/* 1. Header */}
      <Header onAddExpenseClick={scrollToAddExpense} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onStartTrackingClick={scrollToAddExpense} />

        {/* 3. Dashboard Summary Cards */}
        <SummaryCards totalExpenses={totalExpenses} defaultIncome={6500} />

        {/* 4. Add Expense Form */}
        <ExpenseForm onAddExpense={handleAddExpense} isLoading={isSubmitting} />

        {/* 5. Expense List & Search/Filter & Empty State */}
        <ExpenseList
          expenses={expenses}
          isLoading={isLoading}
          onEdit={handleOpenEdit}
          onDelete={handleOpenDelete}
          onAddFirstExpenseClick={scrollToAddExpense}
        />

        {/* 6. Expense Statistics */}
        <Statistics expenses={expenses} />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Edit Modal */}
      <EditExpenseModal
        isOpen={isEditModalOpen}
        expense={editingExpense}
        onClose={() => {
          setIsEditModalOpen(false);
          setEditingExpense(null);
        }}
        onSave={handleSaveEdit}
        isSaving={isSaving}
      />

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        expense={deletingExpense}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setDeletingExpense(null);
        }}
        onConfirm={handleConfirmDelete}
        isDeleting={isDeleting}
      />

      {/* Notification Toast */}
      <Notification notification={notification} onClose={closeNotification} />
    </div>
  );
}
