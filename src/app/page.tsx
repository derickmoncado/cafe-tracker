import styles from "./page.module.scss";

export default function Home() {
	return (
		<div className="container">
			<div className={styles["page-header"]}>
				<div className={styles["page-header__title"]}>
					<h2>All Entries</h2>
					<div className={styles["page-header__title__filters"]}>
						filters go here
					</div>
				</div>

				<div className={styles["page-header__user"]}>
					<div className={styles["page-header__user__profile"]}>
						user stuff here
					</div>
					<div className={styles["page-header__user__search"]}>
						search goes here
					</div>
				</div>
			</div>
		</div>
	);
}
