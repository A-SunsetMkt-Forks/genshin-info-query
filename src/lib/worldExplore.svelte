<script>
    export let world;
    export let style = "";
</script>

<div class="outside" {style}>
    <div class="inside">
        <div class="icon">
            <img src={world.icon} alt="icon" />
        </div>
        <div class="info">
            <div class="name">{world.name}</div>
            <div class="text">
                探索度：{(world.exploration_percentage * 0.1).toFixed(1)}%
            </div>
            <div class="progress">
                <div
                    class="progress-bar"
                    style={`width:${(
                        world.exploration_percentage * 0.1
                    ).toFixed(3)}%`}
                />
            </div>
            {#if world.level}
                <div class="tag">
                    <span> 声望等级：{world.level} </span>
                </div>
            {/if}
            {#if world.offerings.length > 0}
                <div class="text" style="margin-bottom: .2em;">
                    {world.offerings[0].name}等级：{world.offerings[0].level}
                </div>
            {/if}
        </div>
    </div>
</div>

<style>
    .outside {
        padding: 0.4em;
        background: #3a4467;
        display: inline-block;
        border-radius: 0.3em;
    }
    .inside {
        border: #605f6d solid 0.15em;
        padding: 0.2em;
        border-radius: 0.3em;
        color: #f7f7f7;
        display: block;
    }
    .icon {
        display: inline-block;
        width: 30%;
        margin-right: 1.5em;
    }
    .icon img {
        width: 6em;
        height: 6em;
    }
    .info {
        margin: auto;
        display: inline-block;
        width: 58%;
    }
    .progress {
        width: 100%;
        height: 0.5em;
        border-radius: 0.2em;
        margin: 0.5em 0 0.6em;
        background: #282f49;
    }

    .progress-bar {
        border-radius: 0.2em;
        height: 100%;
        background-color: #d3bd8e;
    }

    .progress,
    .outside {
        box-shadow: 0.1em 0.1em 0.1em #3a4467;
    }
    .tag {
        text-align: left;
        padding-bottom: 0.7em;
    }
    .tag span {
        background-color: #e9e5dc;
        border-radius: 0.3em;
        color: #3a4467;
        padding: 0.05em 0.5em;
    }

    .text {
        text-align: left;
    }
    .name {
        text-align: center;
        padding-bottom: 0.5em;
        font-size: medium;
        font-weight: lighter;
    }
</style>
