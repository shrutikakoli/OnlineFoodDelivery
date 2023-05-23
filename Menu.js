import React from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { Button } from "bootstrap";

const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <NavLink>          <Card sx={{ maxWidth: "290px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "300px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>

                <div className="price-section">
                  <div className="price">
                    <span>&#8377;</span> {menu.price}
                  </div>
                  <Link to="/formData">
                    <button className="buy-now-btn">BUY NOW</button>
                  </Link>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
          </NavLink>

        ))}
      </Box>
    </Layout>

  );
};

export default Menu;
