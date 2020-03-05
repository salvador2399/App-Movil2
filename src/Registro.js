//Jose Salvador Medina Olguin  TI02SM-18
import React from 'react';
import {View, StyleSheet, Alert, TextInput} from 'react-native';
import { Container,Button,Text, Header, Content, Card, CardItem,Body,Item, Label, Input,Icon} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function Registro({navigation}){
    return(
       <Container>
        <Header />
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
          <CardItem header bordered>
              <Text style= {misEstilos.textCenter}>Amigo te invitamos a Registrarte </Text>
            </CardItem>
            <CardItem header bordered>
              <Text style= {misEstilos.textCenter}>Llena los siguientes campos</Text>
            </CardItem>
            <CardItem bordered>
              <Body style = {misEstilos.body}>
                <Item inlineLabel>
                  <Icon type= 'FontAwesome' name= 'user'></Icon>
                  <Input placeholder= 'Nombre de usuario'/>
                </Item>
                <Item inlineLabel last>
                  <Icon type= 'MaterialCommunityIcons' name= 'email'></Icon>
                  <Input placeholder= 'Correo'/>
                </Item>
                <Item inlineLabel last>
                  <Icon type= 'FontAwesome' name= 'lock'></Icon>
                  <Input placeholder= 'Contraseña'/>
                </Item>
                <Item inlineLabel last>
                  <Icon type= 'FontAwesome' name= 'lock'></Icon>
                  <Input placeholder= 'Confirmar contraseña'/>
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
             <Button dark onPress={() => navigation.navigate('Login')}>
            <Text>Ingresar</Text>
            </Button>
              <Button dark onPress={() => navigation.navigate('Movies')}>
            <Text>Peliculas</Text>
            </Button>
             <Button dark onPress={() => navigation.navigate('Pokemon')}>
            <Text>Pokemon</Text>
            </Button>
            
            <Icon type= 'FontAwesome' name= 'twitter'></Icon> 
             <Icon/>
             <Icon type= 'FontAwesome' name= 'instagram'></Icon>
             <Icon type= 'FontAwesome' name= 'facebook'></Icon> 
          
             
            </CardItem>
          </Card>
         
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



export default Registro;