import styles from "./CloudGallery.module.scss";

export default function CloudCard({ cloud, onClick }) {
  return (
    <div className={styles.cloud} onClick={onClick}>
      <div className={styles.content}>
        <img src={cloud.image} alt={cloud.title} />
      </div>
    </div>
  );
}