import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import HighMaps from "../Charts/HighMaps";
import LineChart from "../Charts/LineChart";

function Summary({ report, selectedCountry }) {
  const [mapData, setMapData] = useState({});

  useEffect(() => {
    if (selectedCountry) {
      import(
        `@highcharts/map-collection/countries/${selectedCountry}/${selectedCountry}-all.geo.json`
      ).then((res) => setMapData(res));
    }
  }, [selectedCountry]);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item sm={8} xs={12}>
          <LineChart data={report} />
        </Grid>
        <Grid item sm={4} xs={12}>
          <HighMaps mapData={mapData} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Summary;
