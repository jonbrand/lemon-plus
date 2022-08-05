import React, { useEffect } from "react";
import { Movies } from "../../Components/Movies/Movies";
import { SliderComponent } from "../../Components/Slider/Slider";
import { Viewers } from "../../Components/Viewers/Viewers";
import db from "../../firebase";
import { Container } from "./styles";

export const Home = () => {

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        console.log(doc.data());
        return { id: doc.id, ...doc.data() }
      })
    })
  })

  return(
    <Container>
      <SliderComponent />
      <Viewers />
      <Movies />
    </Container>
  )
}