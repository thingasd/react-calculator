import { useState } from "react";
import { Paper, Box, BottomNavigationAction, BottomNavigation } from "@mui/material/";
import { Restore, Favorite, LocationOn } from "@mui/icons-material/";

const BottomNav = () => {
  const [value, setValue] = useState(0);
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <Box>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<Restore />} />
          <BottomNavigationAction label="Favorites" icon={<Favorite />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
        </BottomNavigation>
      </Box>
    </Paper>
  );
};

export default BottomNav;
