import React from 'react'
import PropTypes from 'prop-types'

import { View, Text, Image, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles'

const AlbumItem = ({ album }) => (
  <TouchableOpacity onPress={() => {}} style={styles.container}>
    <Image style={styles.thumbanil} source={{ uri: album.thumbnail }} />
    <View style={styles.info}>
      <Text style={styles.title}>{album.title}</Text>
      <Text style={styles.author}>{album.author}</Text>
    </View>
    <Icon name="more-horiz" size={24} style={styles.more} />
  </TouchableOpacity>
)

AlbumItem.propTypes = {
  album: PropTypes.shape({
    thumbanil: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
}

export default AlbumItem