import React from 'react'
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles";
import { LabeledBadge, BadgeList } from '@insightlabs/mui-labeled-badge'
import CssBaseline from "@material-ui/core/CssBaseline";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

export default function App() {
  const [anchor, setAnchor] = React.useState(null);
  const badgeRef = React.useRef(null);

  function handleClick({ label, value }) {
    alert(`Clicked. Label: ${label}, value: ${value}`);
  }

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

      <div style={{ margin: 20, display: "flex" }}>

        <LabeledBadge label="Click" value="Me" onClick={handleClick} />
        <LabeledBadge label="Inverted" value="23" color="secondary" inverted />
      </div>
      <div>
        <LabeledBadge label="Menu Anchor" value="Test" ref={badgeRef} onClick={() => setAnchor(badgeRef.current)} />
      </div>
      <Menu anchorEl={anchor} open={!!anchor} keepMounted onClose={() => setAnchor(null)}>
        <MenuItem onClick={() => setAnchor(null)}>Hello</MenuItem>
      </Menu>
    </ThemeProvider>
  )
}