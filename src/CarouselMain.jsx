import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { v4 as uuidv4 } from 'uuid';


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];
const data=[
    {name:'dog',description:'Iam dog',img:'https://images.unsplash.com/photo-1600352712371-15fd49ca42b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
    {name:'cat',description:'Iam cat',img:'https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
    {name:'butterfly',description:'Iam butterfly',img:'https://images.unsplash.com/photo-1623615413014-aff1c99e936f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
    {name:'Horse',description:'Iam horse',img:'https://images.unsplash.com/photo-1578001357658-46d0b9d5ec79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
    {name:'puppy',description:'Iam puppy',img:'https://images.unsplash.com/photo-1590604894653-1b0541ed87c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'},
    {name:'lion',description:'Iam lion',img:'https://images.unsplash.com/photo-1570264013623-796051486fc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'},
    {name:'bird',description:'Iam bird',img:'https://images.unsplash.com/photo-1445820200644-69f87d946277?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
    {name:'dolphin',description:'Iam dolphin',img:'https://images.unsplash.com/photo-1515939483462-f227183fb55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}
]


export default function CarouselMain() {
  const [items, setItems] = useState(data);

  return (
    <div className="App">
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <Item key={uuidv4()} item={item}></Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
