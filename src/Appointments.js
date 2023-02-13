
import { Button, FormControl,InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react'
import { useState,useRef } from 'react'
import './Appointment.css'

function Appointments() {
  const [doctor, setDoctor] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const selectDoctorRef = useRef(null);
  const doctorNameRef = useRef(null);
  // const [searchDoc,setSearchDoc] = useState('')
  const handleDoctorChange = e => {
    setDoctor(e.target.value);
  };

  const handleDateChange = e => {
    setAppointmentDate(e.target.value);
  };

  // const handleSearchDocChange = e => {
  //   //setSearchDoc(e.target.value);
  //   const term = e.target.value.toLowerCase();
  //   const doctors = selectDoctorRef.current.getElementsByTagName('input');
  //   Array.from(doctors).forEach(function(doctor){
  //       const title = doctor.firstElementChild.textContent;
  //       if (title.toLowerCase().indexOf(term) !== -1) {
  //         doctor.style.display = 'block';
  //       } else {
  //         doctor.style.display = 'none';
  //       }
  //   });
  // };

  // const filteredDoctors = [
  //   {name:'Dr.Amal'},
  //   {name:'Dr.Nasra'},
  //   {name:'Dr.Ubeid'}
  // ].filter(doctor=>
  //   doctor.name.toLowerCase().includes(searchDoc.toLowerCase())
  // )
  // const docm = document.querySelector('#select-doctor')
  // const searchDoc = document.forms['doctor-name'].querySelector('input')
  // searchDoc.addEventListener('keyup',function(e){
  //   const term = e.target.value.toLowerCase();
  //   const doctors = docm.getElementsByTagName('input')
  //   Array.from(doctors).forEach(function(doctor){
  //       const title = doctor.firstElementChild.textContent;
  //       if (title.toLowerCase().indexOf(term)!=-1) {
  //         doctor.style.display = 'block'
  //       } else {
  //         doctor.style.display = 'none'
  //       }
  //   })
  // })
  return (
    <form>
    <FormControl className='classes.formControl'>
       <InputLabel id="select-doctor-label">Doctor</InputLabel>
       <TextField
        id="doctor-name"
        label="Doctor"
        className='classes.textField'
        value={doctor}
        onChange={handleDoctorChange}
        InputLabelProps={{
          shrink: true
        }}
        ref={doctorNameRef}
        /> 
       <Select
        labelId="select-doctor-label"
        id="select-doctor"
        value={doctor}
        onChange={handleDoctorChange}
        ref={selectDoctorRef}
        >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="Dr. Amal">Dr. Amal</MenuItem>
        <MenuItem value="Dr. Nasra">Dr. Nasra</MenuItem>
        <MenuItem value="Dr. Ubeid">Dr. Ubeid</MenuItem>
        {/* {filteredDoctors.map(doctor=>(
          <MenuItem key={doctor.name} value={doctor.name}>{doctor.name}</MenuItem>
        ))} */}
        </Select>
    </FormControl> <br /><br />
    <TextField
      id="appointment-date"
      label="Appointment Date"
      type="date"
      className='classes.textField'
      value={appointmentDate}
      onChange={handleDateChange}
      InputLabelProps={{
        shrink: true
      }}
    /> <br /> <br />
    <Button
      variant="contained"
      color="primary"
      className='classes.button'
      disabled={!doctor || !appointmentDate}
    >
      Schedule Appointment
    </Button>
  </form>
  )
}

export default Appointments

// import React, { useState } from "react";

// import { Button, FormControl, InputLabel, makeStyles, MenuItem, Select, TextField } from "@mui/material";


// const useStyles = makeStyles(theme => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2)
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200
//   },
//   button: {
//     margin: theme.spacing(1)
//   }
// }));

// function Appointments() {
//   const classes = useStyles();
//   const [doctor, setDoctor] = useState("");
//   const [appointmentDate, setAppointmentDate] = useState("");

  // const handleDoctorChange = event => {
  //   setDoctor(event.target.value);
  // };

  // const handleDateChange = event => {
  //   setAppointmentDate(event.target.value);
  // };

//   return (
//     <form>
//       <FormControl className={classes.formControl}>
//         <InputLabel id="select-doctor-label">Doctor</InputLabel>
//         <Select
//           labelId="select-doctor-label"
//           id="select-doctor"
//           value={doctor}
//           onChange={handleDoctorChange}
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value="Dr. John Smith">Dr. John Smith</MenuItem>
//           <MenuItem value="Dr. Jane Doe">Dr. Jane Doe</MenuItem>
//           <MenuItem value="Dr. Bob Johnson">Dr. Bob Johnson</MenuItem>
//         </Select>
//       </FormControl>
//       <TextField
//         id="appointment-date"
//         label="Appointment Date"
//         type="date"
//         className={classes.textField}
//         value={appointmentDate}
//         onChange={handleDateChange}
//         InputLabelProps={{
//           shrink: true
//         }}
//       />
//       <Button
//         variant="contained"
//         color="primary"
//         className={classes.button}
//         disabled={!doctor || !appointmentDate}
//       >
//         Schedule Appointment
//       </Button>
//     </form>
//   );
// }
// export default Appointments