import { Component, React } from 'react';
import { View, StyleSheet, Image } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./imgs/biscoito.png')} style={styles.img} />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  img: {
    width: 250,
    height: 250,
  }
})

