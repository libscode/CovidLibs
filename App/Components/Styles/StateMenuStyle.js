import { StyleSheet } from 'react-native'
import { Fonts } from '../../Themes'
import { apply, colors, family } from 'osmicsx'

export default StyleSheet.create({
  contaienr: apply([
    "flex"
  ]),
  menuLabel: apply([
    "text-white",
    "text-base",
    "text-center",
    family(Fonts.type.medium),
    "wrap",
    "leading-8"
  ]),
  title: apply([
    "text-white",
    "ml-5",
    "mb-2",
    "text-2xl",
    family(Fonts.type.bold)
  ]),
  menuWrapper: apply([
    "bg-gray-900",
    "flex",
    "items-center",
    "justify-center",
    "mx-2",
    "mb-4",
    "p-5",
    "rounded-lg",
    "shadow"
  ]),
  emptyMenu: apply([
    "flex",
    "items-center",
    "justify-center",
    "mx-2",
    "mb-4",
    "p-5"
  ]),
})
