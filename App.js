import { Component, React } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      frase: '',
      img: require('./imgs/biscoito.png'),
    };

    this.frases = [
      'A sorte favorece a mente bem preparada.',
      'Hoje é um ótimo dia para começar algo novo.',
      'O sucesso está a um passo de sair da sua zona de conforto.',
      'Acredite: o universo conspira a seu favor.',
      'Pequenas ações geram grandes conquistas.',
      'Você é mais forte do que imagina.',
      'Oportunidades incríveis estão a caminho.',
      'Seja a mudança que você quer ver no mundo.',
      'Confie no processo — cada passo conta.',
      'Grandes coisas estão reservadas para quem não desiste.',
    ];
    this.quebraBiscoito = this.quebraBiscoito.bind(this);
  }
  quebraBiscoito() {
    let random = Math.floor(Math.random() * this.frases.length);

    this.setState({
      frase: this.frases[random],
      img: require('./imgs/biscoitoAberto.png')
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textoFrase} >Biscoito da Sorte</Text>
        vi
        <Image source={this.state.img} style={styles.img} />

        <Text style={styles.textoFrase}>{this.state.frase}</Text>
        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    textAlign: 'center',
    fontStyle: 'italic',
    height: 65,
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 1,
    borderColor: '#dd7b22',
    borderRadius: 25,
    textAlign: 'center',
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});
