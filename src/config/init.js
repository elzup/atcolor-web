// @flow

import { injectGlobal } from 'styled-components'

injectGlobal`
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI',
  'Noto Sans Japanese', 'ヒラギノ角ゴ ProN W3', Meiryo, sans-serif;
  margin: 0;
}

li {
	list-style-type: none;
}

.is-active {
	color: red;
}

td, th {
	text-align: left;
}

a {
	text-decoration: none;
}
`
