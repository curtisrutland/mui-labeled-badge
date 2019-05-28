import * as React from 'react';
import { withStyles, WithStyles, withTheme, WithTheme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { compose } from "recompose";

const styles = createStyles({
  wrapper: {
    margin: 2,
    borderRadius: 4,
    border: '1px solid'
  },
  name: {
    padding: '3px 5px',
  },
  value: {
    padding: '3px 5px',
  }
});

interface Props {
  label: string;
  value: string | number | null | undefined;
  color: string;
}

export type LabeledBadgeProps = Props & WithStyles<typeof styles> & WithTheme;

const LabeledBadge: React.SFC<LabeledBadgeProps> = ({ classes, label, value, color = "primary", theme }) => {

  const wrapperStyle: React.CSSProperties = {};
  const valueStyle: React.CSSProperties = {};

  if (color === "primary") {
    const palette = theme.palette.primary;
    wrapperStyle.borderColor = palette.main;
    valueStyle.backgroundColor = palette.main;
    valueStyle.color = palette.contrastText;
  } else if (color === "secondary") {
    const palette = theme.palette.secondary;
    wrapperStyle.borderColor = palette.main;
    valueStyle.backgroundColor = palette.main;
    valueStyle.color = palette.contrastText;
  } else {
    wrapperStyle.borderColor = color;
    valueStyle.backgroundColor = color;
    valueStyle.color = theme.palette.getContrastText(color)
  }

  let displayValue: string;
  if (value == null)
    displayValue = "N/A";
  else if (typeof value === "number") {
    displayValue = value.toString();
  } else {
    displayValue = value;
  }

  return (
    <Typography noWrap variant="body2" className={classes.wrapper} style={wrapperStyle}>
      <span className={classes.name}>{label}</span>
      <span className={classes.value} style={valueStyle}>{displayValue}</span>
    </Typography>
  )
}

export default compose<Props, LabeledBadgeProps>(
  withStyles(styles),
  withTheme()
)(LabeledBadge);