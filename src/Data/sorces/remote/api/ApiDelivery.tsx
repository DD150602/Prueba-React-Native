import axios from "axios";

export const ApiDelivery = axios.create({
  baseURL:'http://192.168.80.13:3000/api',
  headers: {
    'Content-Type': 'application/json'
  }
})
