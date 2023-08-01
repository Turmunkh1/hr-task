import UserProfile from "@/components/userprofile";
import UserProfileEdit from "@/components/userprofileedit";
import React, { useState, useEffect } from "react";
import withAuth from "@/components/auth";
import { User } from "@/types/type";
import { getUserData } from "@/utils/utils";

import { useRouter } from "next/router";
import UserProfileCreate from "@/components/userprofilecreate";
const index = () => {
  const router = useRouter();
  const [editbutton, setEditButton] = useState("list");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = getUserData();
    setUser(storedUser);
  }, [editbutton]);

  return (
    <main
      className="flex min-h-screen flex-col container mx-auto"
      style={{
        backgroundImage: `url(../images/bg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full flex flex-col lg:flex-row gap-5 py-5 justify-center">
        <div className="flex flex-col w-[700px] rounded-lg bg-white shadow-md p-5 h-full">
          {editbutton == "list" && (
            <UserProfile
              setEditButton={setEditButton}
              userId={user?.id}
              editbutton={editbutton}
            />
          )}
          {editbutton == "edit" && (
            <UserProfileEdit setEditButton={setEditButton} userId={user?.id} />
          )}
          {editbutton == "create" && (
            <UserProfileCreate
              setEditButton={setEditButton}
              userId={user?.id}
            />
          )}
        </div>
        <div className="flex flex-col w-[360px] rounded-lg bg-white shadow-md p-5 gap-5 h-full">
          <div className="flex flex-row gap-5">
            <img
              src="images/bg.jpg"
              alt="profile"
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex flex-col text-black justify-between py-2">
              <span>Сайна байна уу </span>
              <span>{user?.name}</span>
            </div>
          </div>
          <button
            onClick={() => {
              localStorage.clear();
              router.reload();
            }}
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Гарах
          </button>
        </div>
      </div>
    </main>
  );
};

export default withAuth(index);
