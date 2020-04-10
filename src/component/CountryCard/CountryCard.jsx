import React from "react";
import styles from "./CountryCard.module.scss";
import Card from "@material-ui/core/card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const CountryCard = (props) => {
  const {countryRegion, provinceState, confirmed, recovered, deaths, admin2} = props;

const provinceJSX = provinceState ? <Typography component="p">{provinceState}</Typography>: (null);
const cityJSX = admin2 && provinceState ? <Typography component="p">{admin2}</Typography>: (null);

  return (
    <Card>
      <CardContent>
          <Typography gutterBottom varient="headline" component="h2">{countryRegion}</Typography>
          {provinceJSX}
          {cityJSX}
          <Typography component="p">Confirmed cases: {confirmed}</Typography>
          <Typography component="p">Confirmed recoveries: {recovered}</Typography>
          <Typography component="p">Confirmed deaths: {deaths}</Typography>
          <CardActions>
              <Button size="small" color="primary">More info</Button>
          </CardActions>
      </CardContent>
    </Card>
  );
};

export default CountryCard;
