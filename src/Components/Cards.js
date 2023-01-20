import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./style.css";

import CardData from "./CardData";
import { useDispatch } from "react-redux";
import { ADD } from '../redux/actions/action';

const Cards = () => {
  const [data, setData] = useState(CardData);

  const dispatch = useDispatch();

  const send = (e) => {
    //console.log(e);
    dispatch(ADD(e));

  }

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart</h2>

      <div className="row d-flex align-items-center justify-content-center">
        {data.map((element, id) => {
          return (
            <>
              <Card
                style={{ width: "22rem", border: "none" }}
                className="mx-2 mt-4 card_style"
              >
                <CardMedia
                  variant="top"
                  className="mt-3"
                  style={{ height: "16rem" }}
                  image={element.imgdata}
                  title={element.rname}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {element.rname}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: ₹ {element.price}
                  </Typography>
                  <div className="button_div d-flex justify-content-center">
                    <Button
                      variant="contained"
                      className="col-lg-12 mt-2"
                      onClick={()=> send(element)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
