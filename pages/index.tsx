import * as firebase from "firebase/app";
import "firebase/firestore";
import { collection } from "typesaurus";
import { useGet } from "@typesaurus/react";

const firebaseConfig = require("../firebase.config").default;

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

type User = { name: string };
const users = collection<User>("users");

const IndexPage = () => {
  const user = useGet(users, "42");
  return (
    <div>
      <h1>Hello Next.js 👋 {user?.data?.name}</h1>
    </div>
  );
};

export default IndexPage;
