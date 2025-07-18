import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const TotalProject = props => {
  return (
    <View style={styles.container}>
      <Text>{`${props.totalProduct} Products`}</Text>
      <Text>
        sort by<Text style={{ fontWeight: 'bold' }}> Relevance</Text>{' '}
      </Text>
    </View>
  );
};

export default TotalProject;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
});
