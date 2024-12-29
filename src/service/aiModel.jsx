import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


export const chatSession = model.startChat({
  generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate a travel plan for location: Las Vegas, for 5 day(s) for a couple with a mid-range budget. Give me a Hotel Option list with HotelName, address, price, hotel image, url, geo coordinates, ratings, descriptions. Also suggest itinenary with place names, details, image, url, geo coordinates, tickets pricings, ratings, time to travel planned for each with the best time to visit. In a JSON Format.\n"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"trip_details\": {\n    \"location\": \"Las Vegas, Nevada\",\n    \"duration\": \"5 days\",\n    \"travelers\": \"Couple\",\n    \"budget\": \"Mid-range\"\n  },\n  \"hotel_options\": [\n    {\n      \"hotel_name\": \"The LINQ Hotel + Experience\",\n      \"address\": \"3535 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"$120 - $250 per night\",\n      \"hotel_image\": \"https://example.com/linq_hotel_image.jpg\",\n      \"url\": \"https://www.caesars.com/linq\",\n       \"geo_coordinates\": {\n        \"latitude\": 36.1164,\n        \"longitude\": -115.1699\n      },\n      \"ratings\": 4.2,\n      \"description\": \"Modern hotel with a central location on the Strip, featuring a vibrant atmosphere, the High Roller observation wheel, and diverse dining options.\"\n    },\n    {\n      \"hotel_name\": \"Planet Hollywood Resort & Casino\",\n       \"address\": \"3667 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"$150 - $300 per night\",\n      \"hotel_image\": \"https://example.com/planet_hollywood_image.jpg\",\n      \"url\": \"https://www.caesars.com/planet-hollywood\",\n       \"geo_coordinates\": {\n        \"latitude\": 36.1122,\n        \"longitude\": -115.1712\n      },\n      \"ratings\": 4.3,\n      \"description\": \"Theme-based hotel with movie memorabilia, a lively casino, and a variety of dining and entertainment options.\"\n    },\n    {\n      \"hotel_name\": \"Paris Las Vegas\",\n      \"address\": \"3655 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"$180 - $350 per night\",\n      \"hotel_image\": \"https://example.com/paris_las_vegas_image.jpg\",\n      \"url\": \"https://www.caesars.com/paris-las-vegas\",\n       \"geo_coordinates\": {\n        \"latitude\": 36.1126,\n        \"longitude\": -115.1704\n      },\n      \"ratings\": 4.4,\n      \"description\": \"Iconic hotel with a replica Eiffel Tower, French-themed decor, and a romantic ambiance, offering fine dining and entertainment.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day_1\": {\n      \"theme\": \"Arrival and The Strip Exploration\",\n      \"activities\": [\n        {\n          \"place_name\": \"Welcome to Fabulous Las Vegas Sign\",\n          \"details\": \"Take iconic photos at the famous Las Vegas sign.\",\n           \"image\": \"https://example.com/welcome_sign_image.jpg\",\n           \"url\": \"https://www.lasvegasnevada.gov/Residents/Parks-Recreation/Parks/Welcome-to-Fabulous-Las-Vegas-Sign\",\n           \"geo_coordinates\": {\n             \"latitude\": 36.0825,\n             \"longitude\": -115.1728\n            },\n          \"tickets_pricing\": \"Free\",\n           \"ratings\": 4.7,\n          \"time_to_travel\": \"30 minutes drive from Airport.\",\n          \"best_time_to_visit\": \"Late afternoon or sunset.\"\n        },\n         {\n            \"place_name\": \"The Bellagio Conservatory & Botanical Gardens\",\n            \"details\": \"Stroll through stunning seasonal floral displays.\",\n             \"image\": \"https://example.com/bellagio_gardens_image.jpg\",\n             \"url\": \"https://bellagio.mgmresorts.com/en/entertainment/conservatory-botanical-garden.html\",\n              \"geo_coordinates\": {\n               \"latitude\": 36.1124,\n               \"longitude\": -115.1742\n              },\n             \"tickets_pricing\": \"Free\",\n            \"ratings\": 4.8,\n            \"time_to_travel\": \"10-15 min from the Welcome Sign\",\n             \"best_time_to_visit\": \"Anytime.\"\n          },\n         {\n          \"place_name\": \"Fountains of Bellagio\",\n          \"details\": \"Witness the mesmerizing water show set to music.\",\n          \"image\": \"https://example.com/bellagio_fountains_image.jpg\",\n          \"url\": \"https://bellagio.mgmresorts.com/en/entertainment/fountains-of-bellagio.html\",\n           \"geo_coordinates\": {\n             \"latitude\": 36.1127,\n             \"longitude\": -115.1744\n            },\n          \"tickets_pricing\": \"Free\",\n          \"ratings\": 4.8,\n          \"time_to_travel\": \"Walkable distance from gardens\",\n           \"best_time_to_visit\": \"Evening (show runs frequently)\"\n          }\n         ]\n      },\n    \"day_2\": {\n       \"theme\": \"Adventure and Thrills\",\n       \"activities\": [\n         {\n            \"place_name\": \"High Roller Observation Wheel\",\n            \"details\": \"Enjoy breathtaking panoramic views of Las Vegas.\",\n             \"image\": \"https://example.com/high_roller_image.jpg\",\n            \"url\": \"https://www.caesars.com/linq/things-to-do/high-roller\",\n            \"geo_coordinates\": {\n             \"latitude\": 36.1164,\n             \"longitude\": -115.1699\n            },\n            \"tickets_pricing\": \"$30-$40 per person\",\n            \"ratings\": 4.5,\n           \"time_to_travel\": \"Around 10min by car from the Bellagio\",\n            \"best_time_to_visit\": \"Sunset or evening.\"\n          },\n          {\n            \"place_name\": \"Adventuredome Theme Park\",\n            \"details\": \"Experience thrilling rides at an indoor theme park.\",\n            \"image\": \"https://example.com/adventuredome_image.jpg\",\n            \"url\": \"https://www.circuscircus.com/en/adventuredome.html\",\n            \"geo_coordinates\": {\n               \"latitude\": 36.1367,\n               \"longitude\": -115.1648\n            },\n           \"tickets_pricing\": \"$30-$60 per person\",\n            \"ratings\": 4.3,\n            \"time_to_travel\": \"15 min from the High Roller\",\n             \"best_time_to_visit\": \"Afternoon to evening\"\n          }\n       ]\n     },\n    \"day_3\": {\n        \"theme\": \"Arts, Culture and Show\",\n        \"activities\": [\n          {\n             \"place_name\": \"The Neon Museum\",\n            \"details\": \"Explore historic Las Vegas signs and learn about the city's past.\",\n             \"image\": \"https://example.com/neon_museum_image.jpg\",\n             \"url\": \"https://www.neonmuseum.org/\",\n              \"geo_coordinates\": {\n               \"latitude\": 36.1633,\n               \"longitude\": -115.1480\n              },\n            \"tickets_pricing\": \"$20 - $30 per person\",\n            \"ratings\": 4.6,\n            \"time_to_travel\": \"15-20 min drive from the Adventuredome.\",\n            \"best_time_to_visit\": \"Late afternoon.\"\n          },\n           {\n              \"place_name\": \"A Cirque du Soleil show\",\n              \"details\": \"Enjoy a spectacular acrobatic performance.\",\n               \"image\": \"https://example.com/cirque_du_soleil_image.jpg\",\n               \"url\": \"https://www.cirquedusoleil.com/las-vegas\",\n                \"geo_coordinates\": {\n                \"latitude\": 36.1096,\n                 \"longitude\": -115.1730\n               },\n              \"tickets_pricing\": \"$80 - $200+ per person\",\n             \"ratings\": 4.7,\n             \"time_to_travel\": \"Around 20min by car from the Neon Museum\",\n             \"best_time_to_visit\": \"Evening show.\"\n           }\n        ]\n     },\n    \"day_4\": {\n        \"theme\": \"Day Trip to the Hoover Dam\",\n        \"activities\": [\n          {\n            \"place_name\": \"Hoover Dam\",\n             \"details\": \"Visit the impressive Hoover Dam and learn about its history and construction.\",\n            \"image\": \"https://example.com/hoover_dam_image.jpg\",\n            \"url\": \"https://www.usbr.gov/lc/hooverdam/\",\n             \"geo_coordinates\": {\n               \"latitude\": 36.0162,\n               \"longitude\": -114.7372\n            },\n           \"tickets_pricing\": \"$10 - $30 per person for tours\",\n            \"ratings\": 4.7,\n           \"time_to_travel\": \"45-60 minute drive from Las Vegas.\",\n            \"best_time_to_visit\": \"Morning or early afternoon (avoid midday heat).\"\n          }\n        ]\n    },\n    \"day_5\": {\n        \"theme\": \"Shopping and Departure\",\n        \"activities\": [\n           {\n              \"place_name\": \"The Forum Shops at Caesars\",\n              \"details\": \"Enjoy luxurious shopping experience and unique architectural designs.\",\n              \"image\": \"https://example.com/forum_shops_image.jpg\",\n              \"url\": \"https://www.simon.com/mall/the-forum-shops-at-caesars-palace\",\n              \"geo_coordinates\": {\n                  \"latitude\": 36.1175,\n                  \"longitude\": -115.1735\n               },\n               \"tickets_pricing\": \"Free (shopping purchases optional)\",\n              \"ratings\": 4.5,\n               \"time_to_travel\": \"20-30 min from the Hotel\",\n               \"best_time_to_visit\": \"Any time.\"\n            },\n             {\n               \"place_name\":\"Departure\",\n               \"details\":\"Head to Airport for flight home\",\n               \"image\": \"https://example.com/airport.jpg\",\n               \"url\":\"https://www.mccarran.com/\",\n              \"geo_coordinates\": {\n                  \"latitude\": 36.0801,\n                 \"longitude\": -115.1523\n              },\n               \"tickets_pricing\": \"N/A\",\n              \"ratings\": \"N/A\",\n               \"time_to_travel\": \"15-20 min from the Forum Shops\",\n               \"best_time_to_visit\":\"Depending on the flight time\"\n\n           }\n        ]\n     }\n  }\n}\n```"},
        ],
      },
    ],
  });