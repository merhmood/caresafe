"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Search from "@/components/Search";
import { API_URL } from "@/utils/constants";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    // Remove previous search results from local storage
    localStorage.removeItem("search_result");

    const options = {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    // Perform fetch only when the isSearch is true to avoid
    // unnecessary network request
    if (isSearch) {
      // Fetch search results from the API
      fetch(`${API_URL}/search?q=${search}`, options)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // Store search results in local storage
          localStorage.setItem("search_result", JSON.stringify(data));
        });
    }
  }, [isSearch, search]);

  return (
    <main className="grid place-items-center h-svh lg:h-screen">
      <div className="flex flex-col justify-between w-10/12 max-w-xl">
        <div>
          <h2 className="text-center text-lg lg:text-4xl mb-4 font-semibold">
            Welcome
          </h2>
        </div>
        <Search
          search={search}
          setSearch={setSearch}
          className="pl-5 pr-12 lg:pl-5 lg:pr-7 py-3 lg:py-4"
          searchRequest={setIsSearch}
        />
        <div className="flex flex-col items-center mt-12">
          <a
            className="mt-16 lg:font-semibold border w-fit py-2 lg:py-2 px-7 m-auto mb-6 rounded-full text-xs lg:text-base"
            href="https://biz.caresafe.merhmood.me"
            target="_"
          >
            For Business
          </a>
          <div className="flex justify-center items-center">
            <Image
              src="/logo.svg"
              alt="logo"
              width={30}
              height={30}
              className="rounded-md"
            />
            <h3 className="ml-1 lg:text-lg">caresafe</h3>
          </div>
        </div>
      </div>
    </main>
  );
}
