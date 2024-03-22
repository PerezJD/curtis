import React, {FunctionComponent} from "react";

import {ProjectCardComponentProps} from "../../../models";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const ProjectCardComponent: FunctionComponent<ProjectCardComponentProps> = ({
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
