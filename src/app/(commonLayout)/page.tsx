import { userServices } from "@/services/user.service";

export default async function CommonLayoutPage() {
  const { data } = await userServices.getSession();
  console.log(data);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      CommonLayoutPage
    </div>
  );
}
