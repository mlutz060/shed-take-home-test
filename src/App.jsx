import React, { useState, useEffect } from "react";
import Calendar, {providers} from "./Calendar";
import { useForm } from "react-hook-form";

function App() {
  const startTime = 8;
  const endTime = 17;

  const [openModal, setOpenModal] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const [appointments, setAppointments] = useState([]);
  const [hours, setHours] = useState(
    Array.from({length: endTime - startTime + 1}, (_, i) => startTime + i)
    );

  const toggleModal = () => {
    setOpenModal(!openModal);
  }

  const onSubmit = (data) => {
    if (selectedProvider !== null) {
      const newAppointment = {
        id: appointments.length + 1, 
        patientName: data.patientName,
        startTime: parseInt(data.time), 
        providerId: selectedProvider,
      };

      // Update the appointments state with the new appointment
      setAppointments([...appointments, newAppointment]);

      console.log(appointments);

      setOpenModal(false);
      reset();
    }
  };

  useEffect(() => {
    if (selectedProvider !== null) {
      const providerAppointments = appointments.filter(
        (appointment) => appointment.providerId === selectedProvider
      );
      const availableHours = hours.filter(
        (hour) =>
          !providerAppointments.some(
            (appointment) => appointment.startTime === hour
          )
      );
  
      // Only update if there's a change in the available hours
      if (!arraysEqual(availableHours, hours)) {
        setHours(availableHours);
      }
    }
  }, [selectedProvider, appointments, hours]);
  
  function arraysEqual(arr1, arr2) {
    return (
      arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])
    );
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
        <Calendar appointments={appointments} hours={hours} />
      </div>
      {openModal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Schedule Appointment</h2>
            <form 
              onSubmit={handleSubmit(onSubmit)}
             className="form"
             >
              <label htmlFor="patientName" >Patients Name</label> 
              <input {...register('patientName')} type="text" /> 

              <label htmlFor='provider'>Select a Provider</label> 
              <select {...register('providerId')} name="providerId"
                onChange={(e) => setSelectedProvider(parseInt(e.target.value))}
              > 
                <option value="">Select a Provider</option>
                {providers.map((provider)=> (
                  <option key={provider.id} value={provider.id}>
                    {provider.name}
                  </option>
                ))}                
              </select>

              <label htmlFor='startTime'>Select a Time</label>
              <select {...register("startTime")} name="startTime">
                <option value="">Select a Time</option>
                {hours.map((hour) => (
                  <option key={hour} value={hour}>
                    {`${hour}:00`}
                  </option>
                ))}
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
