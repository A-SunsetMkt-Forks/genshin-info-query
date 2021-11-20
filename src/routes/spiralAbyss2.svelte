<script>
    import UidPicker from "$lib/uidPicker.svelte";
    import { Loading } from "carbon-components-svelte";

    let msg = "";
    let success;
    let time;
    let data = {};
    let isLoading;
</script>

<h1>上期</h1>
<br />
<UidPicker
    bind:success
    bind:data
    bind:msg
    bind:time
    bind:isLoading
    action="spiralAbyss2"
/>
{#if isLoading}
    <Loading />
{/if}
{JSON.stringify(data)}
{#if !success}{msg}{/if}
