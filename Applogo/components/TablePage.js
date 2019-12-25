import React, { Component } from 'react';
import { StyleSheet, View, TextInput, ScrollView, Platform, Text, Share, Button  } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

import { Dropdown } from 'react-native-material-dropdown';

import { createStackNavigator } from 'react-navigation';
 
export default class TablePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['Qnt', 'Produtos/Serviços', 'Valores'],
          tableData: [
            ['1', 'Concreto', 'R$ 89,10', ],
            ['3', 'Tintas', 'R$ 53,14', ],
            ['21', 'Telhas', 'R$ 340,60', ],
            ['67', 'Cimento', 'R$ 1100,00', ],
            ['4', 'Aço', 'R$ 80,95', ],
            ['2', 'Tubo Drenagem', 'R$ 47,69', ],
            ['1', 'Interruptor', 'R$ 20,27', ],
            ['14', 'Parafuso', 'R$ 13,30', ]
          ]
        }
      }

      ShareMessage = () => {
        //Here is the Share API
        Share.share({ message: this.state.tableData.toString(), title : "Sharing via react native" })
          //after successful share return result
          .then(result => console.log(result))
          //If any thing goes wrong it comes here
          .catch(errorMsg => console.log(errorMsg));
       };
     
      render() {
        let data = [{
          value: 'Concreto',
        }, {
          value: 'Cimento',
        }, {
          value: 'Parafuso',
        }, {
          value: 'Interruptor',
        }, {
          value: 'Telha',
        }, {
          value: 'Tinta'
        }];
        const state = this.state;
        return (
          <View style={styles.container}>
            <Dropdown
        label='Tipo de produto'
        data={data}
      />
              <TextInput
              placeholder="Cliente:________________________________________"
              />
              <TextInput
              placeholder="Endereço:____________________ Tel:______________"
              />
              <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
              <Rows data={state.tableData} textStyle={styles.text}/>
            </Table>
            </ScrollView>
            <TextInput style={styles.place}
              placeholder="Cliente:___________ Sua Empresa:____________"
              onChangeText={() => { this.setState({ tableData }); }}
              />
              <View style={{margin: 10}}>
         <Button title = "Compartilhar"   onPress={this.ShareMessage} />
        </View>
          </View>
          
        )
      }
    }
     
    const styles = StyleSheet.create({
      container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
      head: { height: 40, backgroundColor: '#f1f8ff' },
      text: { margin: 6 },
      place: {
          marginTop: 20
      }
    });