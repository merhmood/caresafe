"use client";

import { useState } from "react";
import Image from "next/image";
import Search from "@/components/Search";
import SearchItem from "@/components/SearchItem";

export default function SearchPage() {
  const [search, setSearch] = useState("");
  return (
    <main className="w-10/12 max-w-7xl mx-auto">
      <header>
        <h3 className="text-center lg:text-left text-lg lg:text-4xl mt-10 font-semibold">
          Omni Care
        </h3>
        <div className="lg:w-6/12 mt-4 lg:mt-8 lg:ml-6">
          <Search
            search={search}
            setSearch={setSearch}
            className="pl-4 pr-10 lg:px-6 py-2.5"
          />
        </div>
      </header>
      <section>
        <p className="mt-4 lg:mt-8 lg:ml-6 text-xs lg:text-base">
          Search results found!
        </p>
        <div className="md:flex md:justify-between">
          <SearchItem />
        </div>
      </section>
    </main>
  );
}