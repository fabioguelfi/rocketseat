import { StyleSheet } from 'react-native'
import { metrics, colors } from '../../styles'

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
  },
  loading: {
    marginTop: metrics.basePadding,
  },
})

export default styles
