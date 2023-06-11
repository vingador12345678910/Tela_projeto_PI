import React from 'react';
import { View, Text,TextInput,Button} from 'react-native';

const Tela_Cadastro = () => {
    
    return (
        
            <View>
                <Text>Registros</Text>
              <TextInput
              placeholder='Classificaçao'
              />
              <TextInput
              placeholder='Descriçao'
              />
              <TextInput
              placeholder='Codigo do Produto '
              />

            <TextInput
              placeholder='Lote do produto'
              />

            <Button
            title='Atualizar'
            color={'#68cbb1'}
            />

            <Button
            title='Cancelar'
            color={'#68cbb1'}
            />
              
            </View>
          );
        };
        
        


export default Tela_Cadastro;