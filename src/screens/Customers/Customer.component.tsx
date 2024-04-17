import CustomerTable from "./CustomerTable";
import styles from "./customer.module.scss";
export default function Customers() {
  return (
    <div className={styles.mainBody}>
      <h2 className={styles.MainHeading}>Customers</h2>
      <CustomerTable />
    </div>
  );
}
