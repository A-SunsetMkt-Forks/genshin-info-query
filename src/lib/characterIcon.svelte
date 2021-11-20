<script>
    export let style = "";
    export let avatar = {};
</script>

<div class="container" on:click {style}>
    <img
        class="icon"
        src={avatar.icon || avatar.avatar_icon}
        alt={avatar.name || ""}
        class:yellow={avatar.rarity == 5}
        class:purple={avatar.rarity == 4}
    />
    <div style="position:absolute;bottom:1.1em;color:#ffcc33;">
        {"★".repeat(avatar.rarity > 5 ? 5 : avatar.rarity)}
    </div>
    <div class="lv">
        {#if avatar.level}Lv.{avatar.level}{/if}
        {#if avatar.value}{avatar.value}{/if}
    </div>
</div>

<style>
    .lv {
        text-align: center;
        color: #fff;
        padding: 0.1em 0;
        overflow: hidden;
    }
    .container {
        border: #d3bd8e solid 0.2em;
        background-color: #d3bd8e;
        border-radius: 0.6em;
        margin: 0.2em;
        position: relative;
        display: inline-block;
    }
    .icon {
        width: 4em;
        display: block;
        background-color: #676767;
        border-radius: 0.5em;
    }
    .yellow {
        background-color: #b87b44;
        border: #b87b44 solid 0.2em;
    }
    .purple {
        background-color: #8a6cb6;
        border: #8a6cb6 solid 0.2em;
    }
</style>
