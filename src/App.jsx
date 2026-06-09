import CloudGallery from "./cloudGallery/CloudGallery";
import { clouds } from "./cloudGallery/cloudData";

export default function App() {
  return (
    <CloudGallery
      title="Manga Gallery"
      clouds={clouds}
    />
  );
}


/*
    <section>
        <CloudGallery
          title="Manga Gallery"
          clouds={clouds}
        />

        <CloudGallery
          title="Pee pee Gallery"
          clouds={clouds}
        />        
    </section>

*/