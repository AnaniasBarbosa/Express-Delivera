function getLocation(): Promise<{ latitude: number; longitude: number }> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      },
      (err) => reject(err)
    )
  })
}
export default async function returnGeolocation(): Promise<{ latitude: number; longitude: number }> {
  try {
    const position = await getLocation()
    return position
  } catch (error) {
    return {
      latitude: 30,
      longitude: -110,
    }
  }
}

// const getPosition = async (): Promise<Object> => {
//   try {
//     const position = await getLocation()
//     const latitude = position.coords.latitude
//     const longitude = position.coords.longitude

//     return {
//       latitude,
//       longitude,
//     }
//   } catch (error) {
//     return "teste"
//     throw new Error("teste")
//     if (error instanceof Error) return { error: `${error.message}` }
//     return {
//       error: `Unexpected error: ${error}`,
//     }
//   }
// }

// const showError = (err: { code: number }): string => {
//   switch (err.code) {
//     case 1:
//       return "Permission denied"
//     case 2:
//       return "Position unavailable"
//     case 3:
//       return "Expired Limit Time"
//     default:
//       return "Unknown error"
//   }
// }

// const getPosition = (location: GeolocationPosition): Object => {
//   const latitude = location.coords.latitude
//   const longitude = location.coords.longitude

//   return {
//     latitude,
//     longitude,
//   }
// }
