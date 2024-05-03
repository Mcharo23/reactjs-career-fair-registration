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

  // const attendEvent = async (eventId: number) => {
  //   try {
  //     const response = await axios.post(
  //       `http://localhost:8080/career-fair/events/attend/${eventId}`,
  //       {},
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${authToken}`,
  //         },
  //       }
  //     );
  //     console.log(response);
  //     return response.data.message;
  //   } catch (error) {
  //     console.error(`Failed to attend event with ID ${eventId}:`, error);
  //     throw error;
  //   }
  // };

  const attendEvent = async (eventId: number) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${authToken}`);

    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        `http://localhost:8080/career-fair/events/attend/${String(eventId)}`,
        requestOptions
      );
      if (!response.ok) {
        console.log(response.text());
        throw new Error(
          `Failed to attend event with ID ${eventId}: ${response.statusText}`
        );
      }
      const result = await response.text();

      return result;
    } catch (error) {
      console.error(`Failed to attend event with ID ${eventId}:`, error);
      throw error;
    }
  };

  return { fetchAllEvents, attendEvent };
};

export default useEventRequest;
