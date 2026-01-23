import { cookies } from "next/headers";
import Image from "next/image";

export default async function CommonLayoutPage() {
  const cookiesData = await cookies();
  console.log(cookiesData.toString());
  const res = await fetch("http://localhost:5000/api/auth/get-session", {
    headers: {
      Cookie: cookiesData.toString(),
    },
    cache: "no-store",
  });
  console.log(res);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      CommonLayoutPage
    </div>
  );
}
