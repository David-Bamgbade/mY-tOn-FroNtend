// import reactDom from 'react-dom/client';
// import App from './App';
// import './index.css'
// import {TonConnectUIProvider} from "@tonconnect/ui-react";
//
// const manifestUrl = 'http://localhost:5173/tonconnect-manifest.json'
//
// reactDom. createRoot(document.getElementById('root') as HTMLElement).render(
//   <TonConnectUIProvider manifestUrl={manifestUrl}>
//     <App />
//   </TonConnectUIProvider>,
// )

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const manifestUrl = "https://localhost:5174/tonconnect-manifest.json";

const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <TonConnectUIProvider manifestUrl={manifestUrl}>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </TonConnectUIProvider>
);