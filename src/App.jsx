import { LogosCarrousel } from "./components/LogosCarrousel";
import { CarrouselItem } from "./components/CarrouselItem";

function App() {
  return (
    <LogosCarrousel background={"#252525"}>
      <CarrouselItem
        src={
          "https://images.vexels.com/content/142789/preview/multicolor-swirls-circle-logo-41322f.png"
        }
        alt={"img"}
      />
      <CarrouselItem
        src={
          "https://images.vexels.com/content/142789/preview/multicolor-swirls-circle-logo-41322f.png"
        }
        alt={"img"}
      />
      <CarrouselItem
        src={
          "https://images.vexels.com/content/142789/preview/multicolor-swirls-circle-logo-41322f.png"
        }
        alt={"img"}
      />
      <CarrouselItem
        src={
          "https://images.vexels.com/content/142789/preview/multicolor-swirls-circle-logo-41322f.png"
        }
        alt={"img"}
      />
    </LogosCarrousel>
  );
}

export default App;
