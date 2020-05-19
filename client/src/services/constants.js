export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://cotripper-api.herokuapp.com"
    : "http://localhost:8000";

export const IMGUR_CLIENT_ID = process.env.REACT_APP_IMGUR_CLIENT_ID;