import React from 'react'
import {Jumbotron} from '../components'
import jumbotronData from '../fixtures/jumbotron.json'

export default function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumbotronData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.Subtitle>{item.subTitle}</Jumbotron.Subtitle>
          </Jumbotron.Pane>

          <Jumbotron.Pane> 
            <Jumbotron.Image src={item.image} alt={item.alt}></Jumbotron.Image>
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}

