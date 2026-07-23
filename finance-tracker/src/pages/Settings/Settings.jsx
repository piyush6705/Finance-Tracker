import Layout from "../../components/Layout/Layout";
import "./Settings.css";
import Appearance from "../../components/Settings/Appearance/Appearance";

function Settings() {
  return (
    <Layout>

      <div className="settings-page">

        <h1>Settings</h1>

        <Appearance />

      </div>

    </Layout>
  );
}

export default Settings;