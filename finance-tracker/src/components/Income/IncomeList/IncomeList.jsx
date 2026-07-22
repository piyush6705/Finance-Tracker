import IncomeCard from "../IncomeCard/IncomeCard";
import "./IncomeList.css";

const incomes = [
  {
    id: 1,
    title: "Salary",
    amount: 50000,
    category: "Job",
    date: "22 Jul 2026",
  },
  {
    id: 2,
    title: "Freelancing",
    amount: 12000,
    category: "Business",
    date: "20 Jul 2026",
  },
  {
    id: 3,
    title: "Interest",
    amount: 2500,
    category: "Investment",
    date: "18 Jul 2026",
  },
];

function IncomeList({search}) {
  const filteredIncome = incomes.filter((income) =>
  income.title.toLowerCase().includes(search.toLowerCase())
);
  return (
    <div className="income-list">
      {filteredIncome.map((income) => (
        <IncomeCard
          key={income.id}
          title={income.title}
          amount={income.amount}
          category={income.category}
          date={income.date}
          onEdit={() => alert(`Edit ${income.title}`)}
          onDelete={() => alert(`Delete ${income.title}`)}
        />
      ))}
    </div>
  );
}

export default IncomeList;