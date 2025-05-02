import { useState } from "react";
import "./App.css";
import PersonCard from "./components/PersonCard";
import clsx from "clsx";
import Pagination from "./components/Pagination";
import { fakerPeople } from "./utils/fakerData";

const COLS_NUMBER = 3;
const SHOW_NUMBER = 6;
const INITIAL_PAGE = 1;

function getGridClasses(isExpanded: boolean, rowStartValue: number) {
  const colSpan = isExpanded ? "col-span-2" : "";
  const rowSpan = isExpanded ? "row-span-2" : "";
  const rowStart = `row-start-${rowStartValue}`;
  return clsx(
    "transition-all duration-300 ease-in-out",
    colSpan,
    rowSpan,
    rowStart
  );
}

function App() {
  const [expandedPersonId, setExpandedPersonId] = useState<string | null>(null);
  const [activePage, setActivePage] = useState(INITIAL_PAGE);

  const totalPages = Math.ceil(fakerPeople.length / SHOW_NUMBER);

  const handleExpand = (personId: string) => {    
    setExpandedPersonId((prev) => (prev === personId ? null : personId));
  };

  const handlePageChange = (newPage: number) => {
    // setExpandedPersonId(null); // Reset expanded state when changing pages if needed
    setActivePage(newPage);
  };

  const pagePeople = fakerPeople.slice(
    (activePage - 1) * SHOW_NUMBER,
    SHOW_NUMBER * activePage
  );
  const lastPersonId = pagePeople[pagePeople.length - 1]?.id;
  const secondLastPersonId = pagePeople[pagePeople.length - 2]?.id;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <Pagination
        currentPage={activePage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <div
        className={clsx(
          `grid grid-cols-${COLS_NUMBER} gap-4 grid-flow-row-dense`
        )}
        role="feed"
        aria-label="List of mental health specialists"
      >
        {pagePeople.map((person, index) => {
          const isExpanded = expandedPersonId === person.id;
          const isLastExpanded = expandedPersonId === lastPersonId;
          const isSecondLast = person.id === secondLastPersonId;
          const rowStartValue =
            isSecondLast &&
            isLastExpanded &&
            pagePeople.length % COLS_NUMBER === 0
              ? Math.ceil(pagePeople.length / COLS_NUMBER) + 1
              : 0;
          return (
            <PersonCard
              key={person.id}
              person={person}
              isExpanded={isExpanded}
              onExpand={handleExpand}
              className={getGridClasses(isExpanded, rowStartValue)}
              aria-posinset={index + 1}
              aria-setsize={pagePeople.length}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
