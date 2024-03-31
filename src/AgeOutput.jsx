import { useState, useEffect } from "react";
const AgeOutput = (props) => {
  const { selectedYear, selectedMonth, selectedDay } = props.data;
  const [koreanAge, setKoreanAge] = useState(null); // 만 나이
  const [internationalAge, setInternationalAge] = useState(null); // 연 나이
  const [formerKoreanAge, setFormerKoreanAge] = useState(null); // 세는 나이

  useEffect(() => {
    calculateKoreanAge();
  });

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
    <div className="Korean-age-wrapper">
      {koreanAge !== null && (
        <div className="age--items">
          <div>
            Ordinary Korean Age: <span>{koreanAge - 1 < 0 ? 0 : koreanAge}</span>
            <p>aka 만 나이</p>
          </div>
          <div>
            Recent Korean Age(western age): <span>{internationalAge}</span>
            <p>aka 연 나이</p>
          </div>
          <div>
            Former Korean Age: <span>{formerKoreanAge}</span>
            <p>aka 세는 나이</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgeOutput;
