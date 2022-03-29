/**
 * Update Spots for current day. (one possible solution)
 *
 * @param {Object}   state           State Object.
 * @param {Object}   appointments    New Appointments array
 * @param {Object}   id              Optional appointment id (may not need)
 * @return {Array}   A Days array we can save back into state.
 */

const updateSpots = function (state, appointments, id) {
  // make copy of days array
  const days = state.days.map((day) => {
    return { ...day };
  });

  console.log("DAYS: ", days);

  function findDay(day) {
    const daysOfWeek = {
      Monday: 0,
      Tuesday: 1,
      Wednesday: 2,
      Thursday: 3,
      Friday: 4,
    };
    return daysOfWeek[day];
  }
  // find the day's index in days array
  const dayIndex = findDay(state.day);
  console.log("STATE.DAY: ", state.day);
  console.log("DAYINDEX: ", dayIndex);

  // check for old state
  const prevState = state.appointments[id].interview;
  console.log("prevSTATE: ", prevState);
  // check for new state
  const newState = appointments[id].interview;
  console.log("newSTATE: ", newState);

  // create - no old state + new state
  if (!prevState && newState) {
    days[dayIndex].spots--;
  }
  // delete - old state + no new state
  if (prevState && !newState) {
    days[dayIndex].spots++;
  }

  // return days array
  return days;
};

module.exports = updateSpots;
