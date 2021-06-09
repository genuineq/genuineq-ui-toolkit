//** Dependencies. */

import { _ } from './utilities/utilities.js'
import Dropdown from "./classes/Dropdown.js"

_('dropdown').el().map((i, el) => new Dropdown(el))
