import { createContext, useEffect, useState } from "react";

export const FinanceContext = createContext();

export function FinanceProvider({ children }) {

  // ---------------- Income ----------------

  const [incomes, setIncomes] = useState(() => {
    const saved = localStorage.getItem("incomes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("incomes", JSON.stringify(incomes));
  }, [incomes]);

  // ---------------- Expenses ----------------

  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // ---------------- Budgets ----------------

  const [budgets, setBudgets] = useState(() => {
    const saved = localStorage.getItem("budgets");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("budgets", JSON.stringify(budgets));
  }, [budgets]);

  return (
    <FinanceContext.Provider
      value={{
        incomes,
        setIncomes,

        expenses,
        setExpenses,

        budgets,
        setBudgets,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
}