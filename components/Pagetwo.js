import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheckDouble, faUser, faComment, faGlobeAsia } from '@fortawesome/free-solid-svg-icons'
import { FloatingAction } from "react-native-floating-action";

const list = [
    {
      name: 'Adi Pambudi',
      avatar_url: 'https://via.placeholder.com/150/92c952',
      subtitle: 'Lorem Ipsum dolor sit amet'
    },
    {
      name: 'Bulan',
      avatar_url: 'https://via.placeholder.com/150/771796',
      subtitle: 'Lorem Ipsum dolor sit amet',
      read: 1
    },
    {
      name: 'College Buddy',
      avatar_url: 'https://via.placeholder.com/150/24f355',
      subtitle: '+6281234567890 sedang mengetik...',
      color : '#e95950'
    },
    {
      name: 'Family Member',
      avatar_url: 'https://via.placeholder.com/150/f66b97',
      subtitle: 'family jpg',
      read: 1
    },
  ]

const liststories = [
    {
        name: 'Ceritaku',
        avatar_url: 'https://via.placeholder.com/150/f66b97',
    },
    {
      name: 'Lisa',
      avatar_url: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Juan',
      avatar_url: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Emili',
      avatar_url: 'https://via.placeholder.com/150/24f355',
    },
  ]

const styles = StyleSheet.create({
    container: {
      paddingTop: 10,
      flex: 1, 
      marginHorizontal : 10,
      backgroundColor: 'white'
    },
    stories: {
        marginBottom : 15
    },
    appButtonContainer: {
      backgroundColor: "#fff4f4",
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 10
    },
    appButtonText: {
      fontSize: 14,
      color: "#e34556",
      fontWeight: "bold",
      alignSelf: "center",
    },
    gridH: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      paddingVertical : 10,
      borderTopWidth : 0.5,
      borderColor : 'grey',
      paddingVertical : 20

    },
    itembottom : {
      justifyContent: 'center', 
      paddingHorizontal : 40
    },
    itembottomcenter : {
      justifyContent: 'center', 
      paddingHorizontal : 40,
      marginBottom : 10
    }
});

const Chatlist = () => {
    return (
        <View>
            {
                list.map((l, i) => (
                <ListItem key={i}>
                    <Avatar size="medium" rounded source={{uri: l.avatar_url}} />
                    <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    <ListItem.Subtitle>{l.read === 1 ? <FontAwesomeIcon icon={ faCheckDouble } color="#e95950" size={12} /> : '' } <Text style={{color: l.color ? l.color : 'gray'}}>{l.subtitle}</Text></ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                ))
            }
        </View>
    )
}

const Stories = () => {
    return (
        <View style={styles.stories}>
            <FlatList
            keyExtractor={(item,index)=>index.toString()}
            data={liststories}
            horizontal
            renderItem={({ item, index }) => (
                <View style={{ marginHorizontal : 10, justifyContent: 'center', alignItems: 'center', borderColor: 'red' }}>
                    <Avatar size="medium" rounded source={{uri: item.avatar_url }} />   
                    <Text style={{ fontSize: 12 , color: 'grey'}}>{item.name}</Text>
                </View>
                
            )}
            />
        </View>
    )
}

const Btnpills = ({ title, bg, color }) => (
    <TouchableOpacity style={{backgroundColor: bg,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center"
    }}>
      <Text style={{fontSize: 14,
      color: color,
      fontWeight: "bold",
      alignSelf: "center",
      }}> {title}</Text>
    </TouchableOpacity>
  );

const Pills = () => {
    return (
        <View style={{marginVertical : 15}}>
            <FlatList
            keyExtractor={(item,index)=>index.toString()}
            data={['Pribadi','Calon Teman','Call']}
            horizontal
            renderItem={({ item, index }) => (
                <Btnpills title={item} bg={index === 0 ? '#fff4f4' : 'white'} color={index == 0 ? '#e34556' : 'grey'} />
            )}
            />
        </View>
    )
}

const Buttonsend = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}> {title}</Text>
  </TouchableOpacity>
);

const Pagetwo = () => {
    return (
        <View style={styles.container}>
            <Stories/>
            <Pills/>
            <Chatlist/>
            <View style={styles.container}>
            <FloatingAction
                color = "#e34556"
                onPressItem={name => {
                console.log(`selected button: ${name}`);
                }}
            />
            </View>
            {/* <Buttonsend title="QR VOUCHER" /> */}
            <View style={styles.gridH}>
              <View style={styles.itembottom} ><FontAwesomeIcon icon={ faGlobeAsia } color="gray" size={26} /></View>
              <View style={styles.itembottomcenter} ><FontAwesomeIcon icon={ faComment } color="#e95950" size={26} /></View>
              <View style={styles.itembottom} ><FontAwesomeIcon icon={ faUser } color="gray" size={26} /></View>
          </View>
        </View>
    );
}

export default Pagetwo;