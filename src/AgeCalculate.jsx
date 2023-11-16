import React, { useState, useEffect } from "react";

const AgeCalculate = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, index) => currentYear - index);
  const months = Array.from({ length: 12 }, (_, index) => index + 1);

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedDay, setSelectedDay] = useState(1);

  useEffect(() => {
    updateDaysInMonth();
  }, [selectedMonth]);

  const updateDaysInMonth = () => {
    const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
    setSelectedDay((prevDay) => (prevDay > daysInMonth ? daysInMonth : prevDay));
  };

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value));
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(parseInt(e.target.value));
  };

  const handleDayChange = (e) => {
    setSelectedDay(parseInt(e.target.value));
  };

  return (
    <div>
      <label htmlFor="year">Select a year:</label>
      <select id="year" value={selectedYear} onChange={handleYearChange}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <label htmlFor="month">Select a month:</label>
      <select id="month" value={selectedMonth} onChange={handleMonthChange}>
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>

      <label htmlFor="day">Select a day:</label>
      <select id="day" value={selectedDay} onChange={handleDayChange}>
        {Array.from({ length: new Date(selectedYear, selectedMonth, 0).getDate() }, (_, index) => index + 1).map(
          (day) => (
            <option key={day} value={day}>
              {day}
            </option>
          )
        )}
      </select>

      <p>
        Selected Date: {selectedYear}-{selectedMonth < 10 ? `0${selectedMonth}` : selectedMonth}-
        {selectedDay < 10 ? `0${selectedDay}` : selectedDay}
      </p>
    </div>
  );
};

export default AgeCalculate;
