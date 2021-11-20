<script>
    export let con;
    export let style = "";
</script>

<div class="container" on:click {style}>
    <img
        class="icon"
        src={con.icon}
        alt={con.name}
        style={con.is_actived ? "" : "opacity: .6;"}
    />
    {#if !con.is_actived}
        <span class="lock">LOCK</span>
    {/if}
</div>

<style>
    .container {
        border: #676767 solid 0.2em;
        border-radius: 50%;
        margin: 0.2em;
        position: relative;
        display: inline-block;
    }
    .icon {
        width: 4em;
        display: block;
        background-color: #676767;
        border: #d3bd8e solid 0.1em;
        border-radius: 50%;
    }
    .lock {
        position: absolute;
        top: 1em;
        left: 0.3em;
        color: #fff;
        font-size: large;
    }
    @media screen and (max-width: 600px) {
        .icon {
            width: 3em;
        }
        .lock {
            top: 0.7em;
            left: 0.05em;
        }
    }
</style>
