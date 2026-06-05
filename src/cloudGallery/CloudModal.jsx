import styles from "./CloudGallery.module.scss";

export default function CloudModal({ children, onClose, variant }) {
  return (
    <div className={styles.modal} onClick={onClose}>
      <div
        className={`${styles.modalBox} ${styles[variant]}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}