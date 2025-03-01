
import Sidebar from "../../Layout/Sidebar";

import React, { useState } from "react";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import clsx from "clsx";

dayjs.extend(localizedFormat);

// Event categories
const categories = [
  { name: "Meal Planning", color: "bg-green-300" },
  { name: "Physical Activities", color: "bg-orange-300" },
  { name: "Appointments/Events", color: "bg-yellow-400" },
];

interface Event {
  date: string;
  time: string;
  title: string;
  category: string;
}



const Calendar:React.FC = () =>{

  const [events, setEvents] = useState<Event[]>([  
    { date: "2028-09-04", time: "9:00 AM", title: "Grocery Shopping: Fruits", category: "Meal Planning" },
    { date: "2028-09-05", time: "7:00 AM", title: "Morning Yoga Session", category: "Physical Activities" },
    { date: "2028-09-05", time: "3:00 PM", title: "Health Check-up", category: "Appointments/Events" },
  ]);
  const [selectedDate, setSelectedDate] = useState<string>("");

  const currentMonth = dayjs().month();
  const currentYear = dayjs().year();
  const daysInMonth = dayjs(`${currentYear}-${currentMonth + 1}-01`).daysInMonth();
  const firstDay = dayjs(`${currentYear}-${currentMonth + 1}-01`).day();

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-4" />);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const formattedDate = dayjs(`${currentYear}-${currentMonth + 1}-${day}`).format("YYYY-MM-DD");
      const dayEvents = events.filter((event) => event.date === formattedDate);
      
      days.push(
        <div key={day} className="border p-4 h-24 relative cursor-pointer" onClick={() => setSelectedDate(formattedDate)}>
          <span className="text-gray-600 text-sm">{day}</span>
          {dayEvents.map((event, index) => (
            <div
              key={index}
              className={clsx("mt-1 text-xs p-1 rounded text-black", categories.find(c => c.name === event.category)?.color)}

            >
              {event.time} - {event.title}
            </div>
          ))}
        </div>
      );
    }
    return days;
  };

    return(
        <>
        <div className="row mt-3">
            <div className="col  col-lg-2 ">
        <section className="sidebar ">
        <Sidebar></Sidebar>
        </section>
        </div>

        <div className=" col  col-lg-10 ">

       
        <div className="flex-grow-1">
        <nav className="navbar-main navbar-light bg-white shadow-sm px-4 d-flex justify-content-between " >
          <h5 className="mb-0">Hello, Adam! 👋 
          <h6 className="iner-text"> <br />Lets begin Our journey to better health</h6>
          </h5>
          
         
          <div className="d-flex align-items-center justify-content-between p-2 rounded bg-white shadow-sm" style={{ width: "250px" }}>
      {/* Profile Section */}
      <div className="d-flex align-items-center">
        <div className="profile-img d-flex justify-content-center align-items-center me-2">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/219/219988.png" 
            alt="User"
            className="rounded-circle"
            width="40"
            height="40"
          />
        </div>
        <div>
          <h6 className="mb-0 fw-bold">Adam Vasylenko</h6>
          <small className="text-muted">Member</small>
        </div>
      </div>
      </div>
        </nav>
      </div>

      <div className="w-full max-w-4xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">{dayjs().format("MMMM YYYY")}</h2>
      <input 
        type="text" 
        placeholder="Enter a date (YYYY-MM-DD)" 
        value={selectedDate} 
        onChange={(e) => setSelectedDate(e.target.value)} 
        className="mb-4 p-2 border rounded w-full"
      />
      <div className="grid grid-cols-7 gap-2 text-center text-gray-700 font-medium">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="p-2 border-b-2">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">{renderDays()}</div>
    </div>

        
      
    </div>
    
    </div>



    
       </>
    )
}
export default Calendar;