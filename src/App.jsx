import { BrandsSlider } from "./components/Slider";
import { SliderItem } from "./components/SliderItem";

function App() {
  return (
    <BrandsSlider background={"#252525"}>
      <SliderItem
        src={
          "https://images.vexels.com/content/142789/preview/multicolor-swirls-circle-logo-41322f.png"
        }
        alt={"img"}
      />
      <SliderItem
        src={
          "https://images.vexels.com/content/142789/preview/multicolor-swirls-circle-logo-41322f.png"
        }
        alt={"img"}
      />
      <SliderItem
        src={
          "https://images.vexels.com/content/142789/preview/multicolor-swirls-circle-logo-41322f.png"
        }
        alt={"img"}
      />
      <SliderItem
        src={
          "https://images.vexels.com/content/142789/preview/multicolor-swirls-circle-logo-41322f.png"
        }
        alt={"img"}
      />
    </BrandsSlider>
  );
}

export default App;
