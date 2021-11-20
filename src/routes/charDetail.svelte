<script>
    import UidPicker from "$lib/uidPicker.svelte";
    import { Loading } from "carbon-components-svelte";
    import AvatarCard from "$lib/characterIcon.svelte";
    import AvatarDetail from "$lib/characterCard.svelte";
    import { Tile, Column } from "carbon-components-svelte";

    let msg = "";
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
    <Column sm={6} md={6} lg={10}>
        <div style="overflow-x: scroll;white-space:nowrap">
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
    </Column>
{/if}
{#if !success}{msg}{/if}
