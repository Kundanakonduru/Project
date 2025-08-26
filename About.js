// src/pages/About.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState({});
  const toggle = (t) => setOpen((p) => ({ ...p, [t]: !p[t] }));

  const planTrip = (place) =>
    navigate(`/plan-a-trip/${place.name}`, { state: { place } });

  const categories = [
    {
      title: "Mountains & Hill Stations",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/fb/c0/6e/caption.jpg?w=1200",
      places: [
        {
          name: "Ooty",
          location: "Tamil Nadu",
          rating: 4.6,
          budget: "₹7,500",
          accommodation: "Cottages / Hotels",
          food: ["Veg & Non-Veg", "Breakfast", "Lunch", "Dinner"],
          visits: ["Doddabetta", "Ooty Lake"],
          img: "https://images.hindustantimes.com/img/2023/01/11/1600x900/mugi-jo-6qUltw7SjzM-unsplash_1669276738103_1673425680248_1673425680248.jpg",
        },
        {
          name: "Manali",
          location: "Himachal Pradesh",
          rating: 4.5,
          budget: "₹8,000",
          accommodation: "Resorts / Homestays",
          food: ["Veg & Non-Veg", "Breakfast", "Lunch", "Dinner"],
          visits: ["Rohtang Pass", "Solang Valley"],
          img: "https://i.pinimg.com/originals/84/ed/16/84ed165239f3e217d6ffb72a266d15a4.jpg",
        },
        {
          name: "Shimla",
          location: "Himachal Pradesh",
          rating: 4.4,
          budget: "₹6,500",
          accommodation: "Hotels / Resorts",
          food: ["Veg & Non-Veg", "Local Dishes"],
          visits: ["Mall Road", "Kufri"],
          img: "https://www.clubmahindra.com/blog/media/section_images/shuttersto-026b0fa609daf35.jpg",
        },
        {
          name: "Munnar",
          location: "Kerala",
          rating: 4.7,
          budget: "₹9,000",
          accommodation: "Tea Estate Stays",
          food: ["Veg & Non-Veg", "South Indian Dishes"],
          visits: ["Tea Gardens", "Eravikulam National Park"],
          img: "https://tse4.mm.bing.net/th/id/OIP.2oeIGT2eXQ4ksvfEiSXmpgHaEl?pid=Api&P=0&h=180r",
        },
        {
          name: "Darjeeling",
          location: "West Bengal",
          rating: 4.5,
          budget: "₹8,500",
          accommodation: "Homestays / Hotels",
          food: ["Veg & Non-Veg", "Tea Snacks"],
          visits: ["Tiger Hill", "Toy Train"],
          img: "https://i.ytimg.com/vi/DCq7VUksItY/maxresdefault.jpg",
        },
        {
          name: "Nainital",
          location: "Uttarakhand",
          rating: 4.3,
          budget: "₹7,000",
          accommodation: "Resorts / Hotels",
          food: ["Veg & Non-Veg", "North Indian Cuisine"],
          visits: ["Naini Lake", "Snow View Point"],
          img: "https://assets.cntraveller.in/photos/619e196c9a807d7054933016/master/w_1600%2Cc_limit/Nainital%2520lake%2520view.jpg",
        },
      ],
    },
    {
      title: "Beaches",
      img: "https://tse4.mm.bing.net/th?id=OIP.APVT4FubNyHcRGSielOI6wHaE8&pid=Api&P=0",
      places: [
        {
          name: "Goa",
          location: "India",
          rating: 4.7,
          budget: "₹10,000",
          accommodation: "Beach Resorts",
          food: ["Seafood", "Veg & Non-Veg"],
          visits: ["Baga Beach", "Fort Aguada"],
          img: "https://media.cntraveller.in/wp-content/uploads/2016/10/arambol.jpg",
        },
        {
          name: "Maldives",
          location: "Indian Ocean",
          rating: 4.9,
          budget: "₹50,000",
          accommodation: "Water Villas",
          food: ["Seafood", "International Cuisine"],
          visits: ["Male Atoll", "Snorkeling Spots"],
          img: "https://tse2.mm.bing.net/th/id/OIP.KDWSRiTZEzhj3Iqr3VbeXwHaE8?pid=Api&P=0&h=180",
        },
        {
          name: "Bali",
          location: "Indonesia",
          rating: 4.8,
          budget: "₹40,000",
          accommodation: "Luxury Resorts",
          food: ["Indonesian", "Seafood"],
          visits: ["Uluwatu Temple", "Kuta Beach"],
          img: "https://tse1.mm.bing.net/th/id/OIP.MYobIFo2xP4AO3Ma-k8TXwHaEK?pid=Api&P=0&h=180",
        },
        {
          name: "Andaman",
          location: "India",
          rating: 4.6,
          budget: "₹25,000",
          accommodation: "Beach Resorts",
          food: ["Seafood", "Veg"],
          visits: ["Radhanagar Beach", "Cellular Jail"],
          img: "https://en-media.thebetterindia.com/uploads/2016/08/AndamanIslands_dronephotoofamazingislandstravellingonboat_XS.jpeg",
        },
        {
          name: "Hawaii",
          location: "USA",
          rating: 4.9,
          budget: "₹60,000",
          accommodation: "Luxury Villas",
          food: ["International", "Seafood"],
          visits: ["Waikiki Beach", "Volcano National Park"],
          img: "https://wallup.net/wp-content/uploads/2017/11/23/524612-nature-Hawaii-landscape-mountains-clouds-water-aerial_view-birds_eye_view-Jurassic_Park.jpg",
        },
        {
          name: "Phuket",
          location: "Thailand",
          rating: 4.7,
          budget: "₹30,000",
          accommodation: "Beach Resorts",
          food: ["Thai Cuisine", "Seafood"],
          visits: ["Patong Beach", "Phi Phi Islands"],
          img: "https://cdn.audleytravel.com/4614/3296/79/15979556-phuket-thailand.jpg",
        },
      ],
    },
    {
      title: "Spiritual Destinations",
      img: "https://www.authenticindiatours.com/app/uploads/2024/03/Hampi-940x585-c-default.jpg",
      places: [
        {
          name: "Varanasi",
          location: "Uttar Pradesh",
          rating: 4.6,
          budget: "₹6,000",
          accommodation: "Guest Houses",
          food: ["Veg", "Street Food"],
          visits: ["Kashi Vishwanath", "Ganga Aarti"],
          img: "https://wallpaperaccess.com/full/2714472.jpg",
        },
        {
          name: "Golden Temple",
          location: "Amritsar, Punjab",
          rating: 4.9,
          budget: "₹7,500",
          accommodation: "Hotels / Dharamshalas",
          food: ["Langar", "Veg"],
          visits: ["Harmandir Sahib", "Jallianwala Bagh"],
          img: "http://4.bp.blogspot.com/-Bmk8P2djETc/UdLS3HSxS4I/AAAAAAAAATE/fGNpRFvXa8Y/s1024/Golden_Temple_Nightview.jpg",
        },
        {
          name: "Bodh Gaya",
          location: "Bihar",
          rating: 4.7,
          budget: "₹6,500",
          accommodation: "Guest Houses",
          food: ["Veg"],
          visits: ["Mahabodhi Temple", "Bodhi Tree"],
          img: "https://www.tripsavvy.com/thmb/QZUBiTCTl2BvMAAla9vmUBqQEAk=/2120x1414/filters:fill(auto,1)/GettyImages-618355052-b865a78b33cf412b915909ad9d941f27.jpg",
        },
        {
          name: "Tirupati",
          location: "Andhra Pradesh",
          rating: 4.8,
          budget: "₹5,000",
          accommodation: "Hotels / Dharamshalas",
          food: ["South Indian Veg"],
          visits: ["Tirumala Temple"],
          img: "https://tse4.mm.bing.net/th/id/OIP.vjYK_GC90W60hTyqcD7BXQHaEK?pid=Api&P=0&h=180",
        },
        {
          name: "Mecca",
          location: "Saudi Arabia",
          rating: 5.0,
          budget: "Varies",
          accommodation: "Hotels",
          food: ["Middle Eastern Cuisine"],
          visits: ["Masjid al-Haram", "Kaaba"],
          img: "https://cdn.britannica.com/20/153520-050-177A78E4/Kabah-hajj-pilgrims-Saudi-Arabia-Mecca.jpg",
        },
        {
          name: "Kedarnath",
          location: "Uttarakhand",
          rating: 4.7,
          budget: "₹9,000",
          accommodation: "Lodges / Camps",
          food: ["Veg"],
          visits: ["Kedarnath Temple", "Mountains"],
          img: "https://tse2.mm.bing.net/th/id/OIP.cA8xDkmWwjJPdms1UYvI1gHaEo?pid=Api&P=0&h=180",
        },
      ],
    },
    {
      title: "Adventures",
      img: "https://tse3.mm.bing.net/th?id=OIP.dzwfKbd8ALreqSap4_MLiQHaE7&pid=Api&P=0",
      places: [
        {
          name: "Ladakh",
          location: "India",
          rating: 4.8,
          budget: "₹20,000",
          accommodation: "Camps / Guesthouses",
          food: ["Veg & Non-Veg"],
          visits: ["Pangong Lake", "Leh Palace"],
          img: "https://tse2.mm.bing.net/th/id/OIP.YyCuA1DYYqd6_lHW7uV4lgHaE7?pid=Api&P=0&h=180",
        },
        {
          name: "Rishikesh",
          location: "India",
          rating: 4.7,
          budget: "₹12,000",
          accommodation: "Guest Houses",
          food: ["Veg"],
          visits: ["River Rafting", "Laxman Jhula"],
          img: "https://tse1.mm.bing.net/th/id/OIP.8iV9okQnAaujk0nrESjMKgHaE8?pid=Api&P=0&h=180",
        },
        {
          name: "Dubai Skydiving",
          location: "UAE",
          rating: 4.9,
          budget: "₹70,000",
          accommodation: "Luxury Hotels",
          food: ["International"],
          visits: ["Palm Jumeirah", "Skydiving"],
          img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/a4/d3/51/skydive-in-dubai-see.jpg?w=2000&h=2000&s=1",
        },
        {
          name: "Great Barrier Reef",
          location: "Australia",
          rating: 5.0,
          budget: "₹1,20,000",
          accommodation: "Beach Resorts",
          food: ["Seafood"],
          visits: ["Snorkeling", "Scuba Diving"],
          img: "https://tse1.mm.bing.net/th/id/OIP.ZVLk16Bg22SVWSCRyzIwGgHaE8?pid=Api&P=0&h=180",
        },
        {
          name: "Bir Billing",
          location: "Himachal Pradesh",
          rating: 4.6,
          budget: "₹15,000",
          accommodation: "Camps",
          food: ["Veg & Non-Veg"],
          visits: ["Paragliding", "Camping"],
          img: "https://static2.tripoto.com/media/filter/tst/img/OgData/1465203368_bir_billing_himachal_pradesh.jpg",
        },
        {
          name: "New Zealand",
          location: "New Zealand",
          rating: 5.0,
          budget: "₹2,00,000",
          accommodation: "Luxury Resorts",
          food: ["International"],
          visits: ["Bungee Jumping", "Trekking"],
          img: "https://tse4.mm.bing.net/th/id/OIP.EDrNZgr5DZ2bHv5w66otwgHaDP?pid=Api&P=0&h=180",
        },
      ],
    },
  ];

  return (
    <div className="container my-5">
      {/* Welcome */}
      <section className="mb-5">
        <h2 style={{ color: "blueviolet" }}>
          <u>1. Introduction to the Website</u>
        </h2>
        <p className="ms-5">
          <i>
            <span style={{ fontSize: 80 }}>W</span>elcome to <b>K-Explore</b>,
            your guide to the world’s most beautiful and exciting destinations!
          </i>
        </p>
        <p style={{ textAlign: "justify", fontSize: 20, lineHeight: "1.8" }}>
          We help you discover snowy mountains, tropical beaches, historic
          cities, peaceful villages and more—guiding you every step of the way.
        </p>
      </section>

      {/* Categories */}
      {categories.map((cat) => (
        <div key={cat.title} className="mb-5">
          <div className="d-flex align-items-center mb-3">
            <img
              src={cat.img}
              alt={cat.title}
              style={{ width: 320, height: 320, borderRadius: 8 }}
            />
            <div className="ms-4">
              <h2>{cat.title}</h2>
              <button
                className="btn btn-success mt-2"
                onClick={() => toggle(cat.title)}
              >
                {open[cat.title] ? "Hide ▲" : "Explore ▼"}
              </button>
            </div>
          </div>

          {open[cat.title] && (
            <div className="row">
              {cat.places.map((p) => (
                <div key={p.name} className="col-md-4 mb-4">
                  <div className="card h-100 shadow d-flex flex-column">
                    <img
                      src={p.img}
                      className="card-img-top"
                      alt={p.name}
                      style={{ height: 200, objectFit: "cover" }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{p.name}</h5>
                      <p>Rating: {p.rating} ⭐</p>
                      <p>Budget: {p.budget}</p>

                      <details className="mb-3">
                        <summary>Details</summary>
                        <ol className="mt-2 mb-0 ps-3">
                          <li>
                            <b>Location:</b> {p.location}
                          </li>
                          <li>
                            <b>Food provided:</b>
                            <ul className="mb-0">
                              {p.food.map((f, i) => (
                                <li key={i}>{f}</li>
                              ))}
                            </ul>
                          </li>
                          <li>
                            <b>Accommodation:</b> {p.accommodation}
                          </li>
                          <li>
                            <b>Places to visit:</b> {p.visits.join(", ")}
                          </li>
                        </ol>
                      </details>

                      <button
                        className="btn btn-primary mt-auto"
                        onClick={() => planTrip(p)}
                      >
                        Plan Trip
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default About;
