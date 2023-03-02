import HomeIcon from "@mui/icons-material/Home";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import SetMealIcon from '@mui/icons-material/SetMeal';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

export const navData = [
  {
    id: 0,
    icon: <HomeIcon />,
    text: "Inicio",
    link: "/",
  },
  {
    id: 1,
    icon: <HistoryEduIcon />,
    text: "Moscas",
    link: "/flies",
  },
  {
    id: 2,
    icon: <SetMealIcon />,
    text: "Truchas",
    link: "/trouts",
  },
  {
    id: 3,
    icon: <TravelExploreIcon />,
    text: "Lugares",
    link: "/places",
  },
];
