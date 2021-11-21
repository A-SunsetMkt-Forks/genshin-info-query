<script>
    import UidPicker from "$lib/uidPicker.svelte";
    import { Loading, InlineNotification } from "carbon-components-svelte";
    import AvatarCard from "$lib/characterIcon.svelte";
    import AvatarDetail from "$lib/characterCard.svelte";
    import { Tile, Column } from "carbon-components-svelte";

    let msg = "请点击确认以查询";
    let time;
    let success;
    let data = {};
    let isLoading;
    let currentAvatar;
</script>

<h1>角色信息</h1>
<br />
<UidPicker
    bind:success
    bind:data
    bind:msg
    bind:time
    bind:isLoading
    action="charDetail"
    on:load={() => (currentAvatar = data.avatars[0])}
/>
{#if isLoading}
    <Loading />
{:else if data.avatars}
    <div class="container">
        <div class="avatars">
            {#each data.avatars as avatar (avatar.id)}
                <AvatarCard
                    {avatar}
                    on:click={() => (currentAvatar = avatar)}
                />
            {/each}
        </div>
        <Tile>
            <AvatarDetail avatar={currentAvatar} />
        </Tile>
    </div>
{/if}
{#if !success && !isLoading}
    <InlineNotification
        lowContrast
        kind="error"
        title="Error:"
        subtitle={msg}
    />{/if}

<style>
    .container {
        max-width: 34em;
    }
    .avatars {
        overflow-x: scroll;
        white-space: nowrap;
    }
</style>
