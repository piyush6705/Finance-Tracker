import IncomeCard from "../IncomeCard/IncomeCard";
import "./IncomeList.css";

function IncomeList({ incomes, search }) {
  const filteredIncome = incomes.filter((income) =>
    income.title
      .toLowerCase()
      .includes(search.toLowerCase())
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