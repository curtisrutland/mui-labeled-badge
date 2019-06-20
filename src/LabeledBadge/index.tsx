import * as React from 'react';
import { withStyles, WithStyles, withTheme, WithTheme, createStyles } from "@material-ui/styles";
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

type Value = string | number | JSX.Element | null | undefined;

interface LabeledBadgeOnClickArgs {
  label: string;
  value: Value;
}

interface Props {
  label: string;
  value: Value;
  color: string;
  inverted: boolean;
  onClick?: (args: LabeledBadgeOnClickArgs) => void;
  ref: React.Ref<HTMLDivElement>
}

export type LabeledBadgeProps = Props & WithStyles<typeof styles> & WithTheme<any>;


const LabeledBadge: React.FunctionComponent<LabeledBadgeProps> = React.forwardRef(({
  classes,
  label,
  value,
  color = "primary",
  inverted = false,
  theme,
  onClick
}, ref) => {

  function handleClick() {
    if (onClick != null) {
      onClick({ label: label, value: value });
    }
  }

  const container: React.CSSProperties = { cursor: onClick != null ? "pointer" : "unset" };
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
    <Typography variant="body2" component="span" className={classes.root} onClick={handleClick} style={container}>
      <div className={classes.label} style={labelStyle}>{label}</div>
      <div ref={ref} className={classes.value} style={valueStyle}>{value}</div>
    </Typography>
  )
})

export default compose<Props, LabeledBadgeProps>(
  withStyles(styles),
  withTheme
)(LabeledBadge);