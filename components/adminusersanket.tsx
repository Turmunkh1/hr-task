import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { Modal } from "antd";
import AdminUserDetail from "./adminuserdetail";

const AdminUsersAnket = () => {
  const [anketData, setAnketData] = useState([]);

  const [searchValue, setSearch] = useState("");
  const [searchParam, setSearchParam] = useState("");
  const [selectUserData, setSelectUserData] = useState([]);

  useEffect(() => {
    fetch("/api/serviceAnket")
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
        case "phone":
          return data.phone.toLowerCase().includes(search.toLowerCase());
        case "education":
          return data.education.toLowerCase().includes(search.toLowerCase());

        case "hobby":
          return data.hobby.toLowerCase().includes(search.toLowerCase());
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
              Утас
              <input
                name="phone"
                id="phone"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-light mt-2"
                placeholder="Хайх"
                onChange={onChange}
              />
            </th>
            <th scope="col" className="px-6 py-3">
              Боловсрол{" "}
              <input
                name="education"
                id="education"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-light mt-2"
                placeholder="Хайх"
                onChange={onChange}
              />
            </th>
            <th scope="col" className="px-6 py-3">
              Хобби{" "}
              <input
                name="hobby"
                id="hobby"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-light mt-2"
                placeholder="Хайх"
                onChange={onChange}
              />
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {filteredList(anketData, searchValue, searchParam).map(
            (item: any, index: number) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex flex-row items-center gap-2 dark:text-white"
                  >
                    <img
                      src="/images/bg.jpg"
                      className="w-8 h-8 object-cover rounded-full"
                    />
                    {item.name}
                  </th>
                  <td className="px-6 py-4">{item.phone}</td>
                  <td className="px-6 py-4">{item.education}</td>
                  <td className="px-6 py-4">{item.hobby}</td>
                  <td className="px-3 py-2 flex w-auto justify-center items-center">
                    <button
                      onClick={() => {
                        showModal(item.id);
                      }}
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-light rounded-lg  px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-xs"
                    >
                      Дэлгэрэнгүй
                    </button>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
      <Modal
        title="Анкет дэлгэрэнгүй"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <AdminUserDetail data={selectUserData} />
      </Modal>
    </div>
  );
};
export default AdminUsersAnket;
