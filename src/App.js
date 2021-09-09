import React from "react";
import "./styles.css";
import { useState } from "react";

const foodDB = {
  Chinese: [
    { name: "Manchaow soup", rating: "3.5/5" },
    { name: "Chinese Sizzler", rating: "4.5/5" }
  ],
  Indian: [
    { name: "Chhole Bhature", rating: "5/5" },
    { name: "Dal Makhni", rating: "4.5/5" }
  ],
  Italian: [
    { name: "Lasagna", rating: "4/5" },
    { name: "Pizza", rating: "3.5/5" }
  ]
};

const foods = Object.keys(foodDB);

export default function App() {
  const [selectedcuisine, setCuisine] = useState("Indian");
  // const cuisineselected = foodDB[selectedFood];

  function clickHandler(foodcuisine) {
    console.log("button clicked");
    setCuisine(foodcuisine);
    console.log(foodcuisine);
  }

  return (
    <div className="App">
      <h1 style={{ color: "#F87171" }}> 🍔 Food Cuisines</h1>
      <p style={{ fontSize: "smaller", color: "#FCA5A5" }}>
        {" "}
        Checkout my favorite food.select a cuisine to get started
      </p>
      <div>
        {foods.map((foodcuisine) => {
          return (
            <button
              onClick={() => clickHandler(foodcuisine)}
              key={foodcuisine}
              style={{
                cursor: "pointer",
                backgroundColor: "#FEE2E2",
                borderRadius: "0.5rem",
                padding: "0.5rem 1rem",
                margin: "1rem 0.5rem",
                border: "1px solid #EF4444",
                color: "#EF4444"
              }}
            >
              {foodcuisine}
            </button>
          );
        })}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDB[selectedcuisine].map((food) => {
            return (
              <li
                key={food.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #EF4444",
                  width: "70%",
                  margin: "1rem 3rem",
                  borderRadius: "0.5rem"
                }}
              >
                <div style={{ fontSize: "larger", color: "#EF4444" }}>
                  {food.name}
                </div>
                <div style={{ fontSize: "small", color: "#F87171" }}>
                  {food.rating}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
