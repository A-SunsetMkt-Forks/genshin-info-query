<script>
    import { Column, Tile } from "carbon-components-svelte";
    export let title;
    export let subtitle;
</script>

<div class="main">
    <div class="subtitle">{subtitle}</div>
    <div class="title">{title}</div>
</div>

<style>
    * {
        box-sizing: border-box;
    }
    .main {
        text-overflow: ellipsis;
        overflow: hidden;
        display: inline-block;
        margin: 0.2em;
        text-align: center;
        max-width: 100%;
        /* box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); */
        width: 22%;
        background-color: #f8f8f8;
    }
    .subtitle {
        font-size: medium;
        color: #1d1e20;
        width: 100%;
        padding: 0.2em 0;
    }
    .title {
        font-size: xx-small;
        color: #81868c;
        width: 100%;
        padding: 0.5em 0.2em;
    }
</style>
