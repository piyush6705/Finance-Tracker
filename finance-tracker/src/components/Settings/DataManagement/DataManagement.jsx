import { useRef } from "react";
import "./DataManagement.css";
import { useFinance } from "../../../hooks/useFinance";

function DataManagement() {
  const {
    incomes,
    expenses,
    budgets,
    setIncomes,
    setExpenses,
    setBudgets,
  } = useFinance();

  const fileInputRef = useRef(null);

  const handleExport = () => {
    const data = {
      incomes,
      expenses,
      budgets,
    };

    const jsonData = JSON.stringify(data, null, 2);

    const blob = new Blob([jsonData], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "finance-tracker-data.json";

    link.click();

    URL.revokeObjectURL(url);
  };

  const handleImportClick = () => {
    fileInputRef.current.click();
  };

  const handleImport = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);

        if (
          !Array.isArray(data.incomes) ||
          !Array.isArray(data.expenses) ||
          !Array.isArray(data.budgets)
        ) {
          alert("Invalid finance data file.");
          return;
        }

        setIncomes(data.incomes);
        setExpenses(data.expenses);
        setBudgets(data.budgets);

        alert("Data imported successfully.");
      } catch (error) {
        alert("Could not read the selected file.");
      }
    };

    reader.readAsText(file);

    event.target.value = "";
  };

  const handleClearData = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all your financial data? This cannot be undone."
    );

    if (!confirmed) return;

    setIncomes([]);
    setExpenses([]);
    setBudgets([]);

    alert("All financial data has been cleared.");
  };

  return (
    <div className="data-management">

      <div className="settings-section-header">
        <h2>Data Management</h2>

        <p>
          Export, import, or clear your finance data.
        </p>
      </div>

      <div className="data-management-list">

        {/* Export */}

        <div className="data-item">

          <div className="data-info">
            <h3>Export Data</h3>

            <p>
              Download all your income, expense, and
              budget data as a JSON file.
            </p>
          </div>

          <button
            className="data-btn primary"
            onClick={handleExport}
          >
            Export Data
          </button>

        </div>

        {/* Import */}

        <div className="data-item">

          <div className="data-info">
            <h3>Import Data</h3>

            <p>
              Restore your financial data from a
              previously exported JSON file.
            </p>
          </div>

          <button
            className="data-btn secondary"
            onClick={handleImportClick}
          >
            Import Data
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            onChange={handleImport}
            hidden
          />

        </div>

        {/* Clear */}

        <div className="data-item danger-item">

          <div className="data-info">
            <h3>Clear Financial Data</h3>

            <p>
              Permanently remove all income, expenses,
              and budgets from the application.
            </p>
          </div>

          <button
            className="data-btn danger"
            onClick={handleClearData}
          >
            Clear Data
          </button>

        </div>

      </div>

    </div>
  );
}

export default DataManagement;