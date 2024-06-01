import { Button } from "@mui/material";
import React from "react";
import { IoMdSearch } from "react-icons/io";

const SearchBox = () => {
  return (
    <div>
      <input type="text" placeholder="Search The Products Here" />
      <Button>
        <IoMdSearch />
      </Button>
    </div>
  );
};

export default SearchBox;
