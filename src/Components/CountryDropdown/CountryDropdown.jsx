import React, { useState } from "react";
import { Button, Dialog } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
  const [isOpenModel, setisOpenModel] = useState(false)
  return (
    <div>
      <Button className="countryDrop" onClick={()=>setisOpenModel(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">India</span>
        </div>
        <span className="ms-5">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog open={isOpenModel} onClose={()=>setisOpenModel(false)} className="locationModal"  TransitionComponent={Transition}>
        <h5 className="mb-0">Choose Your Delivery Location</h5>
        <p>Enter Your Address & we will specify the offer for your area.</p>
        <Button className="close_" onClick={()=>setisOpenModel(false)}><IoMdClose/></Button>
        <div className="headerSearch w-100">
          <input type="text" placeholder="Search Your Area..." />
          <Button>
            <IoMdSearch />
          </Button>
        </div>
        <ul className="cityList mt-3">
          <li>
            <Button onClick={()=>setisOpenModel(false)}>Faizpur</Button>
          </li>
          <li>
            <Button onClick={()=>setisOpenModel(false)}>Savda</Button>
          </li>
          <li>
            <Button onClick={()=>setisOpenModel(false)}>Nhavi</Button>
          </li>
          <li>
            <Button onClick={()=>setisOpenModel(false)}>Khirdi</Button>
          </li>
          <li>
            <Button onClick={()=>setisOpenModel(false)}>Nimbhora</Button>
          </li>
          <li>
            <Button onClick={()=>setisOpenModel(false)}>Faizpur</Button>
          </li>
          <li>
            <Button onClick={()=>setisOpenModel(false)}>Savda</Button>
          </li>
          <li>
            <Button onClick={()=>setisOpenModel(false)}>Nhavi</Button>
          </li>
          <li>
            <Button onClick={()=>setisOpenModel(false)}>Khirdi</Button>
          </li>
          <li>
            <Button onClick={()=>setisOpenModel(false)}>Nimbhora</Button>
          </li>
        </ul>
      </Dialog>
    </div>
  );
};

export default CountryDropdown;
