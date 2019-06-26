import * as React from "react";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LabeledBadge  from "../LabeledBadge";

interface MenuItem {
    [index: string]: string;
}

interface Props {
    title: string;
    text: string;
    icon?: JSX.Element;
    menuItems: MenuItem[];
    onItemSelected: (item: MenuItem) => void;
    menuItemsKeyProperty: string;
    menuItemsDisplayProperty: string;
    color: string;
}

export type LabeledBadgeMenuProps = Props;

interface TextWithIconProps {
    text: string;
    icon?: JSX.Element;
}

function TextWithIcon(props: TextWithIconProps) {
    return (
        <>
            {props.text}
            {props.icon}
        </>
    )
}

export default function LabeledBadgeMenu<T extends LabeledBadgeMenuProps>({
    title,
    text,
    icon,
    menuItems = [],
    onItemSelected,
    menuItemsKeyProperty = "id",
    menuItemsDisplayProperty = "value",
    color,
    ...props
}: T) {
    const [anchor, setAnchor] = React.useState(null);
    const badgeRef = React.useRef(null);
    
    function handleClose() {
        setAnchor(null);
    }

    function handleItemSelected(item: MenuItem) {
        handleClose();
        onItemSelected(item);
    }

    function handleBadgeClick() {
        setAnchor(badgeRef.current);
    }

    function createMenuItems() {
        if(!menuItems) return null;
        return menuItems.map(item => (
            <MenuItem key={item[menuItemsKeyProperty]} onClick={() => handleItemSelected(item)}>
                {item[menuItemsDisplayProperty]}
            </MenuItem>
        ));
    }

    return (
        <>
            <LabeledBadge
                label={title}
                value={<TextWithIcon text={text} icon={icon} />}
                ref={badgeRef}
                color={color}
                onClick={menuItems && menuItems.length > 1 ? handleBadgeClick : undefined}
                {...props} />
            <Menu anchorEl={anchor} open={Boolean(anchor)} keepMounted onClose={handleClose}>
                {createMenuItems()}
            </Menu>
        </>
    )
}