import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { LabeledBadge, BadgeList } from '@insightlabs/mui-labeled-badge'
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BadgeList style={{border: "1px solid black", margin: 10}}>
          <LabeledBadge label="Test" value={10} />
          <LabeledBadge label="Test" value={10} color="secondary" />
          <LabeledBadge label="Test" value={10} color="#000"/>
          <LabeledBadge label="Test" value={10} color="rgb(255, 0, 0)" />
        </BadgeList>
        <div style={{height: 10}} />
        <BadgeList style={{width: 200, border: "1px solid black", margin: 10}}>
          <LabeledBadge label="Test" value={10} />
          <LabeledBadge label="Test" value={10} color="secondary" />
          <LabeledBadge label="Test" value={10} color="#000"/>
          <LabeledBadge label="Test" value={10} color="rgb(255, 0, 0)" />
        </BadgeList>
      </MuiThemeProvider>
    )
  }
}