import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

export default function ProjectCard({ title, description, image, onView, onCode }) {
  return (
    <Card
      sx={{
        width: 300,           // fixed width
        height: 400,          // fixed height
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "transform 0.2s",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <CardMedia
        component="img"
        height="180"           // fixed media height
        image={image}
        alt={title}
        sx={{ objectFit: "cover", width: "100%" }}
      />
      <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <Typography gutterBottom variant="h5" component="div" textAlign="center">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }} textAlign="center">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small" color="primary" onClick={onView}>
          View
        </Button>
        <Button size="small" color="primary" onClick={onCode}>
          Code
        </Button>
      </CardActions>
    </Card>
  );
}