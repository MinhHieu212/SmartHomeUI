import AppNavigation from "./navigations/AppNavigation";
import { AuthProvider } from "./utils/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <AppNavigation></AppNavigation>
    </AuthProvider>
  );
}
