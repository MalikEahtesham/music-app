/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { rMS, rS, rV } from './src/shared/responsive';


type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): React.JSX.Element {

  const AlbummList: any = [
    {
      "id": 1,
      title: "The triangle",
      image: require('./src/assets/Rectangle_16.png')
    },
    {
      "id": 2,
      title: "Dune Of Visa",
      image: require('./src/assets/Rectangle_17.png')
    },
    {
      "id": 3,
      title: "Riskitall",
      image: require('./src/assets/Rectangle_18.png')
    },
    {
      "id": 4,
      title: "Riskitall Of Visa",
      image: require('./src/assets/Rectangle_16.png')
    }
  ]

  const songList: any = [
    {
      "id": 1,
      title: "Take care of you",
      singer: 'Admina Thembi',
      view: '114k / steams',
      image: require('./src/assets/Rectangle_16.png')
    },
    {
      "id": 2,
      title: "The stranger inside you",
      singer: 'Jeane Lebras',
      view: '60.5k / steams',
      image: require('./src/assets/Rectangle_17.png')
    },
    {
      "id": 3,
      title: "Edwall of beauty mind ",
      singer: 'Jacob Givson',
      view: '44.3k / steams',
      image: require('./src/assets/Rectangle_18.png')
    },
    {
      "id": 4,
      title: "Riskitall Of Visa",
      singer: 'Admina Thembi',
      view: '114k / steams',
      image: require('./src/assets/Rectangle_16.png')
    },
    {
      "id": 3,
      title: "Edwall of beauty mind ",
      singer: 'Jacob Givson',
      view: '44.3k / steams',
      image: require('./src/assets/Rectangle_18.png')
    },
    {
      "id": 3,
      title: "Edwall of beauty mind ",
      singer: 'Jacob Givson',
      view: '44.3k / steams',
      image: require('./src/assets/Rectangle_18.png')
    },
  ]
  type ItemProps = { title: string, image: any };

  const Item = ({ title, image }: ItemProps) => (
    <View style={styles.item}>
      <Image
        source={image}
        style={{ height: rV(90), borderRadius: rS(20), width: rS(120), alignSelf: 'center' }}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  type ItemListProps = { title: string, image: any, singer: string };

  const ItemNew = ({ title, image, singer }: ItemListProps) => (
    <View style={styles.itemNew}>
      <Image
        source={image}
        style={{ height: rV(80), borderRadius: rS(20), width: rS(100), alignSelf: 'center' }}
      />
      <View style={{marginHorizontal:rS(5)}}>

        <Text style={styles.titleNew}>{title}</Text>
        <Text style={styles.views}>{singer}</Text>
        <Text style={styles.views}>44.3k / steams</Text>

      </View>

    </View>
  );

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: rS(3),paddingBottom:rS(3), alignItems: 'center' }}>
          <Image
            source={require('./src/assets/dp.png')}
            style={{ borderRadius: rS(20), height: rV(40), width: rS(40) }}
            resizeMethod='resize'
          />
          <View style={{ marginLeft: rS(8) }}>
            <Text style={{ color: '#fff', fontSize: rS(18), fontWeight: '600' }}>Sarwar Jahan</Text>
            <Text style={{ color: '#fff', fontSize: rS(14) }}>Gold Member</Text>
          </View>
        </View>
        <Image
          source={require('./src/assets/Icon.png')}
          style={{ height: rV(20), width: rS(20), alignSelf: 'center' }}
        />
      </View>

      <View style={{ flexDirection: 'row', marginVertical: rS(10) }}>
        <View style={{ flex: .6 }}>
          <Text style={{ color: '#fff', fontSize: rS(20), }}>Listen The</Text>
          <Text style={{ color: '#fff', fontSize: rS(20) }}>Latest Musics</Text>
        </View>
        <View style={{ flex: .5,justifyContent:'center' }}>
          <TextInput
            placeholder='Search'
            style={{borderRadius:rS(20)}}
          />
        </View>

      </View>


      <View style={{ marginVertical: rS(5) }}>
        <Text style={{ color: '#fff', fontSize: rS(18), fontWeight: '400' }}>Recently Played</Text>
        <FlatList

          // style={{flex: 1}}
          horizontal
          data={AlbummList}
          renderItem={({ item }) => <Item title={item.title} image={item.image} />}
          keyExtractor={item => item.id}
        // contentContainerStyle={{ flexGrow: 1, }}
        />
      </View>
      <View style={{ flexGrow: 1 }}>
        <Text style={{ color: '#fff', fontSize: rS(16),fontWeight:'400' }}>Recommend for you</Text>

        <View style={{ flex: 1 }}>
          <FlatList
            // style={{flex: 1}}
            // horizontal
            data={songList}
            renderItem={({ item }) => <ItemNew title={item.title} image={item.image} singer={item.singer} />}
            keyExtractor={item => item.id}
            // contentContainerStyle={{ flexGrow: 1, }}
            ListFooterComponent={<View style={{ height: 20 }} />}
          />
        </View>
      </View>
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    // marginLeft: 10,
    // marginTop: StatusBar.currentHeight || 0,
    paddingVertical: rV(5),
    paddingHorizontal: rV(10),
    // marginRight: 10,
    backgroundColor: '#0A071E'
  },
  header: {
    // width: '100%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  item: {
    height: rV(120),
    // backgroundColor: '#f9c2ff',
    padding: rS(5),
    marginVertical: rS(3),
    // marginHorizontal: rS(3),
  },
  itemNew: {
    flexDirection: 'row',
    alignItems:'center',
    // backgroundColor:'red',
    flex: 1,
    padding: rS(3),
    marginVertical: rS(5),
    marginHorizontal: rS(2),
  },
  title: {
    fontSize: rS(14),
    color: '#fff',
    alignSelf: 'center'
  },
  titleNew: {
    fontSize: rS(14),
    color: '#fff',
    // alignSelf: 'center'
  },
  views: {
    fontSize: rS(12),
    color: '#DEDEDE',
    // alignSelf: 'center'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
