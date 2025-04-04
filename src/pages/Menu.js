import React, { useContext } from "react";
import { MenuList } from "../data/data";
import Layout from "../components/Layout/Layout";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2"; // Import SweetAlert for warning popup

const Menu = () => {
  const { orders, setOrders } = useContext(CartContext);

  const handleAddToCart = (item) => {
    const existingItem = orders.find((order) => order.name === item.name);

    if (existingItem) {
      // 🚨 If item already added, show warning popup
      Swal.fire({
        icon: "warning",
        title: "Item Already Added!",
        text: `${item.name} is already in your cart.`,
        confirmButtonColor: "#ff5733",
      });
    } else {
      // ✅ Add item to cart with quantity 1
      setOrders([...orders, { ...item, quantity: 1 }]);
    }
  };

  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2, p: 2 }}>
        {MenuList.map((menu) => (
          <Card key={menu.name} sx={{ maxWidth: 390, m: 2, transition: "transform 0.2s", "&:hover": { transform: "scale(1.03)" } }}>
            <CardActionArea>
              <CardMedia component="img" height="400" image={menu.image} alt={menu.name} />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {menu.name} - ₹{menu.price}
                </Typography>
                <Typography variant="body2" gutterBottom>{menu.description}</Typography>
                <Button
                  variant="contained"
                  color={orders.find((order) => order.name === menu.name) ? "secondary" : "primary"}
                  onClick={() => handleAddToCart(menu)}
                >
                  {orders.find((order) => order.name === menu.name) ? "Added ✅" : "ADD"}
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
