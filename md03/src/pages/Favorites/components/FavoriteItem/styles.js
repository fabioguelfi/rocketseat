import { StyleSheet } from 'react-native'
import { colors, metrics } from '~/styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    marginTop: metrics.basePadding,
    marginHorizontal: metrics.baseMargin,
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 54,
    height: 54,
    // borderRadius: 27,
    // borderColor: colors.darker,
    // borderWidth: 0.5,
  },

  info: {
    marginHorizontal: metrics.baseMargin,
    flex: 1,
  },

  title: {
    color: colors.darker,
    fontWeight: 'bold',
    fontSize: 16,
  },

  description: {
    color: colors.dark,
    marginTop: 3,
    fontSize: 14,
  },
})

export default styles
