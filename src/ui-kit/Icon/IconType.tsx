import { newGuid } from 'utils/guid'
import { ReactComponent as ArrowDown } from '../assets/icons/ArrowDown.svg'
import { ReactComponent as ArrowLeft } from '../assets/icons/ArrowLeft.svg'
import { ReactComponent as ArrowRight } from '../assets/icons/ArrowRight.svg'
import { ReactComponent as Back } from '../assets/icons/Back.svg'
import { ReactComponent as Center } from '../assets/icons/Center.svg'
import { ReactComponent as Checkbox } from '../assets/icons/Checkbox.svg'
import { ReactComponent as Close } from '../assets/icons/Close.svg'
import { ReactComponent as Copy } from '../assets/icons/Copy.svg'
import { ReactComponent as Drag } from '../assets/icons/Drag.svg'
import { ReactComponent as Down} from '../assets/icons/Down.svg'
import { ReactComponent as Dropdown} from '../assets/icons/Dropdown.svg'
import { ReactComponent as Dropdown_disabled} from '../assets/icons/Dropdown_disabled.svg'
import { ReactComponent as Edit } from '../assets/icons/Edit.svg'
import { ReactComponent as Exit } from '../assets/icons/Exit.svg'
import { ReactComponent as Home } from '../assets/icons/Home.svg'
import { ReactComponent as List } from '../assets/icons/List.svg'
import { ReactComponent as Minus } from '../assets/icons/Minus.svg'
import { ReactComponent as Next } from '../assets/icons/Next.svg'
import { ReactComponent as Pdf } from '../assets/icons/files/Pdf.svg'
import { ReactComponent as Plus } from '../assets/icons/Plus.svg'
import { ReactComponent as Search } from '../assets/icons/Search.svg'
import { ReactComponent as Spinner } from '../assets/icons/Spinner.svg'
import { ReactComponent as Telegram } from '../assets/icons/Telegram.svg'
import { ReactComponent as Visibility } from '../assets/icons/Visibility.svg'
import { ReactComponent as VisibilityOff } from '../assets/icons/VisibilityOff.svg'

export type IconType =
  | 'ArrowDown'
  | 'ArrowLeft'
  | 'ArrowRight'
  | 'Back'
  | 'Center'
  | 'Checkbox'
  | 'Close'
  | 'Copy'
  | 'Drag'
  | 'Dropdown'
  | 'Dropdown_disabled'
  | 'Down'
  | 'Edit'
  | 'Exit'
  | 'Home'
  | 'List'
  | 'Minus'
  | 'Next'
  | 'Pdf'
  | 'Plus'
  | 'Search'
  | 'Spinner'
  | 'Telegram'
  | 'Visibility'
  | 'VisibilityOff'

export const iconTypes = new Map([
  ['ArrowDown', <ArrowDown key={newGuid()} />],
  ['ArrowLeft', <ArrowLeft key={newGuid()} />],
  ['ArrowRight', <ArrowRight key={newGuid()} />],
  ['Back', <Back key={newGuid()} />],
  ['Center', <Center key={newGuid()} />],
  ['Checkbox', <Checkbox key={newGuid()} />],
  ['Close', <Close key={newGuid()} />],
  ['Copy', <Copy key={newGuid()} />],
  ['Drag', <Drag key={newGuid()} />],
  ['Dropdown', <Dropdown key={newGuid()}/>],
  ['Dropdown_disabled',<Dropdown_disabled  key={newGuid()}/>],
  ['Down', <Down key={newGuid()}/>],
  ['Edit', <Edit key={newGuid()} />],
  ['Exit', <Exit key={newGuid()} />],
  ['Home', <Home key={newGuid()} />],
  ['List', <List key={newGuid()} />],
  ['Minus', <Minus key={newGuid()} />],
  ['Next', <Next key={newGuid()} />],
  ['Pdf', <Pdf key={newGuid()} />],
  ['Plus', <Plus key={newGuid()} />],
  ['Search', <Search key={newGuid()} />],
  ['Spinner', <Spinner key={newGuid()} />],
  ['Telegram', <Telegram key={newGuid()} />],
  ['Visibility', <Visibility key={newGuid()} />],
  ['VisibilityOff', <VisibilityOff key={newGuid()} />],
])
