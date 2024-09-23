import Home from "@/components/pages/website/Home";
import { devNavUrl } from "../components/helpers/functions-general";
import Dashboard from "@/components/pages/developer/Dashboard";

export const routesDeveloper = [
  {
    path: `${devNavUrl}/`,
    element: <Home />,
  },
  {
    path: `${devNavUrl}/dashboard`,
    element: <Dashboard />,
  },
];
