// import { useContext } from "react";
// import AuthContext from "../../../context/auth-context";
// import { EventType } from "../../../lib/type";

// const useEventRequest = () => {
//   const authContext = useContext(AuthContext);

//   if (!authContext) {
//     throw new Error("AuthContext is not defined");
//   }

//   const { authToken } = authContext;

//   const fetchAllEvents = async (): Promise<EventType[] | null> => {
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     myHeaders.append("Authorization", `Bearer ${authToken}`);

//     const requestOptions: RequestInit = {
//       method: "GET",
//       headers: myHeaders,
//       redirect: "follow",
//     };

//     try {
//       const response = await fetch(
//         `http://localhost:8080/career-fair/events`,
//         requestOptions
//       );

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       return response.json();
//     } catch (error) {
//       console.error(error);
//       return null;
//     }
//   };

//   return { fetchAllEvents };
// };

// export default useEventRequest;

import { useContext } from "react";
import axios from "axios";
import AuthContext from "../../../context/auth-context";
import { EventType } from "../../../lib/type";

const useEventRequest = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext is not defined");
  }

  const { authToken } = authContext;

  const fetchAllEvents = async (): Promise<EventType[] | null> => {
    try {
      const response = await axios.get(
        "http://localhost:8080/career-fair/events",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return { fetchAllEvents };
};

export default useEventRequest;
