import React, { Component } from 'react';
import { FlatList, View } from 'react-native'


class Siput extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      sumur: 20,
      naik: 5,
      turun:4
    }

    
  }

  siput(){
    var lama = this.state.sumur/(this.state.naik-this.state.turun)
    return lama
  }
  ganjilNoTiga(){
    var nilai = 1
    var listganjil = [1]
    var listkelipatan3 =[]
    var kelipata3 = 0
    for (var i = 0; i< 100; i++){
      kelipata3 = kelipata3 +3
      listkelipatan3.push(kelipata3)
    }
    for(var i =0; i < 100; i++ ){
      nilai = nilai + 2
      var check3 = listkelipatan3.filter(data =>{
        data === nilai
      })
      if(check3.length > 0){
        listganjil.push(nilai)
      }
    }

    return listganjil;
  }
  render() { 
    return (  
      <View>
        <Text>Lama Siput Naik</Text>
        <Text>{this.siput()}</Text>
        <FlatList 
          data={this.ganjilNoTiga()}
          keyExtractor ={item => item}
          renderItem={({item}) =>{
            return(
              <View>
                <Text>{item}</Text>
              </View>
            )
          }}/>
      </View>
    );
  }
}
 
export default Siput;