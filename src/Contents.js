import React from "react";
import styled from "styled-components";

const Title = styled.div`
  text-align: center;
  font-size: 2rem;
  font-family: "Scheherazade New", serif;
  font-weight: 600;
  margin-top: 2rem;
`;

const Image = styled.img`
  width: 35%;
  margin-top: 3vh;
  margin-right: 5%;
  border: 1px solid black;
  display: inline-block;
  @media (max-width: 768px) {
    display: none;
  }
`;

const TextBox = styled.div`
  display: inline-block;
  margin-top: 3vh;
  width: 40%;
  text-align: center;
  @media (max-width: 768px) {
    margin-top: 3vh;
    width: 80%;
  }
`;

const Contents = () => {
  return (
    <div>
      <Title>Contents</Title>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image src="data:image/png;base64,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" />
        <TextBox>
          <h2>Responsive web design basic</h2>
          <p>
            The use of mobile devices to surf the web continues to grow at an
            astronomical pace, and these devices are often constrained by
            display size and require a different approach to how content is laid
            out on the screen
          </p>
        </TextBox>
      </div>
    </div>
  );
};

export default Contents;
