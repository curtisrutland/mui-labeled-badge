# @insightlabs/mui-labeled-badge

> A component library to create labeled badges

## Example Badges
![example images](https://i.imgur.com/uNK6e0m.png "Example")

[![NPM](https://img.shields.io/npm/v/@insightlabs/mui-labeled-badge.svg)](https://www.npmjs.com/package/@insightlabs/mui-labeled-badge) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Note:
version 2.0.0 is updated to work with Material-UI 4.
version 2.0.1 includes forwardRef for LabeledBadge

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

function ExampleComponent {
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

## License

MIT
