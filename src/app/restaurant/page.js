"use client"
import { useState } from "react";
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignup from "../_components/restaurantSignup";

const Restaurant = () => {
  const [login, SetLogin] = useState(true);
  return (
    <>
      <h1>Restaurant Login/Signup Page</h1>
      <RestaurantLogin />
      <RestaurantSignup></RestaurantSignup>
      <br />
      <br />
      <button>Already Have Account? Signup</button>
      <button>Login</button>
    </>
  );
};

export default Restaurant;
