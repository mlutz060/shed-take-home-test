import React from "react";
import Calendar from "./Calendar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="py-24">
        <div className="flex justify-end pb-2">
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Schedule Appointment
          </button>
        </div>
        <Calendar />
      </div>
    </div>
  );
}

export default App;
