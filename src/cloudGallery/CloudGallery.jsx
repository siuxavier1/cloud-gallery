import { useState, useEffect } from "react";
import CloudCard from "./CloudCard";
import CloudModal from "./CloudModal";
import styles from "./CloudGallery.module.scss";
import { preloadImages } from "./preloadImages";

export default function CloudGallery({ title, clouds }) {
  const [openGallery, setOpenGallery] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    preloadImages();
  }, []);

  console.log("openGallery =", openGallery);

  return (
    <div className={styles.cloudContainer}>

      {!openGallery && (
        <div
          className={styles.cloudEntry}
          onClick={() => setOpenGallery(true)}
        >
          <div className={styles.title}>{title}</div>
          <span>Made with ReactJS</span>
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