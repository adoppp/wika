'use client';

import { Loading } from "notiflix";
import { useEffect } from "react";

export default function Loader() {
  useEffect(() => {
    Loading.circle('please wait', { backgroundColor: '#181818', svgColor: '#FE59C2' });

    return () => {
      Loading.remove(500)
    }
  }, []);
  
  return null;
};
