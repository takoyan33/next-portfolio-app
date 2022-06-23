import Head from "next/head";
import styles from "../styles/Home.module.css";
import BookTable from "../src/components/BookTable";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BookTable />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
          {isAuthenticated && (
            <div>
              <p>{user?.name}</p>
              <button onClick={() => logout()}>ログアウト</button>
            </div>
          )}
          {!isAuthenticated && (
            <div>
              <p>ログイン</p>
              <button onClick={() => loginWithRedirect()}>ログイン</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
