import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import dashboardStyles from '@/ecrans/Home/style'

const index = () => {
  return (
    <TouchableOpacity style={dashboardStyles.scrollableListItem}>
        {/* <SVG_ICON width={50} height={50} /> */}
        <Text style={dashboardStyles.mainText}>{item.mainText}</Text>
        <Text style={dashboardStyles.subText}>{item.subText}</Text>
    </TouchableOpacity>
  )
}

export default index