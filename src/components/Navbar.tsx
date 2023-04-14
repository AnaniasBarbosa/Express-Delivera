import DriveEtaIcon from '@mui/icons-material/DriveEtaOutlined';
import {
  AppBar,
  Toolbar, 
  Typography, 
  IconButton,
} from "@mui/material";

export default function Navbar() {
  return (
      <AppBar position="static" enableColorOnDark >
        <Toolbar >
          <IconButton color="inherit" edge="start">
            <DriveEtaIcon/>
          </IconButton>
          <Typography variant="h6">Express Delivera</Typography>
        </Toolbar >
      </AppBar>
  )
}