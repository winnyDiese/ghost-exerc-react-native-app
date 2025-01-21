import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
// import dashboardStyles from '@/ecrans/Home/style'

const ActivityItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.scrollableListItem}>
        {/* <SVG_ICON width={50} height={50} /> */}
        <Text style={styles.mainText}>{item.mainText}</Text>
        <Text style={styles.subText}>{item.subText}</Text>
    </TouchableOpacity>
  )
}

export default ActivityItem