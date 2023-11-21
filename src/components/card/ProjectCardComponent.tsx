import {Component} from "solid-js";
import {Box, Card, CardContent, CardMedia, Link, Typography} from "@suid/material";
import {ProjectCardComponentProps} from "../models";

const ProjectCardComponent: Component<ProjectCardComponentProps> = ({
  projectName,
  image,
  link
}) => {

  return (
    <Card sx={{ borderRadius: 0 }} variant="outlined">
      <Link href={link} sx={{ display: 'flex', textDecoration: 'none' }}>
        <CardMedia
          component="img"
          sx={{ width: 175 }}
          image={image.src}
          alt={image.caption}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h4">
              {projectName}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Mac Miller
            </Typography>
          </CardContent>
        </Box>
      </Link>
    </Card>
  );
}

export default ProjectCardComponent;
