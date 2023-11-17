import React, { useState, useEffect } from "react";
const AgeOutput = (props) => {
  const { selectedYear, selectedMonth, selectedDay } = props.data;
  const [koreanAge, setKoreanAge] = useState(null); // 만 나이
  const [internationalAge, setInternationalAge] = useState(null); // 연 나이
  const [formerKoreanAge, setFormerKoreanAge] = useState(null); // 세는 나이

  useEffect(() => {
    calculateKoreanAge();
  }, [selectedMonth, selectedYear, selectedDay]);

  const calculateKoreanAge = () => {
    const today = new Date();
    const birthDate = new Date(selectedYear, selectedMonth - 1, selectedDay);
    let age = today.getFullYear() - birthDate.getFullYear();
    setInternationalAge(age);
    setFormerKoreanAge(age + 1);

    // 만 나이 계산
    if (
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    setKoreanAge(age);
  };

  return (
    <div>
      {koreanAge !== null && (
        <div>
          <p>Ordinary Korean Age: {koreanAge - 1 < 0 ? 0 : koreanAge} || aka 만 나이</p>
          <p>Now Korean Age(western age): {internationalAge} || aka 연 나이</p>
          <p>Former Korean Age: {formerKoreanAge} || aka 세는 나이</p>
        </div>
      )}
    </div>
  );
};

export default AgeOutput;
