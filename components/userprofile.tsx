import React from "react";

const UserProfile = ({ setEditButton }: { setEditButton: any }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col items-center justify-center">
        <span className="text-gray-500 text-sm font-normal">Миний тухай</span>
      </div>
      <div className="grid grid-cols-2 gap-5 text-black">
        <div className="flex flex-col">
          <span className="text-gray-500 text-sm font-normal">Нэр:</span>
          <span className="text-base font-medium">Төрмөнх</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-500 text-sm font-normal">Овог:</span>
          <span className="text-base font-medium">Төрмөнх</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-500 text-sm font-normal">
            Төрсөн өдөр:
          </span>
          <span className="text-base font-medium">Төрмөнх</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-500 text-sm font-normal">
            Гэрийн хаяг:
          </span>
          <span className="text-base font-medium">Төрмөнх</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-500 text-sm font-normal">Email хаяг:</span>
          <span className="text-base font-medium">Төрмөнх</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-500 text-sm font-normal">
            Утасны дугаар:
          </span>
          <span className="text-base font-medium">Төрмөнх</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-500 text-sm font-normal">Боловсрол:</span>
          <span className="text-base font-medium">Төрмөнх</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-500 text-sm font-normal">Хобби:</span>
          <span className="text-base font-medium">Төрмөнх</span>
        </div>
      </div>
      <button
        onClick={() => {
          setEditButton(true);
        }}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Засах
      </button>
    </div>
  );
};
export default UserProfile;
