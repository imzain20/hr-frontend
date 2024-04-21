import React, { useState } from "react";
import { Calendar as BigCalendar } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import useMobile from "../../bootstrap-ui-kit/hooks/useMobile";
import back_button from "../../assets/png/back_button.png";
import "../../bootstrap-ui-kit/components/company-structure/branch.css";
import "../employees/employees.css";
import styles from "./timeoff.module.scss";
// Import momentLocalizer from react-big-calendar
import { momentLocalizer } from "react-big-calendar";
import EditTimeOffModal from "./EditTimeOffModal";
import RequestTimeoff from "./request-timeoff";
import events from "./events";
import arrowleft from '../../assets/svg/Arrowleft.svg';
import './index.css'
import arrowright from '../../assets/svg/Arrowdown.svg'
import { useNavigate } from "react-router-dom";

// Set moment as the localizer for BigCalendar
const localizer = momentLocalizer(moment);
moment.locale("en-GB");

interface MyToolbarProps {
 // label: string;
  onNavigate: Function; // Update the type according to your requirements
  currentYear: number;
  currentMonth: number;
}

//const navigate = useNavigate ();

const MyToolbar: React.FC<MyToolbarProps> = ({ /*label, */onNavigate, currentYear, currentMonth }) => {
//   const [currentYear, setCurrentYear] = useState(moment().year());
// const [currentMonth, setCurrentMonth] = useState(moment().month());

const [isTimeOff, setIsTimeOff] = useState(false);
 
const opentimeoff = () => {
 
  setIsTimeOff(true);
};

const closetimeoff = () => {
  setIsTimeOff(false);
};

  
  const goToPrevious = () => {
    onNavigate("PREV");
  };

  const goToNext = () => {
    onNavigate("NEXT");
  };

  const goToToday = () => {
    onNavigate("TODAY");
  };

  const handleMonthChange = (e:any) => {
    const selectedMonth = parseInt(e.target.value);
    if (!isNaN(selectedMonth) && selectedMonth >= 0 && selectedMonth <= 11) {
      const newDate = moment(currentYear + "-" + (selectedMonth + 1), "YYYY-MM").toDate();
      onNavigate('DATE', newDate);
    }
  };
  

  const handleYearMonthChange = (e:any) => {
    const selectedYearMonth = e.target.value;
    const [year, month] = selectedYearMonth.split('-');
    // setCurrentYear(parseInt(year));
    // setCurrentMonth(parseInt(month) - 1); 
    const currentDate = new Date(parseInt(year), parseInt(month) - 1);
    onNavigate('DATE', currentDate);
  };
  

  const renderYearMonthOptions = () => {
    const yearMonthOptions = [];
    const currentYear = moment().year();
    const currentMonth = moment().month() + 1; // Months are zero-based
    
    for (let year = currentYear - 2; year <= currentYear + 10; year++) {
      for (let month = 0; month < 12; month++) {
        const monthLabel = moment().month(month).format("MMMM");
        const yearMonthLabel = `${monthLabel} ${year}`;
        const yearMonthValue = `${year}-${month + 1}`; // Adjust month to be 1-based
        
        if (year === currentYear && month + 1 === currentMonth) {
          // Set the default value for the current month and year
          yearMonthOptions.push(
            <option key={yearMonthValue} value={yearMonthValue} selected>
              {yearMonthLabel}
            </option>
          );
        } else {
          yearMonthOptions.push(
            <option key={yearMonthValue} value={yearMonthValue}>
              {yearMonthLabel}
            </option>
          );
        }
      }
    }
    return yearMonthOptions;
  };
  
  

  const renderMonthOptions = () => {
    const currentMonth = moment().month();
    const monthOptions = moment.months().map((month:any, index:any) => (
      <option key={index} value={index} selected={index === currentMonth}>
        {month}
      </option>
    ));
    return monthOptions;
  };

  return (
    <div className={styles.maintoolbar}>
      <div style={{display:"flex"}}>
      <span onClick={goToPrevious} className={styles.arrowbtn} style={{marginRight:"5px"}}>
        <img src={arrowleft}></img>
      </span>

      <span onClick={goToToday} className={styles.today}>
        Today
      </span>

      <span onClick={goToNext} className={styles.arrowbtn} style={{marginLeft:"5px"}}>
      
        <img src={arrowright} className={styles.rotate}></img>
      </span>
      </div>
   
   <div >   <select className={styles.year} value={currentYear + "-" + (currentMonth + 1)} onChange={handleYearMonthChange}>
  {renderYearMonthOptions()}
</select>
</div>

    <div>  <select  className={styles.month} value={currentMonth} onChange={handleMonthChange}>
        {renderMonthOptions()}
      </select></div>

      <div style={{marginLeft:"auto"}}>
       <button className={styles.timeoffbtn} onClick={opentimeoff}>+ Time-off</button>
      </div>

      <RequestTimeoff isOpen={isTimeOff} onClose={closetimeoff} />
    </div>
  );
};

const TimeOff: React.FC = () => {
  const isMobile = useMobile();
  const [showApproved, setShowApproved] = useState(true);
  const [showDeclined, setShowDeclined] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTimeOff, setIsTimeOff] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [timeoff, setTimeoff] = useState([...events]);

  const [currentDate, setCurrentDate] = useState(new Date());
  const currentYear = moment(currentDate).year();
  const currentMonth = moment(currentDate).month();

  const handleNavigate = (action:any, newDate:any) => {
    switch (action) {
      case "PREV":
        setCurrentDate(prevDate => moment(prevDate).subtract(1, 'months').toDate());
        break;
      case "NEXT":
        setCurrentDate(prevDate => moment(prevDate).add(1, 'months').toDate());
        break;
      case "TODAY":
        setCurrentDate(new Date());
        break;
      case "DATE":
        setCurrentDate(newDate);
        break;
      default:
        break;
    }
  };


  const filteredEvents = events.filter(event => {
    if (showApproved && showDeclined) {
      // Show all events if both checkboxes are selected
      return true;
    } else if (showApproved) {
      // Show only approved events
      return event.status === "approved";
    } else if (showDeclined) {
      // Show only declined events
      return event.status === "declined";
    }
    return false;
  });

  const openModal = (event:any) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const opentimeoff = (event:any) => {
    setSelectedEvent(event);
    setIsTimeOff(true);
  };

  const closetimeoff = () => {
    setIsTimeOff(false);
  };

  const getEventStyle = (event:any, start:any, end:any, isSelected:any) => {
    let style = {};
    if (event.status === "approved") {
      style = {
        backgroundColor: "#BBDCFF",
        border: "1px solid #BBDCFF",
        color: "black",
      };
    } else if (event.status === "declined") {
      style = {
        backgroundColor: "#E5EDF8",
        border: "1px dashed #58A9FF",
        color: "black",
      };
    }
    return {
      style: style,
    };
  };

  const saveEventChanges = (updatedEvent:any) => {
    // Find the index of the event in the events array
    const index = timeoff.findIndex((event) => event.id === updatedEvent.id);
    // Create a copy of the events array
    const updatedEvents = [...timeoff];
    // Update the event at the found index
    updatedEvents[index] = updatedEvent;
    // Update the state with the new events array
    setTimeoff(updatedEvents);
    // Close the modal
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className={"flexSpaceCS"}>
        <div className="ps-3 ps-md-0">
          <div className="d-flex align-items-center mb-3 gap-2">
            {isMobile && (
              <div /*onClick={() => navigate(-1)}*/>
                <img src={back_button} alt="Back Button" />
              </div>
            )}
            <p className="HR">Time-off</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-2">
          <div
            style={{
              backgroundColor: "white",
              height: 700,
              borderRadius: "12px",
              padding: "1vw",
            }}
          >
            <div className="form-group">
              <label htmlFor="serviceName" className="float-start mb-1 name">
                Team
              </label>
              <select
                className="form-select mb-2"
                style={{ borderRadius: "8px" }}
                aria-label=".form-select"
                id="type"
              >
                <option value="All">Not show</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="serviceName" className="float-start mb-1 name">
                Time-off status
              </label>
              <select
                className="form-select mb-2"
                style={{ borderRadius: "8px" }}
                aria-label=".form-select"
                id="type"
              >
                <option value="All">All</option>
              </select>
            </div>
            <hr />
            <div >
            <input type="checkbox" value="approved"
            style={{ accentColor:"#BBDCFF"}}
            checked={showApproved}
            onChange={() => setShowApproved(!showApproved)}
            ></input> &nbsp;
            <label>Approved</label>
            </div>
            <div>
            <input type="checkbox" value="declined"
           style={{accentColor:"#E5EDF8"}}
            checked={showDeclined}
            onChange={() => setShowDeclined(!showDeclined)}
            ></input> &nbsp;
            <label >Declined</label>
            </div>

           
          </div>
        </div>
        <div className="col-9">
          <div style={{ height: 700, borderRadius: "12px" }}>

            <div>
            <MyToolbar
            // label={label}
        currentYear={currentYear}
        currentMonth={currentMonth}
        
        onNavigate={handleNavigate}
      />
            </div>
            <BigCalendar
              // events={events}
              events={filteredEvents}
              selectable
              step={60}
              date={currentDate}
              dayPropGetter={(date:any) => ({
                className: styles.days, // Add a custom class for styling
              })}
              // onSelectSlot={opentimeoff}
              style={{ background: "white", padding:"0.2vw", borderRadius:"8px" }}
              localizer={localizer}
              defaultDate={new Date(2024, 3, 1)}
              onSelectEvent={openModal}
              onSelectSlot={opentimeoff}
              eventPropGetter={getEventStyle}
              // components={{
              //   toolbar: MyToolbar, 
              // }}
              popup={false}
              views={{
                day: false,
                week: false,
                month: true,
              }}
              onShowMore={(events:any, date:any) => openModal(events)}
              toolbar={false}
            />
          </div>
        </div>
      </div>
      <EditTimeOffModal
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedEvent={selectedEvent}
        onSave={saveEventChanges}
        //   timeoff={timeoff}
      />

      <RequestTimeoff isOpen={isTimeOff} onClose={closetimeoff} />
    </div>
  );
};

export default TimeOff;
