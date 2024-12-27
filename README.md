# gestejs

![](https://badgen.net/npm/v/gestejs)

## Installation

package manager: 

```sh
npm install gestejs --save

pnpm add gestejs

```

## Usage

Vanilla javascript:

import:

```js
import { TapGesture, PanGesture, PinchGesture } from 'gestejs'

const el = document.getElementById('tap')

```

cdn:

```html
<script src="https://unpkg.com/gestejs/dist/gestejs.min.js"></script>
<script>
  const el = document.getElementById('tap')
  

</script>

```

Vue:

```js
import { useTap, usePan, usePinch } from 'gestejs/vue'

```

React:

```js
import { usePress, useRotate, useSwipe } from 'gestejs/react'

```

## Examples

