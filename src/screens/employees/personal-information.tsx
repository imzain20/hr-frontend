import styles from './editinformation.module.scss';

const EditInformation = () => {
  // Define the data array
  const personalDetails = [
    { label: "Name", value: "Mark" },
    { label: "Surname", value: "Sheeler" },
    { label: "Age", value: "24" },
    { label: "Date of birth", value: "01.01.1999" },
    { label: "Email", value: "mark.sheeler@company.com" },
    { label: "Phone number", value: "+44 567 876 4567" },
    { label: "Nationality", value: "Others" },
    { label: "Work Permit / Visa", value: "Yes" },
    { label: "Country", value: "United Kingdom" },
    { label: "City", value: "London" },
    { label: "Postal code", value: "12345" },
    { label: "Street", value: "Bellefields Rd" },
    { label: "Street number", value: "42b" },
    { label: "National Insurance Number", value: "111222333444555666" }
  ];


  const educationDetails = [
    { label: "Certificate level", value: "Diploma of higher education (DipHE)" },
    { label: "Field of Study", value: "Engineering" },
    { label: "School", value: "Random School name" }
  ];

  return (
    <div>
      <div className="row">
        <div className="col m-0">
          <p className={`${styles.headingstyle}`}>Personal details</p>
        </div>
      </div>
      {personalDetails.map((detail, index) => (
        <div className="row" key={index}>
          <div className="col" style={{ marginLeft: "1vw" }}>
            <p>{detail.label}: <span>{detail.value}</span></p>
          </div>
        </div>
      ))}
      <hr />
      
    
      <div className="row">
        <div className="col m-0">
          <p className={`${styles.headingstyle}`}>Education</p>
        </div>
      </div>
      {educationDetails.map((detail, index) => (
        <div className="row" key={index}>
          <div className="col" style={{ marginLeft: "1vw" }}>
            <p>{detail.label}: <span>{detail.value}</span></p>
          </div>
        </div>
      ))}
    </div>
  );
};


export default EditInformation;




