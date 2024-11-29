import { assets } from "../assets/assets";
import Checkbox from "@mui/material/Checkbox";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import "bootstrap/dist/css/bootstrap.min.css";

function Blogcard() {
  return (
    <Card>
      <CardHeader
        id="blogHeader"
        avatar={
          <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
            UK
          </Avatar>
        }
        action={
          <Checkbox
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
            sx={{
              "&.Mui-checked": {
                color: "secondary.main",
              },
            }}
          />
        }
        title="Author Name"
        subheader="Date"
        sx={{
          "& .MuiCardHeader-title": {
            fontFamily: "Montserrat",
            fontWeight: "600",
          },
          "& .MuiCardHeader-subheader": {
            fontFamily: "Lato",
            color: "#615561",
          },
        }}
      />
      <CardMedia component="img" height="194" image={assets.defaultthumbnail} alt="Paella dish" />
      <CardContent>
        <Typography variant="h6" sx={{ fontFamily: "Montserrat", fontWeight: "500", color: "#131113" }}>
          Title
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: "Lato", color: "#615561" }}>
          Description
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Blogcard;
