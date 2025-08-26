// src/pages/Tours.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Tours = () => {
  const navigate = useNavigate();

  /* ----------  STYLES ---------- */
  const sectionStyle = {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "100px",
  };
  const imageStyle = { width: 300, height: 300, marginRight: 40 };
  const textStyle = { textAlign: "center" };
  const paragraphStyle = { fontSize: 20, lineHeight: "30px", letterSpacing: 1 };

  /* ----------  STATE ---------- */
  const [selectedTrip, setSelectedTrip] = useState(null); // shows transport buttons
  const [openDetails, setOpenDetails] = useState(null); // details toggle

  /* ----------  HELPERS ---------- */
  const handlePlanClick = (name) =>
    setSelectedTrip((prev) => (prev === name ? null : name));

  const renderTripOptions = (name) =>
    selectedTrip === name && (
      <div className="btn-group mt-2">
        {["Bus", "Train", "Flight"].map((mode) => (
          <button
            key={mode}
            className="btn btn-outline-primary"
            onClick={() => {
              alert(`${mode} selected for ${name}`);
              navigate(`/plan-a-trip/${name.toLowerCase().replace(/\s+/g, "-")}`);
            }}
          >
            {mode}
          </button>
        ))}
      </div>
    );

  /* ----------  REUSABLE CARD ---------- */
  const Destination = ({
    name,
    img,
    text,
    activities,
    bestTime,
    location,
    food,
    stay,
    visits,
  }) => {
    const isSpecial = name === "Himalayas" || name === "Vatican City";

    return (
      <div style={sectionStyle}>
        {/* ---------- IMAGE + BUTTONS ---------- */}
        <div>
          <img src={img} alt={name} style={imageStyle} />

          {/* For all normal destinations: show Details here */}
          {!isSpecial && (
            <>
              <button
                className="btn btn-link p-0"
                onClick={() => setOpenDetails(openDetails === name ? null : name)}
              >
                {openDetails === name ? "Hide ▲ Details" : "Details ▼"}
              </button>

              {openDetails === name && (
                <div className="border rounded p-2 mb-2" style={{ width: 280 }}>
                  <p className="mb-1">
                    <b>Location:</b> {location}
                  </p>
                  <p className="mb-1">
                    <b>Food provided:</b> {food}
                  </p>
                  <p className="mb-1">
                    <b>Accommodation:</b> {stay}
                  </p>
                  <p className="mb-1">
                    <b>Places to visit:</b> {visits}
                  </p>
                  <p className="mb-0 text-success">
                    <b>Discount:</b> 15% on 2 adults + free for children
                  </p>
                </div>
              )}
            </>
          )}

          {/* Plan trip & transport (always below image) */}
          <button
            className="btn btn-primary"
            onClick={() => handlePlanClick(name)}
          >
            Plan Your Trip
          </button>
          {renderTripOptions(name)}
        </div>

        {/* ---------- TEXT + (special case details) ---------- */}
        <div style={textStyle}>
          <p style={paragraphStyle}>{text}</p>
          <p>
            <b>Tour Activities:</b> {activities}
          </p>
          <p>
            <b>Best time to Visit:</b> {bestTime}
          </p>
          <p>
            📍 <b>Location:</b> {location}
          </p>

          {/* For Himalayas & Vatican City only: show Details button here */}
          {isSpecial && (
            <>
              <button
                className="btn btn-link p-0"
                onClick={() => setOpenDetails(openDetails === name ? null : name)}
              >
                {openDetails === name ? "Hide ▲ Details" : "Details ▼"}
              </button>

              {openDetails === name && (
                <div className="border rounded p-2 mt-2">
                  <p className="mb-1">
                    <b>Location:</b> {location}
                  </p>
                  <p className="mb-1">
                    <b>Food provided:</b> {food}
                  </p>
                  <p className="mb-1">
                    <b>Accommodation:</b> {stay}
                  </p>
                  <p className="mb-1">
                    <b>Places to visit:</b> {visits}
                  </p>
                  <p className="mb-0 text-success">
                    <b>Discount:</b> 15% on 2 adults + free for children
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  };

  /* ----------  PAGE ---------- */
  return (
    <div className="container mt-4">
      <h1 style={{ textAlign: "center", color: "blueviolet" }}>
        <u>Popular Destinations &amp; Details</u>
      </h1>

      {/* Mountains & Hill Stations */}
      <h2>
        <i>
          <u>Mountains &amp; Hill Stations</u>
        </i>
      </h2>

      <h3 style={{ color: "blueviolet" }}>
        <i>
          <u>Himalayas</u>
        </i>
      </h3>
      <Destination
        name="Himalayas"
        img="https://tse3.mm.bing.net/th?id=OIP.LV1xteIjF1zfucZBgxoVgAHaE8&pid=Api&P=0&h=180"
        text="The Himalayas offer breathtaking landscapes, snow-capped peaks, and spiritual retreats, making them a top destination for adventure and nature lovers."
        activities="Camping, Trekking, River Rafting, Snow Sports"
        bestTime="April-June & Sept-Nov"
        location="Shimla, Himachal Pradesh"
        food="Veg & Non-Veg, Breakfast/Lunch/Dinner"
        stay="Resorts, Homestays"
        visits="Manali, Leh, Darjeeling"
      />

      <h3 style={{ color: "blueviolet" }}>
        <i>
          <u>Zermatt</u>
        </i>
      </h3>
      <Destination
        name="Zermatt"
        img="https://www.myswitzerland.com/-/media/st/gadmin/images/village/winter/dorf_zermatt_winter_28413.jpg"
        text="Zermatt is a stunning alpine village in Switzerland, nestled at the base of the iconic Matterhorn."
        activities="Climbing, Hiking, Skiing"
        bestTime="Dec-Mar & Jun-Sep"
        location="Valais, Switzerland"
        food="Swiss & International cuisine"
        stay="Chalets, Hotels"
        visits="Matterhorn, Gornergrat"
      />

      <hr style={{ border: "2px solid black" }} />

      {/* Beaches */}
      <h2>
        <i>
          <u>Beaches</u>
        </i>
      </h2>

      <h3 style={{ color: "blueviolet" }}>
        <i>
          <u>White Beach</u>
        </i>
      </h3>
      <Destination
        name="White Beach"
        img="https://tse3.mm.bing.net/th?id=OIP.dd4tTamGR97G-M-kkdq1eQHaEK&pid=Api&P=0&h=180"
        text="White Beach in Boracay, Philippines, is known for its powdery white sand and crystal-clear waters."
        activities="Snorkeling, Island Hopping, Parasailing"
        bestTime="Nov-May"
        location="Boracay, Philippines"
        food="Seafood, Local cuisine"
        stay="Beach Resorts"
        visits="Diniwid Beach, Puka Shell Beach"
      />

      <h3 style={{ color: "blueviolet" }}>
        <i>
          <u>Baga Beach</u>
        </i>
      </h3>
      <Destination
        name="Baga Beach"
        img="https://tse4.mm.bing.net/th?id=OIP.I51tmZOcz4GJ4ht8NKCWGwHaE7&pid=Api&P=0&h=180"
        text="Baga Beach in North Goa is famous for its vibrant nightlife and thrilling water sports."
        activities="Jet Skiing, Beach Parties, Seafood"
        bestTime="Nov-Feb"
        location="Goa, India"
        food="Veg & Non-Veg, Beach Shacks"
        stay="Guesthouses, Resorts"
        visits="Calangute, Candolim"
      />

      <hr style={{ border: "2px solid black" }} />

      {/* Spiritual Destinations */}
      <h2>
        <i>
          <u>Spiritual Destinations</u>
        </i>
      </h2>

      <h3 style={{ color: "blueviolet" }}>
        <i>
          <u>Varanasi</u>
        </i>
      </h3>
      <Destination
        name="Varanasi"
        img="https://tse2.mm.bing.net/th?id=OIP.8YFMcotGeXHDAfOgTRKCjQHaE7&pid=Api&P=0&h=180"
        text="Varanasi is one of the world’s oldest spiritual cities, located on the banks of the sacred Ganges River."
        activities="Ganga Aarti, Boat Ride, Visit Sarnath"
        bestTime="Oct-Mar"
        location="Uttar Pradesh, India"
        food="Pure Veg, Street Food"
        stay="Ashrams, Hotels"
        visits="Dashashwamedh Ghat, Kashi Vishwanath"
      />

      <h3 style={{ color: "blueviolet" }}>
        <i>
          <u>Vatican City</u>
        </i>
      </h3>
      <Destination
        name="Vatican City"
        img="https://tse4.mm.bing.net/th?id=OIP.Skk8K2-i5rqjlpOrREQ9YQHaEo&pid=Api&P=0&h=180"
        text="Vatican City, the world's smallest independent state, houses iconic landmarks like St. Peter’s Basilica and the Sistine Chapel."
        activities="Vatican Museums, Papal Audience"
        bestTime="Apr-Jun & Sep-Oct"
        location="Rome, Italy"
        food="Italian cuisine"
        stay="Boutique Hotels"
        visits="St. Peter’s Basilica, Sistine Chapel"
      />

      <hr style={{ border: "2px solid black" }} />

      {/* Adventures */}
      <h2>
        <i>
          <u>Adventures</u>
        </i>
      </h2>

      <h3 style={{ color: "blueviolet" }}>
        <i>
          <u>Queenstown</u>
        </i>
      </h3>
      <Destination
        name="Queenstown"
        img="https://up.yimg.com/ib/th?asid=432345564362608062&id=OAUMA.E5AE72B8DB5560E4A1F2ED245DE88590_22ADD91705010302&pid=21.1&o=5&w=442&h=231&c=1&rs=1&qlt=95"
        text="Queenstown, New Zealand is hailed as the 'Adventure Capital of the World,' offering adrenaline-pumping experiences."
        activities="Bungee Jumping, Jet Boating, Skydiving"
        bestTime="Dec-Feb (adventures) & Jun-Aug (skiing)"
        location="South Island, New Zealand"
        food="Global cuisine"
        stay="Lodges, Hostels"
        visits="Milford Sound, Lake Wakatipu"
      />

      <h3 style={{ color: "blueviolet" }}>
        <i>
          <u>Iceland</u>
        </i>
      </h3>
      <Destination
        name="Iceland"
        img="https://tse4.mm.bing.net/th?id=OIP.YC5ids0xhzembNX2Q12lHAHaEK&pid=Api&P=0&h=180"
        text="Iceland offers thrilling adventures amidst other-worldly landscapes of volcanoes, glaciers, and waterfalls."
        activities="Glacier Hike, Silfra Snorkel, Waterfall Chasing"
        bestTime="Jun-Aug & Feb-Mar"
        location="North Atlantic"
        food="Local Icelandic dishes"
        stay="Guesthouses, Cabins"
        visits="Golden Circle, Blue Lagoon"
      />
    </div>
  );
};

export default Tours;
