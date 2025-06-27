import React, { createContext, useState } from 'react';

export const CardContext = createContext();

const initialCards = [
  {
    name: "HDFC Bank Credit Card",
    type: "Credit Card",
    sharedWith: 3,
    status: "Active",
    bank: "HDFC Bank",
    offer: "5% cashback on Amazon"
  },
  {
    name: "ICICI Bank Debit Card",
    type: "Debit Card",
    sharedWith: 2,
    status: "Active",
    bank: "ICICI Bank",
    offer: "Free airport lounge access"
  },
  {
    name: "SBI Credit Card",
    type: "Credit Card",
    sharedWith: 1,
    status: "Inactive",
    bank: "SBI",
    offer: "Fuel surcharge waiver"
  }
];

export function CardContextProvider({ children }) {
  const [cards, setCards] = useState(initialCards);

  const addCard = (card) => {
    setCards(prev => [card, ...prev]);
  };

  return (
    <CardContext.Provider value={{ cards, addCard }}>
      {children}
    </CardContext.Provider>
  );
} 