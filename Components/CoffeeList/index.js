import React from "react";

// NativeBase Components
import { List, Content } from "native-base";

// Store
import coffeeshops from "./data";

// Component
import CoffeeItem from "./CoffeeItem";

const CoffeeList = ({ navigation }) => {
  const coffeeshopList = coffeeshops.map((coffeeshop) => (
    <CoffeeItem
      coffeeshop={coffeeshop}
      key={coffeeshop.id}
      navigation={navigation}
    />
  ));
  return (
    <Content>
      <List>{coffeeshopList}</List>
    </Content>
  );
};

export default CoffeeList;
