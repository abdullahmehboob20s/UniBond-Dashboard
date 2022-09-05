import DashboardLayout from "layouts/DashboardLayout";
import Dashboard from "layouts/Dashboard";

export default function Home() {
  return (
    <div>
      <DashboardLayout pageName="Dashboard">
        <Dashboard />
      </DashboardLayout>
    </div>
  );
}
