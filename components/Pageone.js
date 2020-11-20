import * as React from 'react';
import { 
    Dimensions, 
    Image, 
    View, 
    StyleSheet, 
    Text ,
    TouchableOpacity
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalendar, faClock, faQrcode } from '@fortawesome/free-solid-svg-icons'

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1, 
    marginHorizontal : 10,
    backgroundColor: 'white'
  },
  baner: {
    width: win.width - 20,
    height: win.height / 4,
    alignItems: 'center',
  },
  texttitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical:5
  },
  textdesc: {
    fontSize: 12,
  },
  textdesc2: {
    fontSize: 12,
    color : '#65666a'
  },
  textwaktu: {
    color : '#929396'
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
    marginHorizontal: 10
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#fa4052",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

const Sectionimage = () => {
    return (
        <Image
        style={styles.baner}
        source={{
          uri: 'https://i.ibb.co/LYmCY0t/Picture1-3.png',
        }}
      />
    )
}

const Sectiontitle = () => {
    return (
        <>
        <Text style={styles.texttitle}>
            Food Festival 65% KFC
        </Text>
        <Text style={styles.textdesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
        </Text>
        </>
    )
}

const Sectionwaktu = () => {
    return (
        <>
        <View>
            <Text style={styles.textwaktu}>
            <FontAwesomeIcon icon={ faCalendar } color="#929396" size={12} /> Berlaku hingga 1 Okt 2020
            </Text>
            <Text style={styles.textwaktu}>
            <FontAwesomeIcon icon={ faClock } color="#929396" size={12} /> 07:00 - 23:59
            </Text>
        </View>
        </>
    )
}

const Sectiondesc = () => {
    return (
        <>
        <View>
            <Text style={styles.texttitle}>
                Cara Menggunakan
            </Text>
            <Text style={styles.textdesc2}>
                1. Datang ke tempat merchant terkait
            </Text>
            <Text style={styles.textdesc2}>
                2. Tanyakan mereka dengan ramah untuk menukarkan Voucher.
            </Text>
            <Text style={styles.textdesc2}>
                3. Perlihatkan QR Voucher.
            </Text>
        </View>
        </>
    )
}

const Buttonsend = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}><FontAwesomeIcon icon={ faQrcode } color="white" size={12} /> {title}</Text>
    </TouchableOpacity>
  );

const Lineseparator = () => {
    return (
        <View
        style={{
            borderBottomColor: 'gainsboro',
            borderBottomWidth: 1,
            marginVertical: 10,
        }}
        />
    )
}

const Pageone = () => {
    return (
      <View style={styles.container}>
        <Sectionimage/>
        <Sectiontitle/>
        <Lineseparator/>
        <Sectionwaktu/>
        <Lineseparator/>
        <Sectiondesc/>
        <View style={styles.bottom}>
        <Buttonsend title="QR VOUCHER" />
        </View>
      </View>
    );
}


export default Pageone;