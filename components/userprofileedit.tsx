import Image from "next/image";
import { Router, useRouter } from "next/router";
import React from "react";
import { DatePicker } from "antd";

export default function UserProfileEdit({
  setEditButton,
}: {
  setEditButton: any;
}) {
  const onChange = () => {
    console.log("working");
  };
  return (
    <div className="flex flex-col gap-5">
      <form className="space-y-4 md:space-y-6" action="#">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Нэр:
          </label>
          <input
            type="name"
            name="name"
            id="name"
            className="bg-gray-50/50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Нэр"
            required
          />
        </div>
        <div>
          <label
            htmlFor="lastname"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Овог:
          </label>
          <input
            type="lastname"
            name="lastname"
            id="lastname"
            className="bg-gray-50/50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Овог"
            required
          />
        </div>
        <div>
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Төрсөн өдөр:
          </label>
          <DatePicker
            onChange={onChange}
            style={{ width: "100%" }}
            placeholder="Төрсөн өдрөө сонгоно уу"
            aria-required
          />
        </div>
        <div>
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Гэрийн хаяг:
          </label>
          <input
            type="address"
            name="address"
            id="address"
            className="bg-gray-50/50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=" Гэрийн хаяг оруулна уу"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            И-мейл хаяг:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Утас:
          </label>
          <input
            type="phone"
            name="phone"
            id="phone"
            placeholder="Утасны дугаар оруулна уу"
            className="bg-gray-50/50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="education"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Боловсрол:
          </label>
          <select
            id="education"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected> Боловсрол сонгоно уу</option>
            <option value="Бага">Бага</option>
            <option value="Дунд">Дунд</option>
            <option value="Магистер">Магистер</option>
            <option value="Баклавар">Баклавар</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="education"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Хобби:
          </label>
          <select
            id="education"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected> Хобби сонгоно уу</option>
            <option value="Дуулах">Дуулах</option>
            <option value="Бүжиглэх">Бүжиглэх</option>
            <option value="Сагс тоглох">Сагс тоглох</option>
            <option value="Хөлбөмбөг тоглох">Хөлбөмбөг тоглох</option>
            <option value="Гар бөмбөг тоглох">Гар бөмбөг тоглох</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Миний тухай
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Өөрийнхөө тухай бичнэ үү..."
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full"
        >
          Хадгалах
        </button>
      </form>
    </div>
  );
}
