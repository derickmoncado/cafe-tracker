import styles from "./page.module.scss";

export default function Home() {
	return (
		<div className="container">
			<h1 className="heading-test">Welcome to Cafe Tracker ayyyyy</h1>
			<button className="button-test">test button</button>
			<p className={styles["paragraph-test"]}>
				This is a test paragraph.
			</p>
			<div className="test-container">
				<p className="test-paragraph">This is a test paragraph.</p>
				<p className="test-paragraph">
					This is another test paragraph.
				</p>
			</div>
		</div>
	);
}
