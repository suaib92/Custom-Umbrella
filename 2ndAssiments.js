function minimumPlanesRequired(fuelArray) {
  let n = fuelArray.length;
  let planesNeeded = 1;
  let currentFuel = fuelArray[0];
  let maxReach = fuelArray[0];

  if (currentFuel === 0) return -1; // If there's no fuel at the starting airport, it's impossible to reach the last airport

  for (let i = 1; i < n; i++) {
      if (i === n - 1) return planesNeeded; // If we reach the last airport, return the number of planes needed

      maxReach = Math.max(maxReach, i + fuelArray[i]);

      currentFuel--;

      if (currentFuel === 0) {
          planesNeeded++;
          currentFuel = maxReach - i;

          if (currentFuel <= 0) return -1; // If there's no fuel to continue, it's impossible to reach the last airport
      }
  }

  return -1; // If we haven't reached the last airport by the end, it's impossible to reach
}

// Example usage:
console.log(minimumPlanesRequired([2, 1, 2, 3, 1])); // Output: 2
console.log(minimumPlanesRequired([1, 6, 3, 4, 5, 0, 0, 0, 6])); // Output: 3


/*
Sure, here's the algorithm explained in a more straightforward manner:

1. **Initialize**: 
   - Start with one plane at the first airport.
   - Keep track of how much fuel this plane has (`currentFuel`), initially set to the fuel available at the first airport.
   - Also, keep track of the furthest airport we can reach from the current position (`maxReach`), initially set to the first airport's fuel.

2. **Check starting fuel**:
   - If there's no fuel at the starting airport, it's impossible to reach the last airport. Return -1.

3. **Travel through airports**:
   - Starting from the second airport and looping until the second-to-last airport:
     - Update `maxReach` to the maximum of its current value and the sum of the current airport's index and its fuel capacity.
     - Decrease `currentFuel` by 1, as we spend 1 unit of fuel to travel to the next airport.
     - If `currentFuel` becomes 0, we've exhausted the current plane's fuel:
       - Increment `planesNeeded` because we need another plane to continue the journey.
       - Update `currentFuel` to the fuel available with the new plane, which can take us up to `maxReach` airport.
       - If the new `currentFuel` is 0 or negative, it's impossible to reach the last airport. Return -1.

4. **Final Check**:
   - If the loop completes without returning -1, return the number of planes needed (`planesNeeded`), indicating the minimum number of planes required to reach the last airport.

This algorithm efficiently determines the minimum number of planes needed to reach the last airport, considering various scenarios such as running out of fuel and being unable to proceed further. */