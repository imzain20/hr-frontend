import SupplierTable from "./SupplierTable";
import styles from "./supplier.module.scss";
export default function Suppliers() {
  return (
    <div className={styles.mainBody}>
      <h2 className={styles.MainHeading}>Suppliers</h2>
      <SupplierTable />
    </div>
  );
}
