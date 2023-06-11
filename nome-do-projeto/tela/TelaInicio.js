
import React from 'react';
import { View, Text, Button } from 'react-native';


const Tela_Inicio=()=>{
return(
<View>
<Text>Nome do Produto</Text>
<Button
title='Editar'
color={'#68cbb1'}
/>

<Button
title='Excluir'
color={'#68cbb1'}
/>
</View>


);
}


export default Tela_Inicio;