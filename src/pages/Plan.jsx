import { useState } from "react";
import generateItinerary from "../utils/itineraryGenerator"

const Plan= ()=> {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");
  const [itinerary, setItinerary] = useState([]);

  function handlePlanTrip() {
    if (!destination || !days || !budget) {
        alert("Please fill in all fields");
        return;
    }

    if (Number(days) <= 0 || Number(budget) <= 0) {
        alert("Days and budget must be positive");
        return;
    }
    const totalDays= Number(days);
    const plan= generateItinerary(destination,totalDays);
    setItinerary(plan);
  }

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-lg shadow">
      <h2>Plan Your Trip</h2>

      <div>
        <label>Destination:</label>
        {/*display real time typing with this statement*/}
        <input
          className="w-full border px-3 py-2 rounded"
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>

      <div>
        <label>Number of days:</label>
        <input
          className="w-full border px-3 py-2 rounded"
          type="number"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />
      </div>

      <div>
        <label>Budget:</label>
        <input
          className="w-full border px-3 py-2 rounded"
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
      </div>

      <hr style ={{margin: "24px 0"}} />

      <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700" onClick={handlePlanTrip}>Plan Trip</button>
      <div>
        <h3>Trip Summary</h3>
        <p><strong>Destination: </strong>{destination}</p>
        <p><strong>Days: </strong>{days}</p>
        <p><strong>Budget: </strong>₹{budget}</p>

        {itinerary.length > 0 && (
        <div>
            <h3>Your Itinerary</h3>
            <ul>
            {itinerary.map((dayPlan, index) => (
                <li key={index}>{dayPlan}</li>
            ))}
            </ul>
        </div>
        )}
      </div>
    </div>
  );
}

export default Plan;