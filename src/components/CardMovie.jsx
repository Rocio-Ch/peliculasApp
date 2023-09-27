import * as React from "react";
import { Link } from "react-router-dom";

// Material UI components and styles
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function LatestReleases({ id, title, poster }) {

  return (
    <Link to={`/description/${id}`} key={id}>
      <Card className="w-[250px] h-[340px] m-10 hover:transition hover:duration-300 hover:ease-in-out hover:shadow-lg dark:hover:shadow-[0px_5px_30px_0px_rgba(24,17,167,79%)] hover:scale-105">
        <CardMedia
          className="h-[300px]"
          component="img"
          alt={title}
          image={`https://image.tmdb.org/t/p/w500${poster}`}
        />
        <Typography
          sx={{
            padding: "8px",
            textAlign: "center",
            fontWeight: "700",
            fontSize: "1.1rem",
          }}
          component="div"
        >
          {title}
        </Typography>
      </Card>
    </Link>
  );
}
