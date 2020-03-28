import { StyleSheet } from 'react-native'
import { Fonts } from '../../Themes'
import { apply, family } from 'osmicsx'

export default StyleSheet.create({
  container: apply([
    "flex",
    "mb-3"
  ]),
  header: apply([
    "full",
    "pl-5",
    "mb-2"
  ]),
  headerTitle: apply([
    "text-white",
    "mb-2",
    "text-2xl",
    family(Fonts.type.bold)
  ]),
  statWrapper: apply([
    "bg-gray-900",
    "flex",
    "ml-5",
    "mb-4",
    "p-5",
    "rounded-lg",
    "shadow"
  ]),
  dateLabel: apply([
    "text-sm",
    "text-gray-400",
    "mb-1",
    family(Fonts.type.medium)
  ]),
  countLabel: apply([
    "text-4xl",
    "text-white",
    family(Fonts.type.bold)
  ]),
  helpLabel: apply([
    "text-base",
    "text-white",
    family(Fonts.type.medium)
  ])
})
