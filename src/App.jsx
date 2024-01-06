import React, { useState } from "react";
import Calendar, {providers, appointments} from "./Calendar";
import { useForm } from "react-hook-form";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const { register, handleSubmit } = useForm();
  const [appointments, setAppointments] = useState([]);

  const toggleModal = () => {
    setOpenModal(!openModal);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="py-24">
        <div className="flex justify-end pb-2">
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={toggleModal}
          >
            Schedule Appointment
          </button>
        </div>
        <Calendar appointments={appointments} />
      </div>
      {openModal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Schedule Appointment</h2>
            <form 
              onSubmit={handleSubmit((data) => {
                console.log(data);
                setAppointments([...appointments, data]);
                setOpenModal(!openModal);
                console.log(appointments);
              })}
             className="form">
              <label>Patients Name</label> 
              <input {...register('patientName')} type="text" /> 

              <label>Select a Provider</label> 
              <select {...register('provider')} name="provider"> 
                <option value="">Select a Provider</option>
                {providers.map((provider)=> (
                  <option key={provider.id} value={provider.id}>
                    {provider.name}
                  </option>
                ))}                
              </select>

              <label>Select a Time</label> 
              <select {...register('time')} name="time"> 
                <option value="">Select a Time</option>
                
              </select>

              <div className="footer">
              <button
              className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
              onClick={toggleModal}>
                Cancel
              </button>
              <button
              className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
              type="submit">
                Schedule
              </button>
            </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
