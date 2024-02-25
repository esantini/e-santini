"use client";
import { useEffect } from "react";

// These dependencies showcase how to use Proxy in different scenarios
import reactive from "@/code-samples/update_html_with_Proxy";
import fontSizes from "@/code-samples/deprecate_with_Proxy";

const ProxySample = () => {
  useEffect(() => {
    // open the browser's Console and update reactive.name to see "Hello World!" change
    window.reactive = reactive;
    window.fontSizes = fontSizes;

    const word = 'World';
    for (let i = 0; i < word.length; i++) {
      setTimeout(() => {
        window.reactive.name = word.slice(0, i + 1);
      }, 100 * i);
    }

  }, []);
  return <>{/* TODO input field that updates reactive object */}</>;
}

export default ProxySample;
