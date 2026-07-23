import Layout from "../../components/Layout/Layout";
import "./Settings.css";
import Appearance from "../../components/Settings/Appearance/Appearance";
import Preferences from "../../components/Settings/Preferences/Preferences";
import Notifications from "../../components/Settings/Notifications/Notifications";
import DataManagement from "../../components/Settings/DataManagement/DataManagement";
import About from "../../components/Settings/About/About";

function Settings() {
  return (
    <Layout>

      <div className="settings-page">

        <h1>Settings</h1>

        <Appearance />
        <Preferences />
        <Notifications />
        <DataManagement />
        <About />
        
      </div>

    </Layout>
  );
}

export default Settings;