import React, { useState } from "react";
import { View, SafeAreaView, FlatList,Text } from "react-native";


import { COLORS, NFTData } from "../constants";
import FocusedStatusBar from "./components/FocusStatusBar";
import HomeHeader from "./components/HomeHeader";
import NFTCard from "./components/NFTCard";

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if(!value.length) return setNftData(NFTData);

    const filteredData = NFTData.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))

    if(filteredData.length){
      setNftData(filteredData)
    }else{
      setNftData(NFTData)
    }
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>}
          />
        </View>
        <View style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          zIndex: -1,
        }} >
        <View style={{height:300, backgroundColor: COLORS.primary}} />
        <View style={{flex:1, backgroundColor: COLORS.primary}} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;