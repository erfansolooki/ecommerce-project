import "./App.css";
import { Router } from "./routes/router";

function App() {
  return (
    <>
      {window.location.pathname === "/" ? (
        <div
          className="flex justify-center items-center w-full
      h-screen"
        >
          <a
            href="/home"
            className="border border-indigo-600 py-2.5 px-4 rounded-full"
          >
            Go To Home Page
          </a>
        </div>
      ) : (
        <></>
      )}
      <Router />
    </>
  );
}

export default App;
