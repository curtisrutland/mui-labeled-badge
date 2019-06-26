# @insightlabs/mui-labeled-badge

> A component library to create labeled badges

## Example Badges
![example images](https://i.imgur.com/uNK6e0m.png "Example")

[![NPM](https://img.shields.io/npm/v/@insightlabs/mui-labeled-badge.svg)](https://www.npmjs.com/package/@insightlabs/mui-labeled-badge) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Release Notes
version 2.1.0 includes LabeledBadgeMenu component. Create drop-downs using LabeledBadges.

version 2.0.2 vertically centers label and value

version 2.0.1 includes forwardRef for LabeledBadge

version 2.0.0 is updated to work with Material-UI 4.

## Install

```bash
npm install --save @insightlabs/mui-labeled-badge @material-ui/core@latest @material-ui/styles@latest
#or
yarn add @insightlabs/mui-labeled-badge @material-ui/core@latest @material-ui/styles@latest
```

## Usage

```jsx
import React from 'react'
import { LabeledBadge, BadgeList } from '@insightlabs/mui-labeled-badge'

function ExampleComponent() {
  return (
    <BadgeList>
      <LabeledBadge label="Primary" value="Color" />
      <LabeledBadge label="Secondary" value="Color" color="secondary" />
      <LabeledBadge label="Custom" value="Color" color="#f4a742" />
      <LabeledBadge label="Number" value={4500} color="rgb(183, 7, 7)"  />
      <LabeledBadge label="Inverted" value={123} color="primary"  />
      <LabeledBadge label="Click" value="Me" onClick={(args) => console.log("Labeled badge clicked!", args)} />
    </BadgeList>
  )
}
```

## LabeledBadgeMenu Usage

```jsx
import React from 'react';
import { LabeledBadgeMenu, BadgeList } from '@insightlabs/mui-labeled-badge';
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const menuItems = [
    { id: 1, value: "Menu Item 1" },
    { id: 2, value: "Menu Item 2" },
    { id: 3, value: "Menu Item 3" }
];

function ExampleComponent() {
  const [selectedItem, setSelectedItem] = React.useState(menuItems[0]);
  return (
    <BadgeList>
      <LabeledBadgeMenu
          title="Example"
          text={selectedItem.value}
          icon={<ArrowDropDownIcon />}
          menuItems={menuItems}
          color="primary"
          onItemSelected={setSelectedItem} />
    </BadgeList>
  )
}
```

## License

MIT
