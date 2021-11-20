<script>
    import { Loading } from "carbon-components-svelte";
    import fetchData from "$lib/fetchData";
    let promise = Promise.resolve("loading..."),
        server;
    fetchData({ action: "selfInfo" }, (s) => (server = s)).then((res) => {
        console.log(res.list[0].game_uid);
        promise = fetch(server, {
            method: "POST",
            body: JSON.stringify({
                action: "selfSign",
                self_uid: res.list[0].game_uid,
            }),
        }).then((res) => res.json());
    });
</script>

{#await promise}
    <Loading />
{:then data}
    {JSON.stringify(data)}
{/await}
