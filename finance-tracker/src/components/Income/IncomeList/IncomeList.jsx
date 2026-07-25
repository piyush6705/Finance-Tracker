import IncomeCard from "../IncomeCard/IncomeCard";
import "./IncomeList.css";

function IncomeList({
  incomes,
  search,
  setIncomes,
  setEditingIncome,
  setShowEditModal,
}) {

  const filteredIncome = incomes.filter((income) =>
    income.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this income?"
    );

    if (!confirmDelete) return;

    setIncomes((prev) =>
      prev.filter((income) => income.id !== id)
    );
  };

  return (
    <div className="income-list">

      {filteredIncome.map((income) => (

        <IncomeCard
          key={income.id}
          title={income.title}
          amount={income.amount}
          category={income.category}
          date={income.date}
          onEdit={() => {
            setEditingIncome(income);
            setShowEditModal(true);
          }}
          onDelete={() => handleDelete(income.id)}
        />

      ))}

    </div>
  );
}

export default IncomeList;