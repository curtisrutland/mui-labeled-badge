# @insightlabs/mui-labeled-badge

> 

[![NPM](https://img.shields.io/npm/v/@insightlabs/mui-labeled-badge.svg)](https://www.npmjs.com/package/@insightlabs/mui-labeled-badge) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @insightlabs/mui-labeled-badge @material-ui/core
#or
yarn add @insightlabs/mui-labeled-badge @material-ui/core
```

## Usage

```jsx
import React from 'react'
import { LabeledBadge, BadgeList } from '@insightlabs/mui-labeled-badge'

class Example extends React.Component {
  render () {
    return (
      <BadgeList>
        <LabeledBadge label="Test" value={10} />
        <LabeledBadge label="Test" value={10} color="secondary" />
        <LabeledBadge label="Test" value={10} color="#000"/>
        <LabeledBadge label="Test" value={10} color="rgb(255, 0, 0)" />
      </BadgeList>
    )
  }
}
```

## License

MIT
