import {
  ThemeProvider,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  CssBaseline,
  Button,
  styled
} from "@mui/material"
import Navbar from "./components/Navbar"
import theme from "./theme"
import { Loader } from 'google-maps'
import { useEffect } from "react"
import geolocationPosition from './utils/geolocation'
import './index.css'

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
const loader = new Loader(GOOGLE_MAPS_API_KEY)

const FormRoute = styled('form')
  (({ theme: _theme }) => ({ margin: _theme.spacing(2) }))

const DivButton = styled('div')
  (({ theme: _theme }) => ({ textAlign: 'center', margin: _theme.spacing(1) }))

const MapContainer = styled('div')(({ theme: _theme }) => ({
  width: '100%',
  height: '100%'
}))

function App() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    (async () => {
      await loader.load()
      const position = await geolocationPosition()
      const divMap = document.getElementById('map') as HTMLElement
      new google.maps.Map(divMap, {
        zoom: 15,
        center: { lat: position.latitude, lng: position.longitude }
      })
    })()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Grid container style={{ width: '100%', height: '100%' }}>
        <Grid item xs={12} sm={3} >
          <FormRoute>
            <InputLabel id='label-rota'>CHOOSE ROUTE</InputLabel>
            <Select fullWidth labelId="label-rota" >
              <MenuItem value={10}>ROUTE 1</MenuItem>
              <MenuItem value={20}>ROUTE 2</MenuItem>
              <MenuItem value={30}>ROUTE 3</MenuItem>
            </Select>

            <DivButton>
              <Button type="submit" variant="contained">
                Start
              </Button>
            </DivButton>
          </FormRoute>
        </Grid>
        <Grid item xs={12} sm={9}>
          <MapContainer id="map">
          </MapContainer>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App
