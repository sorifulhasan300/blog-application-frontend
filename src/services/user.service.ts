import { cookies } from "next/headers";

export const userServices = {
  getSession: async function () {
    try {
      const cookiesData = await cookies();
      const res = await fetch("http://localhost:5000/api/auth/get-session", {
        headers: {
          Cookie: cookiesData.toString(),
        },
        cache: "no-store",
      });
      const session = await res.json();
      if (session === null) {
        return { data: null, error: "cookies not found" };
      }
      console.log(session);
      return { data: session, error: null };
    } catch (error) {
      console.log(error);
      return { data: null, error: "something was wrong" };
    }
  },
};
