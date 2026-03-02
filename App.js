import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground,ScrollView, Dimensions } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { Switch } from 'react-native';

const {width, height} = Dimensions.get('window');



export default function App() {



  
const[nome,setNome] = useState('');
const[telefone,setTelefone] = useState('');
const[sexo,setSexo] = useState(0);
const[avaliaçao,setavaliaçao] = useState(10);
const[avaliAno,setavaliAno] = useState(false);
const sexos=[
{sexoNome: 'Masculino', Valor: 1},
{sexoNome: 'Feminino', Valor: 2},
{sexoNome: 'indefinido', Valor: 3}
]
let sexoItems = sexos.map((v,k) => { 
  return <Picker.Item key={k} value={k} label={v.sexoNome}
  ></Picker.Item>
})

function enviarDados(){
  if(nome == '' || telefone == ''){
    alert('Favor Preencher todos os dados');
  }
  else{
    alert('Nome: ' + nome + '\n\n' +
          'Telefone: ' + telefone + '\n' +
          'avaliaçao: ' + avaliaçao.toFixed(2) + '\n'+
          'Sexo: ' + sexos[sexo].sexoNome + '\n'+
          'avaliando anonimamente: ' + (avaliAno ? 'sim' : 'nao')
    )
  }
}

  const isWeb = typeof navigator !== "undefined" && navigator.userAgent;


  const formatPhoneNumber = (text) => {
    
    let cleaned = text.replace(/\D/g, '');
  
   
    if (cleaned.length > 10) {
      return cleaned.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (cleaned.length > 6) {
      return cleaned.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
    } else if (cleaned.length > 2) {
      return cleaned.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
    } else {
      return cleaned;
    }
  };
  return (
<ScrollView
    contentContainerStyle={styles.container}
    showsVerticalScrollIndicator={false}
  >
      <ImageBackground
       style={styles.imagemfundo}
       source={require("./assets/fundo.png")}
      >
     <Image
          style= {styles.image2}
          source={require("./assets/kerastase.png")}
     >
     </Image>
     <Image
          style= {styles.image}
          source={require("./assets/produto.png")}
     >
     </Image>
      
    
    <View style={styles.areaformulario}>
      
      <Text style={styles.textoNome}>Nome: </Text>
      <TextInput style={styles.input}  
       
        placeholder="Digite seu nome aqui"
        underlineColorAndroid="transparent"   
        onChangeText={ nome => setNome(nome)}     
      >
      </TextInput>

    <View>
     <Text style={styles.textoNome}>Digite seu telefone:</Text>
      <TextInput
        style={{ borderBottomWidth: 1, padding: 10, fontSize: 16 , backgroundColor:'white',borderRadius:'10px'}}
        placeholder="(99) 99999-9999"
        keyboardType="numeric"
        value={telefone}
        onChangeText={(text) => setTelefone(formatPhoneNumber(text))}
        maxLength={15} 
      />
   </View>

      <View style={styles.areaSexo}>
        <Text style={styles.textoNome}>Sexo: </Text>
        <Picker 
          style={styles.pickerSexo}  
          selectedValue={sexo}
          onValueChange={(itemValue , itemIndex) => setSexo(itemValue) }
        >     
          {sexoItems}
        

        </Picker>
      </View>

      <View style={styles.avaliaçaoArea}>
        <Text style={styles.textoNome}>Seu avaliaçao:</Text>
        <Text style={styles.avaliaçaoTexto}>🌟{avaliaçao.toFixed(0)}</Text> 

      </View>

      <View style={styles.areaSlider}>
        <Slider
          minimumTrackTintColor= "#cf00b3ff"
          minimumValue={0}
          maximumValue={10}
          value={avaliaçao}
          onValueChange={(avaliaçao) => setavaliaçao(avaliaçao)}                    
        >     
        </Slider>
      </View>

        <View style={styles.areaavaliAno}>
          <Text style={styles.textoNome}>Avaliar anonimamente?</Text>
          <Switch 
            style={isWeb ? { transform: [{ translateY: -2 }]} : {} }
            trackColor={{ false: "#ffffffff", true: "#9d4eb1ff" }}
            thumbColor="#d3a"
            value={avaliAno}
            onValueChange={avaliAno => setavaliAno(avaliAno)}
            >
          </Switch>

      <TouchableOpacity style={styles.botao} onPress={enviarDados}  >
        <Text style={styles.botaoTexto}>Avaliar</Text>
       
      </TouchableOpacity>

      </View>

     </View>

 

     </ImageBackground>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  
  },
  input:{
    backgroundColor:"rgba(255, 255, 255, 0.85)",
    borderRadius:'20px'
  },
areaformulario: {
  width: width * 0.9,   
  backgroundColor: 'rgba(217, 181, 227, 0.85)',
  borderRadius: 12,
  padding: 15,
  gap: 16
},
  textoNome:{
    fontSize: 17,
    color: '#000000',
    fontWeight: 'bold',
  },
  bancoLogo:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000'
  },
  areaSexo:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5
},
pickerSexo:{
  flex:1
},
avaliaçaoArea:{
  flexDirection:'row',
  paddingBottom: 5,
},
avaliaçaoTexto:{
  color: '#ff0090ff',
  fontSize: 17,
  fontWeight: 'bold',
  paddingLeft: 5,
},
areaavaliAno:{
  alignItems: 'center',
  justifyContent: 'center',
 
},
botao:{
  height: 35,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#481365ff',
  borderRadius: 150,
  margin: 20, 
  height: 50,
  width: 150

},
botaoTexto:{
  fontSize: 20,
  fontWeight: 'bold',
  color: '#FFFFFF'
},
imagemfundo: {
  width: width,
  minHeight: height,
  alignItems: 'center',
  paddingVertical: 20,
  top:-10
},
image:{
  width: width * 0.70,   
  height: width * 0.70,
  resizeMode: "contain",
   marginTop:-100,
   marginBottom:0
},
image2:{
  width: width * 0.90,   
  height: width * 0.90,
  resizeMode: "contain",
  
}
});
