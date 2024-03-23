import AppNavigation from "./navigations/AppNavigation";
import { AuthProvider } from "./utils/AuthContext";
import { store } from "./features/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <AppNavigation></AppNavigation>
      </AuthProvider>
    </Provider>
  );
}
