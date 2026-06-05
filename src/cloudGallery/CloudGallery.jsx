import { useState } from "react";
import CloudCard from "./CloudCard";
import CloudModal from "./CloudModal";
import styles from "./CloudGallery.module.scss";
import { useEffect } from "react";
import { cloudImages } from "./cloudImages";
import { preloadImages } from "./preloadImages";
import { clouds } from "./cloudData";

export default function CloudGallery() {
  const [openGallery, setOpenGallery] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  console.log("openGallery =", openGallery);

  return (
    <div className={styles.cloudContainer}>

      {!openGallery && (
        <div
          className={styles.cloudEntry}
          onClick={() => setOpenGallery(true)}
        >
          Manga
          <br></br>
          Made with ReactJS
        </div>
      )}

      {openGallery && (
        <CloudModal onClose={() => setOpenGallery(false)} variant="gallery">
          {clouds.map((c) => (
            <CloudCard
              key={c.id}
              cloud={c}
              onClick={() => setSelected(c)}
            />
          ))}
        </CloudModal>
      )}

      {selected && (
        <CloudModal onClose={() => setSelected(null)} variant="detail">
          <div className={styles.cloudInfo}>
            <img src={selected.image} loading="eager" />
            <div>
              <h2 className={styles.cloudInfoTitle}>{selected.title}</h2>
              <p className={styles.cloudInfoMangaka}>{selected.mangaka}</p>
              <p className={styles.cloudInfoDescription}>{selected.description}</p>
            </div>
          </div>
        </CloudModal>
      )}

    </div>
  );
}