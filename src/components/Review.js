import React from "react";
import profileImg from "../assets/images/profile-img.svg";

const Review = ({ theme }) => {
  const reviews = [
    {
      text: "“Digift stood out from the crowd with an impressive team and even more impressive mission: harnessing the power of giftcards enterprises to support people who are restricted by banks in Nigeria.”",
      profile: profileImg,
      name: "Osemwengie Benjamin",
      profession: "Product Designer at Digift",
    },
    {
      text: "“Digift stood out from the crowd with an impressive team and even more impressive mission: harnessing the power of giftcards enterprises to support people who are restricted by banks in Nigeria.”",
      profile: profileImg,
      name: "Osemwengie Benjamin",
      profession: "Product Designer at Digift",
    },
    {
      text: "“Digift stood out from the crowd with an impressive team and even more impressive mission: harnessing the power of giftcards enterprises to support people who are restricted by banks in Nigeria.”",
      profile: profileImg,
      name: "Osemwengie Benjamin",
      profession: "Product Designer at Digift",
    },
  ];
  return (
    <div className="review">
      <h1>“Hear what happy customers are saying about Digift”</h1>
      <div className="card_wrapper">
        {reviews.map((review, index) => (
          <div
            className="review_card"
            key={index}
            style={{ background: theme && "#1e1a1a" }}
          >
            <div>
              <p>{review.text}</p>
              <div className="profile">
                <img src={review.profile} alt="profileImg" />
                <div>
                  <h5>{review.name}</h5>
                  <p>{review.profession}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
