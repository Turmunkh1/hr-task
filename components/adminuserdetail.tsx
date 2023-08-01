import React, { useState, useEffect } from "react";

const AdminUserDetail = ({ data }: { data: any }) => {
  const userdata = data[0];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-5 ">
        <img
          src="/images/bg.jpg"
          className="w-20 h-20 object-cover rounded-md"
        />
        <div className="flex flex-col justify-center">
          <span className="text-slate-900 font-semibold text-lg">
            {userdata.name}
          </span>
          <span className="text-slate-900 font-semibold text-lg">
            {userdata.lastname}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-gray-500 text-sm font-normal">
          {userdata.about}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-5 text-black">
        <div className="flex flex-col">
          <span className="text-gray-500 text-sm font-normal">
            Төрсөн өдөр:
          </span>
          <span className="text-base font-medium">{userdata.birthday}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-500 text-sm font-normal">
            Гэрийн хаяг:
          </span>
          <span className="text-base font-medium">{userdata.address}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-500 text-sm font-normal">Email хаяг:</span>
          <span className="text-base font-medium">{userdata.email}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-500 text-sm font-normal">
            Утасны дугаар:
          </span>
          <span className="text-base font-medium">{userdata.phone}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-500 text-sm font-normal">Боловсрол:</span>
          <span className="text-base font-medium">{userdata.education}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-500 text-sm font-normal">Хобби:</span>
          <span className="text-base font-medium">{userdata.hobby}</span>
        </div>
      </div>
    </div>
  );
};
export default AdminUserDetail;
