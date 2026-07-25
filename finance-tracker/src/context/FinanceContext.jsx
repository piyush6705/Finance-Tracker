import { createContext, useEffect, useState } from "react";

export const FinanceContext = createContext();

export function FinanceProvider({ children }) {

// Income
const addIncome = (income) => {
  setIncomes((prev) => [...prev, income]);
};

const deleteIncome = (id) => {
  setIncomes((prev) =>
    prev.filter((income) => income.id !== id)
  );
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

// Expense
const addExpense = (expense) => {
  setExpenses((prev) => [...prev, expense]);
};

const deleteExpense = (id) => {
  setExpenses((prev) =>
    prev.filter((expense) => expense.id !== id)
  );
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

// Budget
const addBudget = (budget) => {
  setBudgets((prev) => [...prev, budget]);
};

const deleteBudget = (id) => {
  setBudgets((prev) =>
    prev.filter((budget) => budget.id !== id)
  );
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

  useEffect(() => {
    localStorage.setItem("budgets", JSON.stringify(budgets));
  }, [budgets]);

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