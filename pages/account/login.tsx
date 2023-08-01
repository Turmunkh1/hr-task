import Image from "next/image";
import { Router, useRouter } from "next/router";
import Link from "next/dist/client/link";
import React, { useState, useEffect } from "react";
import { setUserData } from "@/utils/utils";
import { notification } from "antd";
export default function Login({ message }: { message: boolean | null }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userJsonData, setUserJsonData] = useState([]);

  const [api, contextHolder] = notification.useNotification();

  const router = useRouter();
  const stateValue = router.query.signUp || null;
  console.log("router value", stateValue);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user: any = userJsonData.find(
      (u: { username: string; password: string }) =>
        u.username === username && u.password === password
    );

    if (user) {
      setUserData(user);
      localStorage.setItem("isLoggin", "true");
      router.push("/");
    } else {
      alert("Нэвтрэх нэр, нууц үг буруу байна.");
    }
  };

  const openNotification = (placement: string) => {
    api.info({
      message: "Мэдэгдэл",
      description: placement,
    });
  };

  if (stateValue == "success") {
    openNotification(
      "Бүртгэл амжилттай боллоо. Та бүртгэлээрээ нэвтэрч орно уу."
    );
  }

  useEffect(() => {
    fetch("/api/serviceUser")
      .then((response) => response.json())
      .then((data) => setUserJsonData(data));
  }, []);

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(../images/bg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {contextHolder}
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-full">
        <div className="w-full bg-white/80 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Нэвтрэх
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleLogin}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Нэвтрэх нэр:
                </label>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  type="username"
                  name="username"
                  id="username"
                  className="bg-gray-50/50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Нэвтрэх нэр"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Нууц үг
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50/50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full"
              >
                Нэвтрэх
              </button>
              <Link href={"/account/signup"}>
                <button
                  type="button"
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full mt-5"
                >
                  Бүртгүүлэх
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
