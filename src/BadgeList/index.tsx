import * as React from "react";
import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";
import { compose } from "recompose";

const styles = createStyles({
    container: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "flex-start",
        alignItems: "center"
    }
});

interface Props {
    style?: React.CSSProperties;
    className?: string;
}

export type BadgeListProps = Props & WithStyles<typeof styles>;

const BadgeList: React.SFC<BadgeListProps> = ({ children, classes, style, className }) => {
    const containerClass = `${classes.container} ${className}`.trim();
    return (
        <div className={containerClass} style={style}>
            {children}
        </div>
    )
}

export default compose<{}, BadgeListProps>(
    withStyles(styles)
)(BadgeList);