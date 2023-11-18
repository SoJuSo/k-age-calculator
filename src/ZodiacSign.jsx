import React from "react";

const ZodiacSign = (props) => {
  const birthYear = props.data.birthYear;
  const calculateZodiacSign = () => {
    const zodiacSigns = [
      "Monkey",
      "Chicken",
      "Dog",
      "Pig",
      "Rat",
      "Cow",
      "Tiger",
      "Rabbit",
      "Dragon",
      "Snake",
      "Horse",
      "Sheep",
    ];

    // 띠 계산 (12로 나눈 나머지를 기준으로 띠를 판별)
    const zodiacIndex = birthYear % 12;
    // console.log(zodiacIndex);
    const sign = zodiacSigns[zodiacIndex];

    return sign;
  };

  return (
    <div>
      <p>Your Zodiac Sign: {calculateZodiacSign()}</p>
    </div>
  );
};

export default ZodiacSign;
