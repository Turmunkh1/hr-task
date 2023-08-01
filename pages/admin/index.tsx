import AdminUsers from "@/components/adminusers";
import AdminUsersAnket from "@/components/adminusersanket";
import React, { useState } from "react";

export default function Home() {
  const [activeMenu, setActiveMenu] = useState("anket");

  return (
    <div className="bg-blue-950 w-full md:p-5 flex flex-row h-screen">
      <div className="flex flex-col w-8 md:w-full max-w-[250px]">
        <a
          href="/"
          className="flex items-center mb-6 text-2xl font-normal text-white border-b p-2 md:p-5"
        >
          <span className="hidden md:block">Admin Panel</span>
        </a>

        <div
          onClick={() => {
            setActiveMenu("anket");
          }}
          className={`flex flex-row space-x-2 p-2 md:p-5 cursor-pointer ${
            activeMenu == "anket" ? "bg-slate-100 text-slate-950" : "text-white"
          }  hover:bg-slate-100/60 rounded-tl-[20px] rounded-bl-[20px]  text-lg`}
        >
          <span className="hidden md:block ">Анкет</span>
        </div>
        <div
          onClick={() => {
            setActiveMenu("user");
          }}
          className={`flex flex-row space-x-2 p-2 md:p-5 cursor-pointer ${
            activeMenu == "user" ? "bg-slate-100 text-slate-950" : "text-white"
          }  hover:bg-slate-100/60 rounded-tl-[20px] rounded-bl-[20px]  text-lg`}
        >
          <span className="hidden md:block">Хэрэглэгч</span>
        </div>
      </div>
      <div className="flex flex-col w-full bg-slate-100 rounded-[20px]">
        <div className="flex justify-between w-full  border-b p-5 shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
          <span className="h-8 text-slate-950 font-semibold">
            {" "}
            {activeMenu == "anket" ? "Анкет" : "Хэрэглэгч"}
          </span>
          <div className="flex flex-row items-center space-x-5">
            <img
              src="/images/bg.jpg"
              className="w-8 h-8 object-cover rounded-full"
            />
          </div>
        </div>
        {activeMenu == "anket" ? <AdminUsersAnket /> : <AdminUsers />}
      </div>
    </div>
  );
}
