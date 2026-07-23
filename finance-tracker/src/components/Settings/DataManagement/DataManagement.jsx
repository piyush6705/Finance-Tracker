import "./DataManagement.css";

function DataManagement() {
  return (
    <div className="data-card">

      <h2>Data Management</h2>

      <div className="data-row">

        <div>
          <h3>Export Data</h3>
          <p>Download all your transactions as a CSV file.</p>
        </div>

        <button className="export-btn">
          Export
        </button>

      </div>

      <div className="data-row">

        <div>
          <h3>Import Data</h3>
          <p>Import previously exported finance data.</p>
        </div>

        <button className="import-btn">
          Import
        </button>

      </div>

      <div className="data-row">

        <div>
          <h3>Clear All Data</h3>
          <p>Delete all income, expenses and budgets.</p>
        </div>

        <button className="clear-btn">
          Clear
        </button>

      </div>

      <div className="data-row">

        <div>
          <h3>Reset Application</h3>
          <p>Restore the application to its default state.</p>
        </div>

        <button className="reset-btn">
          Reset
        </button>

      </div>

    </div>
  );
}

export default DataManagement;