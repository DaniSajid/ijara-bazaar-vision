import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button, CardHeader, Grid } from "@mui/material";

const CardComp = ({ catIndex, catName, catImg, catDesc, catTit }) => {
  return (
    <>
      <Grid key={catIndex} item lg={3} md={4} sm={6} xs={12}>
        <Card sx={{ maxWidth: 355 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="190"
            image={catImg}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {catName}
            </Typography>
            <Typography variant="body1" color="text.dark">
              {catTit}
            </Typography>
            <Typography variant="body3" color="text.secondary">
              {catDesc}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">View all product</Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default CardComp;
