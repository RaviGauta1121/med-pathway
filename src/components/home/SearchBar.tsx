"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("doctors");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/${category}?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="medical-card">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-medical-primary focus:outline-none"
        >
          <option value="doctors">Doctors</option>
          <option value="hospitals">Hospitals</option>
          <option value="consultation">Consultation</option>
          <option value="health-info">Health Info</option>
        </select>
        
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search for doctors, hospitals, or services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-medical-primary focus:outline-none"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
        
        <button
          type="submit"
          className="px-8 py-3 bg-medical-primary text-white rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          Search
        </button>
      </form>
    </div>
  );
}
