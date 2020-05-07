import * as firebase from "firebase/app";
import "firebase/firestore";

import { collection, get, Doc } from "typesaurus";
import { useState, useEffect } from "react";

const firebaseConfig = require("../firebase.config");

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

type User = { name: string };
const users = collection<User>("users");

const IndexPage = () => {
  const [user, setUser] = useState<Doc<User> | null>(null);
  useEffect(() => {
    get(users, "42").then(setUser);
  }, []);
  return (
    <div>
      <h1>Hello Next.js 👋 {user?.data?.name}</h1>
    </div>
  );
};

export default IndexPage;
