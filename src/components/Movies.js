import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h3>Recommended For You</h3>
      <Content>
        <Wrap>
          <img
            src="https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/spidermannowayhome_onesheet_1400x2100_he.jpg?itok=ruA2h"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://titleleaf.nyc3.cdn.digitaloceanspaces.com/abdopub/product/cover/xl_9781532145469_fc.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/image_8eba0e1a.jpeg?region=0%2C0%2C540%2C810"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/spidermannowayhome_onesheet_1400x2100_he.jpg?itok=ruA2h"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://titleleaf.nyc3.cdn.digitaloceanspaces.com/abdopub/product/cover/xl_9781532145469_fc.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/image_8eba0e1a.jpeg?region=0%2C0%2C540%2C810"
            alt=""
          />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  margin-top: 40px;
`;
const Content = styled.div`
  margin-top: -20px;
  grid-gap: 25px;
  display: grid;
  padding: 30px 0px 26px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  cursor: pointer;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 46px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`;
