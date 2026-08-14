import "./Settings.css";

import Layout from "../../components/Layout/Layout";

import Appearance from "../../components/Settings/Appearance/Appearance";
import Preferences from "../../components/Settings/Preferences/Preferences";
import Notifications from "../../components/Settings/Notifications/Notifications";
import DataManagement from "../../components/Settings/DataManagement/DataManagement";
import About from "../../components/Settings/About/About";

function Settings() {
  return (
    <Layout>

      <div className="settings-page">

        <div className="settings-header">
          <h1>Settings</h1>

          <p>
            Manage your application preferences and data.
          </p>
        </div>

        <div className="settings-content">

          <Appearance />

          <Preferences />

          <Notifications />

          <DataManagement />

          <About />

        </div>

      </div>

    </Layout>
  );
}

export default Settings;