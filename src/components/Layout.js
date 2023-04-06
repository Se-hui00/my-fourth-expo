import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Platform } from 'react-native';
import styled, { css } from 'styled-components/native';
import Button from './Button';
import Input from './Input';

const viewSize = css`
  width: 100;
  height: 100;
`;

const MyView = styled.View.attrs({
  id: 'wrap',
})`
  ${viewSize}
  background-color: yellow;
`;

const MyView2 = styled.View`
  ${viewSize}
  background-color: blue;
`;

const Header = () => {
  return (
    <SafeAreaView style={[styles.container, styles.header]}>
      <View style={styles.nav}>
        <Text style={styles.menu}>menu1</Text>
        <Text style={styles.menu}>menu2</Text>
        <Text style={styles.menu}>menu3</Text>
        <Text style={styles.menu}>menu4</Text>
      </View>
    </SafeAreaView>
  );
};

const Contents = props => {
  console.log(props);
  return (
    <SafeAreaView style={[styles.container, styles.contents]}>
      <Text style={[styles.text, styles.shadow]}>Contents</Text>
      <Text style={{ color: props.theme.purple }}>테마적용</Text>
      <View style={styles.viewShadow}></View>
      <MyView />
      <MyView2 />
      <Input />
    </SafeAreaView>
  );
};

const Footer = () => {
  return (
    <SafeAreaView style={[styles.container, styles.footer]}>
      <Text style={styles.text}>Footer</Text>
      <Button />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#f1c40f',
  },
  contents: {
    flex: 5,
    // backgroundColor: '#1abc9c',
    // height: 640,
  },
  footer: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  text: {
    fontSize: 26,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  menu: {
    flex: 1,
    justifyContent: 'center',
    fontSize: 10,
    padding: 5,
    // marginRight: 5,
    backgroundColor: 'rgba(0, 0, 255, 0.2)',
  },
  shadow: {
    backgroundColor: '#fff',
    elevation: 30,
  },
  viewShadow: {
    backgroundColor: '#fff',
    width: 100,
    height: 100,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
      android: {
        elevation: 10,
      },
    }),
  },
});

export { Header, Contents, Footer };
