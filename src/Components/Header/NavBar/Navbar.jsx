import { Button } from '@mui/material'
import React from 'react'
import { MdMenu } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div>
      <nav>
          <div className="container">
            <div className="row">
              <div className="col-sm-3 navPart1">
                <Button className="allCatTab align-items-center">
                    <span className='icon1 me-2'><MdMenu/></span>
                  <span className="text">ALL CATEGORIES</span>
                  <span className='icon2 ms-2'><FaAngleDown/></span>
                </Button>
              </div>
              <div className="col-sm-9 navPart2"></div>
            </div>
          </div> 
        </nav>
    </div>
  )
}

export default Navbar
