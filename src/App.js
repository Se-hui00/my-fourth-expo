import { StyleSheet, Text, View } from 'react-native';
import { Header, Contents, Footer } from './components/Layout';
import { ThemeProvider } from 'styled-components/native';
import { lightTheme, darkTheme } from './components/Theme';

const App = () => {
  const flag = true;
  const theme = flag ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Header />
        <Contents theme={theme} />
        <Footer />
      </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
