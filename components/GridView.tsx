import React from 'react';
import {StyleSheet, View} from 'react-native';

const GridView = ({data, col = 6, renderItem}) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View key={index} style={[styles.gridItem, {width: `${100 / col}%`}]}>
          <View style={styles.itemContainer}>{renderItem(item)}</View>
        </View>
      ))}
    </View>
  );
};

export default GridView;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridItem: {
    padding: 5,
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
