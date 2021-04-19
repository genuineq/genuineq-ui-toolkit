//** Dependencies. */

import { _ } from './utilities/utilities.js'

import Test from './classes/test'

_('test').el().map((i, el) => new Test(el))
