import axios from "axios";
import toast from "react-hot-toast";

export const buildList = async (email, type) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_backend_url}/jvListRoutes/newsletter`,
      { email, type }
    );
    console.log("🚀 ~ buildList ~ response:", response);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      const errorMessage = error.response.data.msg;
      toast.error(errorMessage);
      return {
        status: false,
        data: null,
      };
    } else {
      toast.error("An error occurred while processing your request.");
      return {
        error: "An error occurred while processing your request.",
        status: false,
        data: null,
      };
    }
  }
};
