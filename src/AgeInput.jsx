import React, { useState } from "react";
import AgeOutput from "./AgeOutput.jsx";

const AgeInput = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, index) => currentYear - index);
  const months = Array.from({ length: 12 }, (_, index) => index + 1);

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedDay, setSelectedDay] = useState(1);
  // const [koreanAge, setKoreanAge] = useState(null); // 만 나이
  // const [internationalAge, setInternationalAge] = useState(null); // 연 나이
  // const [formerKoreanAge, setFormerKoreanAge] = useState(null); // 세는 나이

  // useEffect(() => {
  //   calculateKoreanAge();
  // }, [selectedMonth, selectedYear, selectedDay]);

  // const calculateKoreanAge = () => {
  //   const today = new Date();
  //   const birthDate = new Date(selectedYear, selectedMonth - 1, selectedDay);

  //   let age = today.getFullYear() - birthDate.getFullYear();
  //   console.log(age);

  //   setInternationalAge(age);
  //   setFormerKoreanAge(age + 1);
  //   // 만 나이 계산
  //   if (
  //     today.getMonth() < birthDate.getMonth() ||
  //     (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
  //   ) {
  //     age--;
  //   }
  //   setKoreanAge(age);
  // };

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value));
    // const targetValue = parseInt(e.target.value);
    // selectedYear !== targetValue ? setSelectedYear(parseInt(e.target.value)) : 0;
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(parseInt(e.target.value));
    // const targetValue = parseInt(e.target.value);
    // selectedMonth !== targetValue ? setSelectedMonth(parseInt(e.target.value)) : 0;
  };

  const handleDayChange = (e) => {
    setSelectedDay(parseInt(e.target.value));
    // const targetValue = parseInt(e.target.value);
    // selectedDay !== targetValue ? setSelectedDay(parseInt(e.target.value)) : 0;
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

      {/* {koreanAge !== null && (
        <div>
          <p>만 나이 Korean Age: {koreanAge - 1 < 0 ? 0 : koreanAge}</p>
          <p>연 나이 Korean Age: {internationalAge}</p>
          <p>세는 나이 Korean Age: {formerKoreanAge}</p>
        </div>
      )} */}
      <AgeOutput data={{ selectedYear: selectedYear, selectedDay: selectedDay, selectedMonth: selectedMonth }} />
    </div>
  );
};

export default AgeInput;
