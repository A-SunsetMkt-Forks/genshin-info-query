<script>
    import UidPicker from "$lib/uidPicker.svelte";
    import SpiralAbyss from "$lib/spiralAbyssCommon.svelte";
    import { Loading, InlineNotification } from "carbon-components-svelte";

    let msg = "请点击确认以查询";
    let success;
    let time;
    let data;
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
    action="spiralAbyss1"
/>
{#if isLoading}
    <Loading />
{/if}

{#if data}
    <SpiralAbyss {data} />
{/if}

{#if !success && !isLoading}
    <InlineNotification
        lowContrast
        kind="error"
        title="Error:"
        subtitle={msg}
    />
{/if}
