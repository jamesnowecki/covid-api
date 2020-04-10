import React, {Component} from "react";
import styles from "./DashBoard.module.scss";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CountryCard from "../../component/CountryCard";
import OverviewCard from "../../component/OverviewCard";

class DashBoard extends Component {
    state = {
      data: [],
      countryData: [],
      individualData: [],
      searchString: "",
    };

    constructor() {
      super()
      this.getAPIdataOverview()
      this.getAPIdataCountries()
      // this.getAPIdataIndividual();
    };

    getAPIdataOverview = () => {
      fetch("https://covid19.mathdro.id/api")
      .then((response) => response.json())
      .then((data) => {
        this.setState({data: data});
      })
      .catch((error) => console.log(error));
    };

    getAPIdataCountries = () => {
      fetch("https://covid19.mathdro.id/api/countries")
      .then((response) => response.json())
      .then((countries) => {
        this.setState({countryData: countries});
      })
      .catch((error) => console.log(error));
    };

    // getAPIdataCountries = () => {
    //   fetch("https://covid19.mathdro.id/api/")
    //   .then((response) => response.json())
    //   .then((countries) => {
    //     this.setState({countryData: countries});
    //   })
    //   .catch((error) => console.log(error));
    // };

    // onSearchInputChange = (event) => {
    //   if(event.target.value) {
    //     this.setState({searchString: event.target.value})
    //   } else {
    //     this.setState({searchString: ""})
    //   }
    //   this.getAPIdataOverview();
    // };

    render() {
      return (
        <>
          {this.state.data ? (
              <div>
                <TextField placeholder="Search here" onChange={this.onSearchInputChange} />
                {/* <OverviewCard data={this.state.data}/> */}
                {/* <Grid container spacing={12}>
                    {this.state.countryData.map(location => (
                      <Grid key={location.combinedKey} item xs={12} sm={6} lg={4} xl={3}>
                        <CountryCard location={location}></CountryCard>
                        </Grid>
                    ))}
                </Grid> */}
              </div>
          ): "No data retrieved"}
        </>
      )
    }

}

export default DashBoard;
