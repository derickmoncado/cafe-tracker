import React from "react";
import styles from "./entries.module.scss";

export default function Entries() {
	return (
		<section className={styles["entries"]}>
			<details>
				<summary>
					<h2>Entries</h2>
				</summary>
				<p>[ entry list goes here... table??]</p>
			</details>
		</section>
	);
}
