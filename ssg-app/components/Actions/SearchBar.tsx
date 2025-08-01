import React from "react";
import { ChevronDown } from "lucide-react";

type Props = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  department: string;
  onDepartmentChange: (value: string) => void;
  session: string;
  onSessionChange: (value: string) => void;
};

const SearchBar: React.FC<Props> = ({
  searchQuery,
  onSearchChange,
  department,
  onDepartmentChange,
  session,
  onSessionChange,
}) => {
  return (
    <div className="w-full max-w-[920px]">
      <div className="flex flex-no-wrap items-center gap-4 justify-between">
        {/* Search Bar (Left) */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search"
          className="w-full sm:w-[480px] h-12 px-6 border border-gray-300 rounded-full bg-near-white shadow-sm text-base font-medium"
        />

        {/* Dropdown filters (Right) */}
        <div className="hidden sm:flex gap-4">
          {/* Department Type Dropdown */}
          <div className="relative h-12">
            <select
              value={department}
              onChange={(e) => onDepartmentChange(e.target.value)}
              className="appearance-none h-full min-w-[150px] px-6 border border-gray-300 rounded-xl bg-near-white shadow-sm text-base font-medium text-black"
              style={{ color: "var(--color-dark-neutral)" }}
            >
              <option value="">Department</option>
              <option value="Legislative">Legislative</option>
              <option value="Executive">Executive</option>
              <option value="Judicial">Judicial</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-black">
              <ChevronDown size={16} />
            </div>
          </div>

          {/* Session Type Dropdown */}
          <div className="relative h-12">
            <select
              value={session}
              onChange={(e) => onSessionChange(e.target.value)}
              className="appearance-none h-full min-w-[150px] px-6 border border-gray-300 rounded-xl bg-near-white shadow-sm text-base font-medium text-black"
              style={{ color: "var(--color-dark-neutral)" }}
            >
              <option value="">Session</option>
              <option value="Regular">Regular</option>
              <option value="Emergency">Emergency</option>
              <option value="Joint">Joint</option>
              <option value="Special">Special</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-black">
              <ChevronDown size={16} />
            </div>
          </div>
        </div>

        {/* On Small Screens (Mobile Dropdown) (Merged Departmenr & Sessions) */}
        <div className="relative h-12 sm:hidden">
          <select
            onChange={(e) => {
              const value = e.target.value;
              if (["Legislative", "Executive", "Judicial"].includes(value)) {
                onDepartmentChange(value);
                onSessionChange("");
              } else if (
                ["Regular", "Emergency", "Joint", "Special"].includes(value)
              ) {
                onSessionChange(value);
                onDepartmentChange("");
              } else {
                onDepartmentChange("");
                onSessionChange("");
              }
            }}
            className="appearance-none h-full w-[200px] px-6 border border-gray-300 rounded-xl bg-near-white shadow-sm text-base font-medium text-black"
          >
            {/* Dropdown choices here */}
            <option value="">Filter by...</option>
            <optgroup label="Department">
              <option value="Legislative">Legislative</option>
              <option value="Executive">Executive</option>
              <option value="Judicial">Judicial</option>
            </optgroup>
            <optgroup label="Session">
              <option value="Regular">Regular</option>
              <option value="Emergency">Emergency</option>
              <option value="Joint">Joint</option>
              <option value="Special">Special</option>
            </optgroup>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-black">
            <ChevronDown size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
