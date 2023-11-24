import React, { useState } from "react";
import ZodiacModal from "./ZodiacModal.jsx";

const ZodiacSign = (props) => {
  const birthYear = props.data.birthYear;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [zodiacText, setZodiacText] = useState("");
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
    const sign = zodiacSigns[zodiacIndex];

    return sign;
  };

  const ZodiacSignClick = (e) => {
    // console.log(e.target.textContent);
    const text = e.target.textContent;
    setZodiacText(text);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="Zodiac-Sign">
      <p>
        Your Zodiac Sign: <span onClick={ZodiacSignClick}>{calculateZodiacSign()}</span>
      </p>
      <ZodiacModal isOpen={modalIsOpen} closeModal={closeModal} content={`Zodiac: ${zodiacText}`} />
    </div>
  );
};

export default ZodiacSign;
