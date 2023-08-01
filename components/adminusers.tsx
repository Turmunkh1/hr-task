import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";

import { Modal } from "antd";
import AdminUserDetail from "./adminuserdetail";

const AdminUsers = () => {
  const [anketData, setAnketData] = useState([]);

  const [searchValue, setSearch] = useState("");
  const [searchParam, setSearchParam] = useState("");
  const [selectUserData, setSelectUserData] = useState([]);

  useEffect(() => {
    fetch("/api/serviceUser")
      .then((response) => response.json())
      .then((data) => setAnketData(data));
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (value: string) => {
    const filteredItems = anketData.filter((item: any) => item.id === value);
    setSelectUserData(filteredItems);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setSelectUserData([]);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setSelectUserData([]);
    setIsModalOpen(false);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value }: { name: string; value: any } = e.target;
    setSearch(value);
    setSearchParam(name);
  };

  const bySearch = (data: any, search: string, param: string) => {
    if (search) {
      switch (param) {
        case "name":
          return data.name.toLowerCase().includes(search.toLowerCase());
        case "username":
          return data.username.toLowerCase().includes(search.toLowerCase());

        case "lastname":
          return data.lastname.toLowerCase().includes(search.toLowerCase());
        case "password":
          return data.password.toLowerCase().includes(search.toLowerCase());
      }
    } else return data;
  };

  const filteredList = (fileList: any, search: string, param: string) => {
    return fileList.filter((data: any) => bySearch(data, search, param));
  };
  console.log("anket data :", anketData);

  return (
    <div className="relative overflow-x-auto p-5">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-md">
        <thead className="text-xs text-gray-700 uppercase bg-slate-300 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Нэвтрэх нэр
              <input
                name="username"
                id="username"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-light mt-2"
                placeholder="Хайх"
                onChange={onChange}
              />
            </th>
            <th scope="col" className="px-6 py-3">
              Нэр
              <input
                name="name"
                id="name"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-light mt-2"
                placeholder="Хайх"
                onChange={onChange}
              />
            </th>
            <th scope="col" className="px-6 py-3">
              Овог
              <input
                name="lastname"
                id="lastname"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-light mt-2"
                placeholder="Хайх"
                onChange={onChange}
              />
            </th>
            <th scope="col" className="px-6 py-3">
              Нууц үг{" "}
              <input
                name="password"
                id="password"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-light mt-2"
                placeholder="Хайх"
                onChange={onChange}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredList(anketData, searchValue, searchParam).map(
            (item: any, index: number) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex flex-row items-center gap-2 dark:text-white"
                  >
                    {item.id}
                  </th>

                  <td className="px-6 py-4">{item.username}</td>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.lastname}</td>
                  <td className="px-6 py-4">{item.password}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};
export default AdminUsers;
