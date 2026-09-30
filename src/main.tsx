import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

if ("serviceWorker" in navigator) {
	void navigator.serviceWorker.getRegistrations().then((registrations) =>
		Promise.all(registrations.map((registration) => registration.unregister())),
	);
}

if ("caches" in window) {
	void window.caches.keys().then((cacheNames) =>
		Promise.all(
			cacheNames
				.filter((cacheName) => cacheName.startsWith("workbox-precache") || cacheName === "feedpaws-images")
				.map((cacheName) => window.caches.delete(cacheName)),
		),
	);
}

createRoot(document.getElementById("root")!).render(<App />);
