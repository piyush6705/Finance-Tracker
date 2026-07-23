import Layout from "../../components/Layout/Layout";
import "./Settings.css";
import Appearance from "../../components/Settings/Appearance/Appearance";
import Preferences from "../../components/Settings/Preferences/Preferences";

function Settings() {
  return (
    <Layout>

      <div className="settings-page">

        <h1>Settings</h1>

        <Appearance />
        <Preferences />

      </div>

    </Layout>
  );
}

export default Settings;