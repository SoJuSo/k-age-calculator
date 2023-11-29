import React, { useState } from "react";

const ZodiacModal = ({ isOpen, closeModal, content }) => {
  // const [zodiacContent, setZodiacContent] = useState("");

  // content !== "" ? setZodiacContent(content) : 0;
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span onClick={closeModal} className="close-button">
              &times;
            </span>
            <p>{content}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ZodiacModal;
