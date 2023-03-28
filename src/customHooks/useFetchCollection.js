/* eslint-disable no-unused-vars */
import {
  collection,
  onSnapshot,
  query,
  //getDocs,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../firebase/config";

const useFetchCollection = (collectionName) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCollection = async () => {
    setIsLoading(true);
    try {
      const q = query(collection(db, "products"));

      // const querySnapshot = await getDocs(q);
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const allData = [];
        querySnapshot.forEach((doc) => {
          allData.push({ id: doc.id, ...doc.data() });
        });
        // console.log("Current cities in CA: ", cities.join(", "));

        // const allData = [];
        // querySnapshot.forEach((doc) => {
        //   // doc.data() is never undefined for query doc snapshots
        //   allData.push({ id: doc.id, ...doc.data() });
        //   console.log(doc.id, " => ", doc.data());
        // });
        // const q = await query(docRef, orderBy("createdAt", "desc"));
        // onSnapshot(q, (snapshot) => {
        //   // console.log(snapshot.docs);
        //   const allData = snapshot.docs.map((doc) => ({
        //     id: doc.id,
        //     ...doc.data(),
        //   }));
        setData(allData);

        setIsLoading(false);
      });
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getCollection();
  }, []);

  return { data, isLoading };
};

export default useFetchCollection;
