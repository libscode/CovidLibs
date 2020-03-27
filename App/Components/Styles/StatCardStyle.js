import { StyleSheet } from 'react-native'
import { Fonts } from '../../Themes'
import { apply, family, colors } from 'osmicsx'

export default StyleSheet.create({
  container: apply([
    "bg-gray-900",
    "flex",
    "row",
    "items-center",
    "mb-4",
    "p-5",
    "rounded-lg",
    "shadow"
  ]),
  cardLabel: apply([
    "text-white",
    "text-base",
    family(Fonts.type.medium),
    "mb-1"
  ]),
  countLabel: apply([
    "text-white",
    "text-5xl",
    family(Fonts.type.bold)
  ])
})
