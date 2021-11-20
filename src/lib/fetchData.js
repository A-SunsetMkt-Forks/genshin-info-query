import { onMount } from "svelte";
import { server as defaultServer } from "../../app-config.json";

export default function fetchData(body, callback = (s) => {}) {
    return new Promise((resolve, reject) => {
        onMount(async () => {
            let server = lsValue("SERVER") || defaultServer;
            callback(server);
            const res = await fetch(server, {
                method: "POST",
                body: JSON.stringify(body),
            });
            if (!res.ok) reject(res.statusText);
            const data = await res.json();
            resolve(data.data);
        });
    });
}

function lsValue(item) {
    let value = localStorage.getItem(item);
    if (value == "undefined" || value == "null") return "";
    return value;
}
