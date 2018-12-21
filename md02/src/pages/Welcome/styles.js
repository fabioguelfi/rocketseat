import { StyleSheet } from 'react-native'
import { colors, metrics } from '~/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secundary,
    padding: metrics.basePadding * 2,
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  title: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },

  text: {
    textAlign: 'center',
    marginTop: metrics.baseMargin,
    color: colors.light,
    fontSize: 16,
    lineHeight: 21,
  },

  error: {
    color: colors.danger,
    fontSize: 16,
    marginTop: metrics.baseMargin,
    textAlign: 'center',
  },

  form: {
    marginTop: metrics.baseMargin * 2,
  },

  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 44,
    paddingHorizontal: metrics.basePadding,
  },

  button: {
    marginTop: metrics.baseMargin,
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
})

export default styles
