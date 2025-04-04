import React, { useContext } from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography, Card, CardContent, CardMedia, Button, IconButton } from "@mui/material";
import { CartContext } from "../context/CartContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

const Orders = () => {
  const { orders, setOrders } = useContext(CartContext);

  if (!orders) return <Typography>Loading...</Typography>; // Prevent crash if orders is undefined

  const handleIncrease = (index) => {
    const updatedOrders = [...orders];
    updatedOrders[index].quantity += 1;
    setOrders(updatedOrders);
  };

  const handleDecrease = (index) => {
    const updatedOrders = [...orders];
    if (updatedOrders[index].quantity > 1) {
      updatedOrders[index].quantity -= 1;
    } else {
      updatedOrders.splice(index, 1);
    }
    setOrders(updatedOrders);
  };

  const handleRemove = (index) => {
    setOrders(orders.filter((_, i) => i !== index));
  };

  const totalPrice = orders.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Layout>
      <Box sx={{ textAlign: "center", mt: 5, p: 3 }}>
        <Typography variant="h4" gutterBottom>Your Orders</Typography>

        {orders.length === 0 ? (
          <Typography variant="body1" sx={{ fontSize: "1.2rem", color: "gray" }}>
            No items in your order. Add some delicious food! 🍔🍕
          </Typography>
        ) : (
          <>
            <Box sx={{ display: "grid", gap: 2, maxWidth: "800px", margin: "auto" }}>
              {orders.map((item, index) => (
                <Card key={index} sx={{ display: "flex", alignItems: "center", p: 2 }}>
                  <CardMedia component="img" sx={{ width: 120, height: 120, borderRadius: "8px" }} image={item.image} alt={item.name} />
                  
                  <CardContent sx={{ flex: 1 }}>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body2" color="textSecondary">{item.description}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: "bold", mt: 1 }}>
                      ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}
                    </Typography>
                  </CardContent>

                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton onClick={() => handleDecrease(index)} color="primary">
                      <RemoveIcon />
                    </IconButton>
                    <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
                    <IconButton onClick={() => handleIncrease(index)} color="primary">
                      <AddIcon />
                    </IconButton>
                  </Box>

                  <IconButton onClick={() => handleRemove(index)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </Card>
              ))}
            </Box>

            <Typography variant="h5" sx={{ mt: 3, fontWeight: "bold" }}>
              Total: ₹{totalPrice}
            </Typography>

            <Button variant="contained" color="success" sx={{ mt: 2 }}>
              ✅ Place Order
            </Button>
          </>
        )}
      </Box>
    </Layout>
  );
};

export default Orders;
