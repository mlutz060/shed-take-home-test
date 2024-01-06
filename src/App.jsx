import React, { useState } from "react";
import Calendar, {providers, appointments} from "./Calendar";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    patientName: '',
    startTime: '',
    providerId: ''
  });
  const [appointments, setAppointments] = useState([]);

  const toggleModal = () => {
    setOpenModal(!openModal);
  }
  const handleChange = (field, value) =>{
    setFormData({
      ...formData,
      [field]: value
    });
  }
  const handleSubmit = (field, value) => {
    setAppointments([...appointments, formData]);
    //add the form data to the appointments array
    appointments.push(formData)
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
            <form action="submit" className="form">
              <label>Patients Name</label> 
              <input type="text" /> 

              <label>Select a Provider</label> 
              <select name="" id=""> 
                <option value="">Select a Provider</option>
                {providers.map((provider)=> (
                  <option key={provider.id} value={provider.id}>
                    {provider.name}
                  </option>
                ))}                
              </select>

              <label>Select a Time</label> 
              <select name="" id=""> 
                <option value="">Select a Time</option>
                
              </select>
            </form>
            <div className="footer">
              <button
              className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
              onClick={toggleModal}>
                Cancel
              </button>
              <button
              className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
              onClick={handleSubmit}>
                Schedule
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
