import styles from './listing.module.css';

export const Listing = ({ items = [] }) => {

  const getPriceWithCurrency = (currency_code, price) => {
    switch (currency_code) {
      case 'USD':
        return `$${price}`;
      case 'EUR':
        return `€${price}`;
      default:
        return `${price} ${currency_code}`;
    }
  };

  const getQuantityLevel = (quantity) => {
    if (quantity <= 10) return "level-low";
    if (quantity <= 20) return "level-medium";
    return "level-high";
  };

  return (
    <div className={styles["item-list"]}>
      {items
        .filter(item => item.state === 'active')
        .map((item) => (
        <div key={item.listing_id} className={styles["item"]}>
          <div className={styles["item-image"]}>
            <a href={item.url}>
              <img src={item.MainImage.url_570xN} alt={item.title} />
            </a>
          </div>
          <div className={styles["item-details"]}>
            <p className={styles["item-title"]}>
              {item.title.length > 50
                ? `${item.title.slice(0, 50)}…`
                : item.title}
            </p>
            <p className={styles["item-price"]}>
              {getPriceWithCurrency(item.currency_code, item.price)}
            </p>
            <p className={`${styles["item-quantity"]} ${styles[getQuantityLevel(item.quantity)]}`}>
              {item.quantity} left
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;
