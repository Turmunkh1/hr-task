import React, { useEffect, useState } from "react";

const UserProfile = ({
  setEditButton,
  userId,
  editbutton,
}: {
  setEditButton: any;
  userId: any;
  editbutton: any;
}) => {
  const [anketData, setAnketData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/serviceAnket");
        const jsonData = await response.json();
        setAnketData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [editbutton]);

  const items = anketData.filter((item: any) => item.userId == userId);

  return (
    <div className="flex flex-col">
      {items.length == 0 ? (
        <div className="flex flex-col gap-5 justify-center items-center">
          <span className="text-slate-900">Таны анкет хоосон байна.</span>
          <button
            onClick={() => {
              setEditButton("create");
            }}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Анкет үүсгэх
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-center justify-center">
            <span className="text-gray-500 text-sm font-normal">
              {items[0]?.about}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-5 text-black">
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm font-normal">Нэр:</span>
              <span className="text-base font-medium">{items[0]?.name}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm font-normal">Овог:</span>
              <span className="text-base font-medium">
                {items[0]?.lastname}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm font-normal">
                Төрсөн өдөр:
              </span>
              <span className="text-base font-medium">
                {items[0]?.birthday}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm font-normal">
                Гэрийн хаяг:
              </span>
              <span className="text-base font-medium">{items[0]?.address}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm font-normal">
                Email хаяг:
              </span>
              <span className="text-base font-medium">{items[0]?.email}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm font-normal">
                Утасны дугаар:
              </span>
              <span className="text-base font-medium">{items[0]?.phone}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm font-normal">
                Боловсрол:
              </span>
              <span className="text-base font-medium">
                {items[0]?.education}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm font-normal">Хобби:</span>
              <span className="text-base font-medium">{items[0]?.hobby}</span>
            </div>
          </div>
          <button
            onClick={() => {
              setEditButton("edit");
            }}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Засах
          </button>
        </div>
      )}
    </div>
  );
};
export default UserProfile;
