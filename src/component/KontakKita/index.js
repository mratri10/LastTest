import { Button, Card, CardItem, Container, Content, Header, Icon, Input, Spinner } from 'native-base';
import React, { Component } from 'react';
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import ColorSQL from '../../thema/colorSQL';
import FaIcon from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux';
import { NavigationEvents } from 'react-navigation';
import {getFilm, getSpesies, getVehicle, getStarship} from '../../action'
const FULLWIDTH = Dimensions.get('window').width
class KontakKita extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            getContact:{},
            dataDiri: props.navigation.getParam('data'),
            cari:'',
            dataFilm:[],
            dataVehicles:[],
            dataSpecies:[],
            dataStarships:[],
            pilih:'1',

            loadFilm: true,
            loadVehicles: true,
            loadSpecies: true,
            loadStarships: true,
        }

        this.initState = this.initState.bind(this)

        // console.log(JSON.stringify(this.state.dataDiri))
    }
    componentDidMount(){
        this.initState()
    }
    componentWillReceiveProps(newProps){
        if(this.props.dataPeople !== newProps.dataPeople){
            if(newProps.dataPeople.film){
                this.state.dataFilm.push(newProps.dataPeople.film)
                this.setState({loadFilm:false})
            }
            if(newProps.dataPeople.spesies){
                this.state.dataSpecies.push(newProps.dataPeople.spesies)
                this.setState({loadSpecies:false})
            }
            if(newProps.dataPeople.vehicle){
                this.state.dataVehicles.push(newProps.dataPeople.vehicle)
                this.setState({loadVehicles:false})
            }
            if(newProps.dataPeople.starship){
                this.state.dataStarships.push(newProps.dataPeople.starship)
                this.setState({loadStarships:false})
            }
        }
    }
    initState(){
        for(var i = 0; i < this.state.dataDiri.films.length; i++){
            this.props.getFilm({url: this.state.dataDiri.films[i]})
        }
        for(var i = 0; i < this.state.dataDiri.vehicles.length; i++){
            this.props.getVehicle({url: this.state.dataDiri.vehicles[i]})
        }
        for(var i = 0; i < this.state.dataDiri.species.length; i++){
            this.props.getSpesies({url: this.state.dataDiri.species[i]})
        }
        for(var i = 0; i < this.state.dataDiri.starships.length; i++){
            this.props.getStarship({url: this.state.dataDiri.starships[i]})
        }
    }
    ViewList(){
        switch (this.state.pilih) {
            case '1':
                return(
                    <View>
                        {this.state.loadFilm ?
                            <Content>
                                <Spinner color={ColorSQL.primary}/>
                            </Content>:
                            <FlatList 
                            ListFooterComponent={() =>{
                                return(
                                    <View style={{marginBottom:100}}/>
                                )
                            }}
                            style={{marginLeft:5}}
                            data ={this.state.dataFilm}
                            keyExtractor={item => item.id}
                            renderItem={({item, index}) =>{
                                return(
                                    <Card>
                                        <View style={{alignItems:'center', margin:10}}>
                                            <Text style={{borderBottomWidth:1, paddingLeft:10,marginBottom:10, fontWeight:'bold', paddingHorizontal:5, color:'black'}}>{item.title}</Text>
                                            <View style={{flexDirection:'row'}}>
                                                <View style={{flex:1}}>
                                                    <View style={{flexDirection:'row', }}>
                                                        <View style={{flex:1}}>
                                                            <Text style={{paddingLeft:10,marginBottom:10, textAlign:'left', paddingBottom:5, color:'#8a8a8a'}}>Director: {item.director}</Text>
                                                            <Text style={{paddingLeft:10,marginBottom:10, textAlign:'left', paddingBottom:5, color:'#8a8a8a'}}>Producer: {item.producer}</Text>
                                                        </View>
                                                        <Text style={{paddingLeft:10,marginBottom:10, paddingBottom:5, color:'#8a8a8a', }}>{item.release_date}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                        
                                    </Card>
                                )
                            }}/>
                            }
                    </View>
                )
        case '2':
            return(
                <View>
                    {this.state.loadVehicles ?
                        <Content>
                            <Spinner color={ColorSQL.primary}/>
                        </Content>:
                        <FlatList 
                        ListFooterComponent={() =>{
                            return(
                                <View style={{marginBottom:100}}/>
                            )
                        }}
                        style={{marginLeft:5}}
                        data ={this.state.dataVehicles}
                        keyExtractor={item => item.id}
                        renderItem={({item, index}) =>{
                            return(
                                <Card>
                                    <View style={{alignItems:'center', margin:10}}>
                                        <Text style={{borderBottomWidth:1, paddingLeft:10,marginBottom:10, fontWeight:'bold', paddingHorizontal:5, color:'black'}}>{item.name}</Text>
                                        <View style={{flexDirection:'row'}}>
                                            <View style={{flex:1}}>
                                                <View style={{flexDirection:'row', }}>
                                                    <View style={{flex:1}}>
                                                        <Text style={{paddingLeft:10,marginBottom:10, textAlign:'left', paddingBottom:5, color:'#8a8a8a'}}>Model: {item.model}</Text>
                                                        <Text style={{paddingLeft:10,marginBottom:10, textAlign:'left', paddingBottom:5, color:'#8a8a8a'}}>Manufacture: {item.manufacturer}</Text>
                                                    </View>
                                                    <Text style={{paddingLeft:10,marginBottom:10, paddingBottom:5, color:'#8a8a8a', }}>{item.release_date}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    
                                </Card>
                            )
                        }}/>
                        }
                </View>
            )
            case '3':
            return(
                <View>
                    {this.state.loadSpecies ?
                        <Content>
                            <Spinner color={ColorSQL.primary}/>
                        </Content>:
                        <FlatList 
                        ListFooterComponent={() =>{
                            return(
                                <View style={{marginBottom:100}}/>
                            )
                        }}
                        style={{marginLeft:5}}
                        data ={this.state.dataSpecies}
                        keyExtractor={item => item.id}
                        renderItem={({item, index}) =>{
                            return(
                                <Card>
                                    <View style={{alignItems:'center', margin:10}}>
                                        <Text style={{borderBottomWidth:1, paddingLeft:10,marginBottom:10, fontWeight:'bold', paddingHorizontal:5, color:'black'}}>{item.name}</Text>
                                        <View style={{flexDirection:'row'}}>
                                            <View style={{flex:1}}>
                                                <View style={{flexDirection:'row', }}>
                                                    <View style={{flex:1}}>
                                                        <Text style={{paddingLeft:10,marginBottom:10, textAlign:'left', paddingBottom:5, color:'#8a8a8a'}}>Model: {item.model}</Text>
                                                        <Text style={{paddingLeft:10,marginBottom:10, textAlign:'left', paddingBottom:5, color:'#8a8a8a'}}>Manufacture: {item.manufacturer}</Text>
                                                    </View>
                                                    <Text style={{paddingLeft:10,marginBottom:10, paddingBottom:5, color:'#8a8a8a', }}>{item.release_date}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    
                                </Card>
                            )
                        }}/>
                        }
                </View>
            )
            case '4':
            return(
                <View>
                    {this.state.loadStarships ?
                        <Content>
                            <Spinner color={ColorSQL.primary}/>
                        </Content>:
                        <FlatList 
                        ListFooterComponent={() =>{
                            return(
                                <View style={{marginBottom:100}}/>
                            )
                        }}
                        style={{marginLeft:5}}
                        data ={this.state.dataStarships}
                        keyExtractor={item => item.id}
                        renderItem={({item, index}) =>{
                            return(
                                <Card>
                                    <View style={{alignItems:'center', margin:10}}>
                                        <Text style={{borderBottomWidth:1, paddingLeft:10,marginBottom:10, fontWeight:'bold', paddingHorizontal:5, color:'black'}}>{item.name}</Text>
                                        <View style={{flexDirection:'row'}}>
                                            <View style={{flex:1}}>
                                                <View style={{flexDirection:'row', }}>
                                                    <View style={{flex:1}}>
                                                        <Text style={{paddingLeft:10,marginBottom:10, textAlign:'left', paddingBottom:5, color:'#8a8a8a'}}>Model: {item.model}</Text>
                                                        <Text style={{paddingLeft:10,marginBottom:10, textAlign:'left', paddingBottom:5, color:'#8a8a8a'}}>Manufacture: {item.manufacturer}</Text>
                                                    </View>
                                                    <Text style={{paddingLeft:10,marginBottom:10, paddingBottom:5, color:'#8a8a8a', }}>{item.release_date}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    
                                </Card>
                            )
                        }}/>
                        }
                </View>
            )
            default:
                break;
        }
    }
    render() { 
        return (  
            <Container>
                <NavigationEvents onDidFocus={() => this.initState()}/>
                <View style={{backgroundColor:ColorSQL.primary, flexDirection:'row', padding:20, alignItems:'center'}}>
                    <Text style={{flex:1, color:ColorSQL.info, fontSize:24}}>{this.state.dataDiri.name}</Text>
                    <Text style={{backgroundColor:'white', borderRadius:5, paddingHorizontal:8}} onPress={() => this.props.navigation.navigate('welcome')}>kembali</Text>
                </View>
                <View style={{flexDirection:'row', margin:10, backgroundColor:'#f2f2f2', alignItems:'center'}}>
                    <Text style={[{ flex:1, textAlign:'center', marginRight:10, alignItems:'center', fontSize:14, fontWeight:'bold', padding:10},
                        this.state.pilih  ==='1'? {color:ColorSQL.info,backgroundColor:ColorSQL.secondary,}: {color:'grey',backgroundColor:'white'}]}
                        onPress={() => this.setState({pilih: '1'})}>Film</Text>
                    <Text style={[{color:ColorSQL.info, flex:1, textAlign:'center', marginRight:10, alignItems:'center', fontSize:14, fontWeight:'bold', backgroundColor:ColorSQL.secondary, padding:10},
                        this.state.pilih  ==='2'? {color:ColorSQL.info,backgroundColor:ColorSQL.secondary,}: {color:'grey',backgroundColor:'white'}]}
                        onPress={() => this.setState({pilih: '2'})}>Vehicles</Text>
                    <Text style={[{color:ColorSQL.info, flex:1, textAlign:'center', marginRight:10, alignItems:'center', fontSize:14, fontWeight:'bold', backgroundColor:ColorSQL.secondary, padding:10},
                        this.state.pilih  ==='3'? {color:ColorSQL.info,backgroundColor:ColorSQL.secondary,}: {color:'grey',backgroundColor:'white'}]}
                        onPress={() => this.setState({pilih: '3'})}>Species</Text>
                    <Text style={[{color:ColorSQL.info, flex:1, textAlign:'center', marginRight:10, alignItems:'center', fontSize:14, fontWeight:'bold', backgroundColor:ColorSQL.secondary, padding:10},
                        this.state.pilih  ==='4'? {color:ColorSQL.info,backgroundColor:ColorSQL.secondary,}: {color:'grey',backgroundColor:'white'}]}
                        onPress={() => this.setState({pilih: '4'})}>Starships</Text>
                </View>
                {this.ViewList()}
            </Container> 
        );
    }
}
const mapStateToProps = ({ people }) => {
    const dataPeople = people;
    return { dataPeople }
}
export default connect(
    mapStateToProps, {getFilm, getSpesies, getVehicle, getStarship}
)(KontakKita);