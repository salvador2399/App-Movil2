//Jose Salvador Medina Olguin  TI02SM-18
import React from 'react';
import {View, StyleSheet, Alert, TextInput,Button,} from 'react-native';
import { Container,Text, Header, Content, Card, CardItem,Body,Item, Label, Input,Icon} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Login({ navigation }) {
  return (
       <Container>
        <Header />
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style= {misEstilos.textCenter}>Iniciar  sesión</Text>
            </CardItem>
            <CardItem bordered>
              <Body style = {misEstilos.body}>
                <Item inlineLabel>
                <Icon type= 'FontAwesome' name= 'user'></Icon>
                  <Input placeholder= 'Nombre de usuario'/>
                </Item>
                <Item inlineLabel last>
                <Icon type= 'FontAwesome' name= 'lock'></Icon>
                  <Input placeholder= 'Contraseña'/>
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
             <Button  onPress={() => Alert.alert('Bienvenido amigo, has iniciado sesion')} style= {misEstilos.boton} title="Ingresar"/>
             <Icon type= 'FontAwesome' name= 'twitter'></Icon> 
             <Icon/>
             <Icon type= 'FontAwesome' name= 'instagram'></Icon>
             <Icon type= 'FontAwesome' name= 'facebook'></Icon> 
            </CardItem>
            
          </Card>
         <Button  title="Registrate" onPress={() => navigation.navigate('Registro')}/>
        </Content>
        
      </Container>
  );
}
const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter:{
    textAlign: 'center',
    width: '100%',
  },
  boton: {
    marginRight: '50%',
    backgroundColor: 'red'
  },
  body: {
    paddingVertical: 35,
    
  container: {
        flex: 1,
        backgroundColor: 'yellow',
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
    }
  }

});

export default Login;