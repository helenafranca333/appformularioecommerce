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
const[limite,setLimite] = useState(150);
const[estudante,setEstudante] = useState(false);
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
          'Limite: ' + limite.toFixed(2) + '\n'+
          'Sexo: ' + sexos[sexo].sexoNome + '\n'+
          'Estudante: ' + (estudante ? 'Ativo' : 'Inativo')
    )
  }
}



  //para colocar alinhado o botão do switch sobre a linha , usado somente qdo executado via web
  const isWeb = typeof navigator !== "undefined" && navigator.userAgent;

   //Para colocar Máscara no telefone ao digitar

  const formatPhoneNumber = (text) => {
    // Remove todos os caracteres que não são números
    let cleaned = text.replace(/\D/g, '');
  
    // Formata o telefone para o padrão (XX) XXXXX-XXXX
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
        style={{ borderBottomWidth: 1, padding: 10, fontSize: 16 }}
        placeholder="(99) 99999-9999"
        keyboardType="numeric"
        value={telefone}
        onChangeText={(text) => setTelefone(formatPhoneNumber(text))}
        maxLength={15} // Evita que o usuário digite além do limite
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

      <View style={styles.limiteArea}>
        <Text style={styles.textoNome}>Seu Limite:</Text>
        <Text style={styles.limiteTexto}>R${limite.toFixed(0)}</Text> 

      </View>

      <View style={styles.areaSlider}>
        <Slider
          minimumTrackTintColor= "#cf00b3ff"
          minimumValue={250}
          maximumValue={4000}
          value={limite}
          onValueChange={(limite) => setLimite(limite)}                    
        >     
        </Slider>
      </View>

        <View style={styles.areaEstudante}>
          <Text style={styles.textoNome}>Estudante:</Text>
          <Switch 
            style={isWeb ? { transform: [{ translateY: -2 }]} : {} }
            trackColor={{ false: "#ffffffff", true: "#9d4eb1ff" }}
            thumbColor="#d3a"
            value={estudante}
            onValueChange={estudante => setEstudante(estudante)}
            >
          </Switch>

      <TouchableOpacity style={styles.botao} onPress={enviarDados}  >
        <Text style={styles.botaoTexto}>Abrir Conta</Text>
       
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
limiteArea:{
  flexDirection:'row',
  paddingBottom: 5,
},
limiteTexto:{
  color: '#ff0090ff',
  fontSize: 17,
  fontWeight: 'bold',
  paddingLeft: 5,
},
areaEstudante:{
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
