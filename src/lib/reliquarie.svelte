<script>
    export let rel;
    export let style = "";
</script>

<div class="container" on:click {style}>
    <img class="icon" src={rel.icon} alt={rel.name} />
    <div class="stars">
        {"★".repeat(rel.rarity)}
    </div>
</div>

<style>
    .container {
        border: #676767 solid 0.2em;
        border-radius: 1.2em;
        margin: 0.2em;
        position: relative;
        display: inline-block;
    }
    .icon {
        width: 4em;
        display: block;
        background-color: #676767;
        border: #d3bd8e solid 0.2em;
        border-radius: 1em;
    }
    .stars {
        position: absolute;
        bottom: 0;
        color: #ffcc33;
    }
    @media screen and (max-width: 600px) {
        .icon {
            width: 3em;
        }
        .stars {
            font-size: xx-small;
        }
    }
</style>
