import { Button, Card, CardItem, Container, Content, Input, Item, Label, Spinner } from 'native-base';
import React, { Component } from 'react';
import { Alert, Dimensions, FlatList, Modal, Text, TouchableOpacity, View } from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome5'
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import { getPeople } from '../../action';
import ColorSQL from '../../thema/colorSQL';
const FULLWIDTH = Dimensions.get('window').width;

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            baru:true,
            modal: false,
            username:'',
            email:'',
            phone:'',
            dataPeople:[],
            pilihUser:{},
            simpan: true,
            load: true
        }
        this.initState = this.initState.bind(this)
    }
    componentDidMount(){
        this.initState()
    }
    
 
    componentWillReceiveProps(newprops){
      if(this.props.dataPeople !== newprops.dataPeople){
        
        if(newprops.dataPeople.people){
            console.log(JSON.stringify(newprops.dataPeople.people.results))
          this.setState({
              dataPeople: newprops.dataPeople.people.results,
              load:false
          })
        }
      } 
    }
    initState(){
      this.props.getPeople({})
    }
    listHeader(){
        return(
            <View style={{flexDirection:'row'}}>
                <Text style={{flex:1, color:ColorSQL.info, fontSize:16, fontWeight:'bold', textAlign:'center'}}>List Artis dan Aktor</Text>
            </View>
        )
    }
    render() { 
        return (  
            <Container style={{backgroundColor:ColorSQL.primary, padding:20}}>
                
                    <View style={{justifyContent:'center', alignItems:'center', marginTop:30}}>
                      <NavigationEvents onDidFocus={() => this.initState()}/>
                        <FaIcon name="accusoft" size={50} color={ColorSQL.info}/>
                        <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:24}}>Halo Selamat Datang Di Aplikasi Kami</Text>
                    </View>
                        {this.state.load ? 
                            <Spinner color={ColorSQL.primary}/>:
                            <FlatList 
                                style={{marginVertical:20}}
                                ListHeaderComponent = {this.listHeader}
                                data={this.state.dataPeople}
                                keyExtractor={item => item.name}
                                renderItem={({item, index}) =>{
                                    return(
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('kontak', {data: item})}>
                                            <Card style={{backgroundColor:ColorSQL.info,width:FULLWIDTH-40, padding:10}}>
                                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                                    <Text style={{color: ColorSQL.secondary, fontSize:24, fontWeight:'bold'}}>{item.name}</Text>
                                                    {/* <View style={{flex:1, alignItems:'flex-end'}}>
                                                        <Text style={{color: ColorSQL.secondary, fontWeight:'bold'}}>Tinggi: {item.height} cm</Text>
                                                        <Text style={{color: ColorSQL.secondary, fontWeight:'bold'}}>Berat: {item.mass} kg</Text>
                                                    </View> */}
                                                </View>
                                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                                    <View style={{flex:1, alignItems:'flex-start'}}>
                                                        <Text style={{color: ColorSQL.secondary, fontWeight:'bold'}}>Warna Rambut: {item.hair_color}</Text>
                                                        <Text style={{color: ColorSQL.secondary, fontWeight:'bold'}}>Warna Kulit: {item.skin_color}</Text>
                                                        <Text style={{color: ColorSQL.secondary, fontWeight:'bold'}}>Warna Mata: {item.eye_color}</Text>
                                                    </View>
                                                    <View style={{flex:1, alignItems:'flex-end'}}>
                                                        <Text style={{color: ColorSQL.secondary, fontWeight:'bold'}}>Tinggi: {item.height} cm</Text>
                                                        <Text style={{color: ColorSQL.secondary, fontWeight:'bold'}}>Berat: {item.mass} kg</Text>
                                                    </View>
                                                </View>
                                            </Card>
                                            
                                        </TouchableOpacity>
                                    )
                                }}/>
                            }
            </Container>
        );
    }

}
const mapStateToProps = ({people}) =>{
  const dataPeople = people;

  return {dataPeople}
}
export default connect(mapStateToProps,{getPeople})(Welcome);