<script>
    import { Loading } from "carbon-components-svelte";
    import fetchData from "$lib/fetchData";
    let promise = fetchData({ action: "selfInfo" });
</script>

{#await promise}
    <Loading />
{:then data}
    {JSON.stringify(data)}
{/await}
