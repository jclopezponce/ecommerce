"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { Card, CardHeader, CardBody, Divider, Image, CardFooter } from "@heroui/react";
import { useCart } from "@/components/cart/cart-context";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
// import {Button} from "@heroui/react";
import IconButton from '@mui/material/IconButton';


export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation">
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3 p-2 m-2">
          <p className="text-lg font-semibold">My Cart</p>
        </CardHeader>
        <Divider />
        <CardBody className="min-h-[80vh] space-y-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center min-h-80 text-center">
              <ShoppingCartOutlinedIcon htmlColor="black" fontSize="large" />
              <p className="text-xl font-semibold mt-2">Your Cart is empty.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-2 m-2"
              >
                <div className="flex items-center gap-2">
                  {item.image && (
                    <Image src={item.image} alt={item.name} width={50} />
                  )}
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      ${item.price} × {item.quantity} ={" "}
                      <span className="font-semibold">
                        ${item.price * item.quantity}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <IconButton
                    onClick={() => decreaseQty(item.id)}
                    color ="error"
                  >
                    <RemoveIcon fontSize="small"/>
                  </IconButton>
                  <span>{item.quantity}</span>
                  <IconButton
                    onClick={() => increaseQty(item.id)}
                    color="success">
                    <AddIcon fontSize="small"/>
                  </IconButton>
                </div>
              </div>
            ))
          )}
        </CardBody>
        <Divider/>
        <CardFooter className="flex justify-end">
          <div className="flex justify-end items-center p-2 m-2">
            <p className="font-semibold">Total: </p>
            <p className="font-bold text-lg">
              $
              {cart
                .reduce((sum, item) => sum + item.price * item.quantity, 0)
                .toFixed(2)}
            </p>
          </div>

        </CardFooter>
      </Card>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <Badge badgeContent={cart.reduce((sum, item) => sum + item.quantity, 0)} color="error">
          <ShoppingCartOutlinedIcon htmlColor="gray" />
        </Badge>
      </Button>
      <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
