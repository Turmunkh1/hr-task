import Image from "next/image";
import { Router, useRouter } from "next/router";
import { notification } from "antd";
import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";

export default function UserProfileEdit({
  setEditButton,
  userId,
}: {
  setEditButton: any;
  userId: any;
}) {
  const [formData, setFormData] = useState({});

  const [api, contextHolder] = notification.useNotification();
  const [anketData, setAnketData] = useState<any>([]);
  const router = useRouter();

  const openNotification = (placement: string) => {
    api.info({
      message: "Мэдэгдэл",
      description: placement,
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(dateString);
    setFormData((prevData) => ({
      ...prevData,
      ["birthday"]: dateString,
    }));
  };

  const onChangeSelect = (
    name: string | undefined,
    value: string | undefined
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [`${name}`]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("/api/serviceAnket", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: items[0].id, ...formData }),
    })
      .then((response) => {
        response.json();
        if (response.ok) {
          openNotification(" Амжилттай хадгаллаа.");
          setEditButton("list");
        } else {
          openNotification("Амжилтгүй боллоо.");
        }
      })
      .catch((e) => {
        openNotification("Алдаа гарлаа");
      });
  };

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
  }, []);

  const items = anketData.filter((item: any) => item.userId == userId);

  return (
    <div className="flex flex-col gap-5">
      {contextHolder}
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
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
            defaultValue={items[0]?.name}
            onChange={handleChange}
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
            defaultValue={items[0]?.lastname}
            id="lastname"
            onChange={handleChange}
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
            defaultValue={items[0]?.birthday}
            onChange={onChangeDate}
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
            defaultValue={items[0]?.address}
            onChange={handleChange}
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
            defaultValue={items[0]?.email}
            onChange={handleChange}
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
            defaultValue={items[0]?.phone}
            onChange={handleChange}
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
            name="education"
            id="education"
            onChange={(e) => {
              onChangeSelect("education", e.target.value);
            }}
            required
            defaultValue={items[0]?.education}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="Бага">Бага</option>
            <option value="Дунд">Дунд</option>
            <option value="Магистер">Магистер</option>
            <option value="Баклавар">Баклавар</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="hobby"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Хобби:
          </label>
          <select
            id="hobby"
            required
            onChange={(e) => {
              onChangeSelect("hobby", e.target.value);
            }}
            defaultValue={`"${items[0]?.hobby}"`}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="Дуулах">Дуулах</option>
            <option value="Бүжиглэх">Бүжиглэх</option>
            <option value="Сагс тоглох">Сагс тоглох</option>
            <option value="Хөлбөмбөг тоглох">Хөлбөмбөг тоглох</option>
            <option value="Гар бөмбөг тоглох">Гар бөмбөг тоглох</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="about"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Миний тухай
          </label>
          <textarea
            id="about"
            name="about"
            rows={4}
            defaultValue={items[0]?.about}
            onChange={(e) => {
              onChangeSelect("about", e.target.value);
            }}
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
