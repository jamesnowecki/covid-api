import React from "react";
import styles from "./OverviewCard.module.scss";
import Card from "@material-ui/core/card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


const OverviewCard = (data) => {

  console.log(data)
const {deaths, recovered, confirmed} = data;


  return (
    <Card>
    <CardContent>
        <Typography gutterBottom varient="headline" component="h2">Global data:</Typography>
        <Typography component="p">Confirmed cases: {confirmed.value}</Typography>
        <Typography component="p">Confirmed recoveries: {recovered.value}</Typography>
        <Typography component="p">Confirmed deaths: {deaths.value}</Typography>
    </CardContent>
  </Card>
  );
};

export default OverviewCard;
