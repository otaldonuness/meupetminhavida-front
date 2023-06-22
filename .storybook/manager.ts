import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'
import { darkTheme } from './themes'

addons.setConfig({
  theme: themes.dark
})
