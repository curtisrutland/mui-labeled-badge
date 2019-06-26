import React from 'react'
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles";
import { LabeledBadge, BadgeList, LabeledBadgeMenu } from '@insightlabs/mui-labeled-badge'
import CssBaseline from "@material-ui/core/CssBaseline";
import SvgIcon from '@material-ui/core/SvgIcon';
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import menuItems from "./menuItems";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

function DropDownIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/>
    </SvgIcon>
  )
}

export default function App() {
  

  function handleClick({ label, value }) {
    alert(`Clicked. Label: ${label}, value: ${value}`);
  }

  const [selectedItem, setSelectedItem] = React.useState(menuItems[0]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BadgeList style={{ border: "1px solid black", margin: 10 }}>
        <LabeledBadge label="Test" value={10} />
        <LabeledBadge label="Test" value={10} color="secondary" />
        <LabeledBadge label="Test" value={10} color="#000" />
        <LabeledBadge label="Test" value={10} color="rgb(255, 0, 0)" inverted />
      </BadgeList>
      <div style={{ height: 10 }} />
      <BadgeList style={{ width: 200, border: "1px solid black", margin: 10 }}>
        <LabeledBadge label="Test" value={10} />
        <LabeledBadge label="Test" value={10} color="secondary" />
        <LabeledBadge label="Test" value={10} color="#000" />
        <LabeledBadge label="Test" value={10} color="rgb(255, 0, 0)" inverted />
      </BadgeList>
      <div style={{height: 10}} />
      <BadgeList style={{boarder: "1px solid black", margin: 10}}>
        <LabeledBadgeMenu
          title="Example"
          text={selectedItem.value}
          icon={<ArrowDropDownIcon />}
          menuItems={menuItems}
          color="primary"
          onItemSelected={setSelectedItem} />
      </BadgeList>
      <div style={{ margin: 20, display: "flex" }}>

        <LabeledBadge label="Click" value="Me" onClick={handleClick} />
        <LabeledBadge label="Inverted" value="23" color="secondary" inverted />
      </div>
      
    </ThemeProvider>
  )
}