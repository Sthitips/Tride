  function generateItinerary(destination, totalDays) {
    const plan = [];

    for (let i = 1; i <= totalDays; i++) {
        if (i === 1) {
        plan.push(`Day ${i}: Arrival and explore main attractions in ${destination}`);
        } else if (i === totalDays) {
        plan.push(`Day ${i}: Shopping and departure`);
        } else {
        plan.push(`Day ${i}: Local sightseeing and food exploration`);
        }
    }

    return plan;
  }

  export default generateItinerary;