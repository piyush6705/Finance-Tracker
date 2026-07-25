import { createContext, useEffect, useState } from "react";

export const FinanceContext = createContext();

export function FinanceProvider({ children }) {

  // ================= Income =================

  const [incomes, setIncomes] = useState(() => {
    const saved = localStorage.getItem("incomes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("incomes", JSON.stringify(incomes));
  }, [incomes]);

  // ================= Expenses =================

  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // ================= Budgets =================

  const [budgets, setBudgets] = useState(() => {
    const saved = localStorage.getItem("budgets");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("budgets", JSON.stringify(budgets));
  }, [budgets]);

  // ================= Income Functions =================

  const addIncome = (income) => {
    setIncomes((prev) => [...prev, income]);
  };

  const editIncome = (updatedIncome) => {
    setIncomes((prev) =>
      prev.map((income) =>
        income.id === updatedIncome.id
          ? updatedIncome
          : income
      )
    );
  };

  const deleteIncome = (id) => {
    setIncomes((prev) =>
      prev.filter((income) => income.id !== id)
    );
  };

  // ================= Expense Functions =================

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const editExpense = (updatedExpense) => {
    setExpenses((prev) =>
      prev.map((expense) =>
        expense.id === updatedExpense.id
          ? updatedExpense
          : expense
      )
    );
  };

  const deleteExpense = (id) => {
    setExpenses((prev) =>
      prev.filter((expense) => expense.id !== id)
    );
  };

  // ================= Budget Functions =================

  const addBudget = (budget) => {
    setBudgets((prev) => [...prev, budget]);
  };

  const editBudget = (updatedBudget) => {
    setBudgets((prev) =>
      prev.map((budget) =>
        budget.id === updatedBudget.id
          ? updatedBudget
          : budget
      )
    );
  };

  const deleteBudget = (id) => {
    setBudgets((prev) =>
      prev.filter((budget) => budget.id !== id)
    );
  };

  return (
    <FinanceContext.Provider
      value={{
        incomes,
        expenses,
        budgets,

        addIncome,
        editIncome,
        deleteIncome,

        addExpense,
        editExpense,
        deleteExpense,

        addBudget,
        editBudget,
        deleteBudget,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
}