import React from "react";
import Rating from "@mui/material/Rating";
import { BsArrowsFullscreen } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { Button } from "@mui/material";

const ProductItem = () => {
  return (
    <div>
      <div className="item productItem">
        <div className="imgWrapper">
          <img
            src="https://s3.ap-south-1.amazonaws.com/diingdong/amul00002.jpg"
            alt="product img not found"
            className="w-100 mt-2"
          />
          <span className="badge text-bg-primary">24%</span>

          <div className="actions">
            <Button><BsArrowsFullscreen /></Button>
            <Button><FiHeart style={{fontSize : '18px'}} /></Button>
          </div>
        </div>
        <div className="info">
          <h4>Amul Shakti Milky Milk 1litre</h4>
          <span className="text-success d-block">In Stock</span>

          <Rating
            name="simple-controlled"
            className="mt-2 mb-2"
            value={5}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            size="small"
            // precision={0.5}
          />

          <div className="d-flex">
            <span className="oldPrice">Rs.45</span>
            <span className="newPrice text-danger ms-2">Rs.35</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
