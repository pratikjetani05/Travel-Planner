import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEYS;
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
        {
          text: `Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget. Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format.\n`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: `I cannot access real-time information, including live pricing for hotels, images, and real-time ratings. My response will provide a framework you can use to build your own plan by filling in the missing data using online travel agencies like Expedia, Booking.com, Kayak, etc. Remember to check for deals and discounts!

\`\`\`json
{
  "tripName": "Las Vegas Budget Getaway for Couples (3 Days)",
  "budget": "cheap",
  "travelers": 2,
  "duration": 3,
  "hotels": [
    {
      "hotelName": "Circus Circus",
      "hotelAddress": "2880 Las Vegas Blvd S, Las Vegas, NV 89109",
      "priceRange": "$50-$100/night",
      "hotelImageUrl": "URL (Find on booking site)",
      "geoCoordinates": "[36.1372,-115.1695]",
      "rating": 3.5,
      "description": "Family-friendly hotel with basic amenities and a central location."
    },
    {
      "hotelName": "Motel 6 Las Vegas Tropicana",
      "hotelAddress": "195 E Tropicana Ave, Las Vegas, NV 89109",
      "priceRange": "$40-$80/night",
      "hotelImageUrl": "URL (Find on booking site)",
      "geoCoordinates": "[36.0993,-115.1623]",
      "rating": 3,
      "description": "Budget-friendly motel close to the Strip with basic amenities."
    },
    {
      "hotelName": "Excalibur Hotel & Casino",
      "hotelAddress": "3850 S Las Vegas Blvd, Las Vegas, NV 89109",
      "priceRange": "$60-$120/night",
      "hotelImageUrl": "URL (Find on booking site)",
      "geoCoordinates": "[36.0985,-115.1766]",
      "rating": 3.8,
      "description": "Themed hotel offering decent amenities and a slightly off-Strip location."
    }
  ],
  "itinerary": [
    {
      "day": "day1",
      "plan": [
        {
          "placeName": "The Strip (Free Walk)",
          "placeDetails": "Walk the length of the Strip, admiring the hotels and atmosphere.",
          "placeImageUrl": "URL (Find a generic Strip image)",
          "geoCoordinates": "[36.1146,-115.1728]",
          "ticketPricing": "Free",
          "rating": 4.5,
          "timeTravel": "Afternoon/Evening (2-4 hours)",
          "time": "14:00 - 18:00"
        },
        {
          "placeName": "Free Show (Example: Fountains of Bellagio)",
          "placeDetails": "Enjoy the free Bellagio Fountain show.",
          "placeImageUrl": "URL (Find an image of the fountain)",
          "geoCoordinates": "[36.1126,-115.1760]",
          "ticketPricing": "Free",
          "rating": 4.8,
          "timeTravel": "Evening (30 minutes - 1 hour)",
          "time": "19:00 - 20:00"
        }
      ]
    },
    {
      "day": "day2",
      "plan": [
        {
          "placeName": "Fremont Street Experience (Downtown)",
          "placeDetails": "Experience the vibrant atmosphere of Fremont Street.",
          "placeImageUrl": "URL (Find an image of Fremont Street)",
          "geoCoordinates": "[36.1699,-115.1398]",
          "ticketPricing": "Free (Some paid shows)",
          "rating": 4.0,
          "timeTravel": "Afternoon (2-3 hours)",
          "time": "13:00 - 16:00"
        },
        {
          "placeName": "Seven Magic Mountains (Art Installation)",
          "placeDetails": "Take a quick trip outside the city to see this colorful art installation. Check for bus routes or ride-sharing options.",
          "placeImageUrl": "URL (Find an image)",
          "geoCoordinates": "[36.0681,-114.9513]",
          "ticketPricing": "Free",
          "rating": 4.2,
          "timeTravel": "Late afternoon/early evening (2 hours, including travel time)",
          "time": "17:00 - 19:00"
        }
      ]
    },
    {
      "day": "day3",
      "plan": [
        {
          "placeName": "Explore a cheaper Buffet",
          "placeDetails": "Many hotels offer cheaper buffet options (check reviews and prices beforehand).",
          "placeImageUrl": "URL (Find a Buffet image)",
          "geoCoordinates": "[36.1146,-115.1728]",
          "ticketPricing": "$15-$25",
          "rating": 3.5,
          "timeTravel": "Lunch (1-1.5 hours)",
          "time": "12:00 - 13:30"
        },
        {
          "placeName": "Visit a Casino (Free)",
          "placeDetails": "Try your luck at a free game or enjoy the casino atmosphere.",
          "placeImageUrl": "URL (Find a Casino image)",
          "geoCoordinates": "[36.1146,-115.1728]",
          "ticketPricing": "Free",
          "rating": "N/A",
          "timeTravel": "Afternoon (1-2 hours)",
          "time": "14:00 - 16:00"
        }
      ]
    }
  ]
}
\`\`\`
`
        }
      ]
    }
  ],
});
