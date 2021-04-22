// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.

  // Figure out the number of passengers, and store that in memory
  let passengerNumbers = (ride.numberOfPassengers)
  console.log(`The Number of Passengers is: ${passengerNumbers}`)

  // Figure out the first name of the passenger, and store that in memory
  let passengerFirstName = (ride.passengerDetails.first)
  console.log(`The Passenger's First Name is: ${passengerFirstName}`)

  // Figure out the last name of the passenger, and store that in memory
  let passengerLastName = (ride.passengerDetails.last)
  console.log(`The Passenger's Last Name is: ${passengerLastName}`)

  // Figure out the phone number of the passenger, and store that in memory
  let passengerPhoneNumber = (ride.passengerDetails.phoneNumber)
  console.log(`The Passenger's Phone Number is: ${passengerPhoneNumber}`)

  // Figure out the pickup address of the passenger, and store that in memory
  let passengerPickupAddress = (ride.pickupLocation.address)
  console.log(`The Passenger's Pickup Address: ${passengerPickupAddress}`)

  // Figure out the pickup city of the passenger, and store that in memory
  let passengerPickupCity = (ride.pickupLocation.city)
  console.log(`The Passenger's Pickup City is: ${passengerPickupCity}`)

  // Figure out the pickup state of the passenger, and store that in memory
  let passengerPickupState = (ride.pickupLocation.state)
  console.log(`The Passenger's Pickup State is: ${passengerPickupState}`)

  // Figure out the pickup zip code of the passenger, and store that in memory
  let passengerPickupZip = (ride.pickupLocation.zip)
  console.log(`The Passenger's Pickup Zip Code is: ${passengerPickupZip}`)

  // Figure out the drop-off address of the passenger, and store that in memory
  let passengerDropoffAddress = (ride.dropoffLocation.address)
  console.log(`The Passenger's Drop-off Address is: ${passengerDropoffAddress}`)

  // Figure out the drop-off city of the passenger, and store that in memory
  let passengerDropoffCity = (ride.dropoffLocation.city)
  console.log(`The Passenger's Drop-off City is: ${passengerDropoffCity}`)

  // Figure out the drop-off state of the passenger, and store that in memory
  let passengerDropoffState = (ride.dropoffLocation.state)
  console.log(`The Passenger's Drop-off State is: ${passengerDropoffState}`)

  // Figure out the drop-off zip code of the passenger, and store that in memory
  let passengerDropoffZip = (ride.dropoffLocation.zip)
  console.log(`The Passenger's Drop-off Zip is: ${passengerDropoffZip}`)

  // Combine all variables, and store that in memory
  console.log(`Passenger: ${passengerFirstName} ${passengerLastName} - ${passengerPhoneNumber}. Pick up at ${passengerPickupAddress}, ${passengerPickupCity}, ${passengerPickupState} ${passengerPickupZip}. Dropff-off at ${passengerDropoffAddress}, ${passengerDropoffCity}, ${passengerDropoffState} ${passengerDropoffZip}.`)

  // Figure out which level of service the rider has requested, store it in memory
  let serviceType = (ride.purpleRequested)
  console.log(`The Level of Service is: ${serviceType}`)

  // Conditional
  
  if (ride.purpleRequested == true) {
    serviceType = `Noober Purple`
  } else if (ride.numberOfPassengers > 3) {
    serviceType = `Noober XL`
  } 
  else { 
    serviceType = `Noober X`
    }

  console.log(`${serviceType} Passenger: ${passengerFirstName} ${passengerLastName} - ${passengerPhoneNumber}. Pick up at ${passengerPickupAddress}, ${passengerPickupCity}, ${passengerPickupState} ${passengerPickupZip}. Dropff-off at ${passengerDropoffAddress}, ${passengerDropoffCity}, ${passengerDropoffState} ${passengerDropoffZip}.`)


  // 🔥 YOUR CODE ENDS HERE 🔥
})
