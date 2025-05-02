import clsx from "clsx";
import { Person } from "../utils/types";
import React from "react";

type Props = {
  person: Person;
  isExpanded?: boolean;
  onExpand: (personId: string) => void;
  className?: string;
};
export default function PersonCard({
  person,
  isExpanded = false,
  onExpand,
  className,
}: Props) {
  return (
    <div
      className={`group bg-white text-card-foreground rounded-xl shadow-sm overflow-hidden cursor-pointer relative transition-all duration-500 ease-in-out border border-gray-100 
            md:hover:border-teal-100 md:hover:bg-white md:hover:shadow-lg ${className}`}
      onClick={(e) => {
        e.stopPropagation();
        onExpand(person.id);
      }}
    >
      <div className="card-content h-full md:overflow-visible">
        <div className="p-6 h-full flex flex-col">
          <div className="card-scrollable-content">
            <div className="flex items-start gap-4">
              {/* Profile Image Section */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-white shadow-lg transition-all duration-300 group-hover:ring-3 group-hover:ring-teal-200 group-hover:scale-105">
                  <img
                    src={person.profileImage}
                    alt={`${person.name}'s profile`}
                    crossOrigin="anonymous"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-1 end-0">
                  <div className="relative group/status">
                    <div
                      className={`w-3 h-3 rounded-full ring-2 ring-white transition-all duration-300 ${
                        person.status === "online"
                          ? "bg-green-500 group-hover:bg-green-400"
                          : "bg-red-500 group-hover:bg-red-400"
                      }`}
                    ></div>
                    <div className="absolute end-4 -bottom-1 whitespace-nowrap bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs pointer-events-none transition-all duration-300 border border-gray-100 opacity-0 group-hover/status:opacity-100 group-hover/status:translate-x-0 shadow-sm">
                      {person.status === "online"
                        ? "متواجد الآن"
                        : "غير متواجد"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold transition-all duration-300 text-xl text-gray-800 group-hover:text-teal-600">
                    {person.name}, {person.age}
                  </h3>
                  <span className="px-2 py-1 bg-teal-50 text-gray-600 rounded-full text-xs capitalize transition-all duration-300 group-hover:bg-teal-100">
                    {person.gender}
                  </span>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-clock w-4 h-4 me-2 flex-shrink-0 text-gray-500"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span className="truncate">{person.availability}</span>
                </div>
              </div>

              {/* Notification Button */}
              <div className="flex-shrink-0">
                <button
                  title="أبلغني عند التواجد"
                  className="group/btn inline-flex items-center justify-center w-10 h-10 border-2 border-gray-200 text-gray-400 hover:bg-teal-500 hover:text-white focus:bg-teal-500 focus:text-white rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-bell w-5 h-5"
                  >
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {person.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-teal-50 text-gray-600 rounded-full text-xs capitalize transition-all duration-300 group-hover:bg-teal-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className={clsx("mt-4", !isExpanded && "pb-10")}>
              <p className="transition-all duration-300 text-sm text-gray-600 line-clamp-2 group-hover:text-gray-700">
                {person.description}
              </p>
            </div>

            {/* Expanded Content */}
            {isExpanded && (
              <div className="content-transition mt-6 space-y-6 animate-fadeIn">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <StatBlock
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-star w-5 h-5 mx-auto mb-2 text-primary"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    }
                    label="Rating"
                    value={`${person.rating}/5`}
                  />
                  <StatBlock
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-message-circle w-5 h-5 mx-auto mb-2 text-primary"
                      >
                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                      </svg>
                    }
                    label="Sessions"
                    value={`${person.sessions}+`}
                  />
                  <StatBlock
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-heart w-5 h-5 mx-auto mb-2 text-primary"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </svg>
                    }
                    label="Helped"
                    value={`${person.helpedCount}+`}
                  />
                  <StatBlock
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-users w-5 h-5 mx-auto mb-2 text-primary"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    }
                    label="Return Rate"
                    value={`${person.returnRate}%`}
                  />
                </div>

                {/* Availability Schedule */}
                <div>
                  <h4 className="text-sm font-semibold text-teal-600 mb-2 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-calendar w-4 h-4"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    Availability times
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {person.availabilitySchedule.map((schedule) => (
                      <div
                        key={schedule.day}
                        className="bg-teal-50 rounded-lg p-2 text-sm border border-teal-100 transition-all duration-300 hover:border-teal-200 hover:bg-teal-100"
                      >
                        <span className="font-medium text-teal-600">
                          {schedule.day}:
                        </span>{" "}
                        {schedule.hours}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h4 className="text-sm font-semibold text-teal-600 mb-2 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-languages-icon lucide-languages"
                    >
                      <path d="m5 8 6 6" />
                      <path d="m4 14 6-6 2-3" />
                      <path d="M2 5h12" />
                      <path d="M7 2h1" />
                      <path d="m22 22-5-10-5 10" />
                      <path d="M14 18h6" />
                    </svg>
                    Languages
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {person.languages.map((language) => (
                      <span
                        key={language}
                        className="px-2 py-1 bg-teal-50 rounded-full text-xs border border-teal-100 transition-all duration-300 hover:border-teal-200 hover:bg-teal-100"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Expand Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onExpand(person.id);
        }}
        className="absolute bottom-5 end-5 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-teal-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 border border-gray-200 hover:scale-110 hover:border-teal-200"
      >
        {isExpanded ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-minimize2-icon lucide-minimize-2 w-5 h-5 text-gray-400 group-hover:text-teal-500 transition-colors duration-300"
          >
            <polyline points="4 14 10 14 10 20" />
            <polyline points="20 10 14 10 14 4" />
            <line x1="14" x2="21" y1="10" y2="3" />
            <line x1="3" x2="10" y1="21" y2="14" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-maximize2 w-5 h-5 text-gray-400 group-hover:text-teal-500 transition-colors duration-300"
          >
            <polyline points="15 3 21 3 21 9"></polyline>
            <polyline points="9 21 3 21 3 15"></polyline>
            <line x1="21" x2="14" y1="3" y2="10"></line>
            <line x1="3" x2="10" y1="21" y2="14"></line>
          </svg>
        )}
      </button>
    </div>
  );
}

function StatBlock({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-teal-50 rounded-lg p-3 text-center border border-teal-100 hover:border-teal-200 transition-all duration-300 hover:bg-teal-100">
      <div className="flex justify-center mb-2">{icon}</div>
      <div className="text-sm font-medium text-teal-600">{label}</div>
      <div className="text-lg font-bold text-gray-800">{value}</div>
    </div>
  );
}
