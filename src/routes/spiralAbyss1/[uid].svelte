<script>
    import UidPicker from "$lib/uidPicker.svelte";
    import { Loading } from "carbon-components-svelte";

    let msg = "";
    let time;
    let data = {};
    let isLoading;
</script>

<h1>本期</h1>
<br />
<UidPicker
    bind:data
    bind:msg
    bind:time
    bind:isLoading
    action="charDetail"
/>
{#if isLoading}
    <Loading />
{/if}
{JSON.stringify(data)}
