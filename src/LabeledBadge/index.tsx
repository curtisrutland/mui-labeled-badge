import * as React from 'react';
import { withStyles, WithStyles, withTheme, WithTheme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { compose } from "recompose";

const padding = "0px 5px";

const styles = createStyles({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "stretch",
    margin: 2
  },
  label: {
    borderRadius: "4px 0 0 4px",
    border: "1px solid",
    borderRight: 0,
    padding
  },
  value: {
    borderRadius: "0 4px 4px 0",
    border: "1px solid",
    borderLeft: 0,
    padding,
  }
});

interface Props {
  label: string;
  value: string | number | null | undefined;
  color: string;
  inverted: boolean;
}

export type LabeledBadgeProps = Props & WithStyles<typeof styles> & WithTheme;

const LabeledBadge: React.SFC<LabeledBadgeProps> = ({ classes, label, value, color = "primary", inverted = false, theme }) => {

  const transparent: React.CSSProperties = {};
  const colored: React.CSSProperties = {};

  if (color === "primary") {
    const palette = theme.palette.primary;
    transparent.borderColor = palette.main;
    colored.backgroundColor = palette.main;
    colored.color = palette.contrastText;
  } else if (color === "secondary") {
    const palette = theme.palette.secondary;
    transparent.borderColor = palette.main;
    colored.backgroundColor = palette.main;
    colored.color = palette.contrastText;
  } else {
    transparent.borderColor = color;
    colored.backgroundColor = color;
    colored.color = theme.palette.getContrastText(color)
  }

  if (color === "primary") {
    const palette = theme.palette.primary;
    transparent.borderColor = palette.main;
    colored.borderColor = palette.main;
    colored.backgroundColor = palette.main;
    colored.color = palette.contrastText;
  } else if (color === "secondary") {
    const palette = theme.palette.secondary;
    transparent.borderColor = palette.main;
    colored.borderColor = palette.main;
    colored.backgroundColor = palette.main;
    colored.color = palette.contrastText;
  } else {
    transparent.borderColor = color;
    colored.borderColor = color;
    colored.backgroundColor = color;
    colored.color = theme.palette.getContrastText(color)
  }

  let labelStyle = inverted ? colored : transparent;
  let valueStyle = inverted ? transparent : colored;

  return (
    <Typography variant="body2" component="span" className={classes.root}>
      <div className={classes.label} style={labelStyle}>{label}</div>
      <div className={classes.value} style={valueStyle}>{value}</div>
    </Typography>
  )
}

export default compose<Props, LabeledBadgeProps>(
  withStyles(styles),
  withTheme()
)(LabeledBadge);