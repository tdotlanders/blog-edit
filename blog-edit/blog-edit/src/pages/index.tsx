import React from "react";

interface CardProps {
  id: string;
  title: string;
  imageURL: string;
  description: string;
  createdAt: string;
}

const cardData: CardProps = {
  id: "1291dec2-7836-41d2-a80c-37bea30316ba",
  title: "Meu primeiro post",
  imageURL: "https://picsum.photos/300/200",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  createdAt: "2023-01-21T00:00:00.000Z",
};

const RootPage = () => {
  return (
    <div className="card">
      <img src="" alt="" className="card-image" />
      <div className="card-content">
        <h2>{cardData.title}</h2>
      </div>
    </div>
  );
};

export default RootPage;
