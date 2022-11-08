import {StyleSheet, Image, View, Text} from 'react-native';
import React from 'react';
import SwipeRender from 'react-native-swipe-render';

const App = () => {
  const data = new Array(1000).fill().map((value, index) => ({
    id: index,
    title: index,
    body: index,
  }));

  return (
    <SwipeRender
      data={data}
      renderItem={({item, index}) => {
        return (
          <View
            key={index}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{item.title}</Text>
          </View>
        );
      }}
      index={3}
      loadMinimal={true}
      loadMinimalSize={2}
      removeClippedSubviews={true}
    />
  );
};

export default App;

const styles = StyleSheet.create({});
