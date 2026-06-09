import CloudGallery from "./cloudGallery/CloudGallery";
import { useEffect } from "react";
import { clouds } from "./cloudGallery/cloudData";
import { preloadImages } from "./cloudGallery/preloadImages";

export default function App() {
  useEffect(() => {
    preloadImages();
  }, []);

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