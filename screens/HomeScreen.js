import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CategoryList from '../components/CategoryList';
import ServiceCard from '../components/ServiceCard';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <SearchBar />
        <CategoryList />
        <ServiceCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
