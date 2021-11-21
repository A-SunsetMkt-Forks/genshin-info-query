<script>
    import AvatarCard from "$lib/characterIcon.svelte";
    import {
        InlineNotification,
        ExpandableTile,
        Tile,
        Tag,
        Column,
    } from "carbon-components-svelte";

    export let data;
</script>

<Column lg={8}>
    <Tile>
        <h1>深境螺旋战绩</h1>
        <small style="color: gray;">
            统计周期：{new Date(
                Number(data.start_time) * 1000
            ).toLocaleDateString()}-{new Date(
                Number(data.end_time) * 1000
            ).toLocaleDateString()}
        </small>
    </Tile>
    {#if data.is_unlock}
        <Tile style="background-color:#1d2538;border-radius:1em;padding:1em 0">
            <div
                style="color:#d6c099;text-align:center;font-size:x-large;margin-bottom:.4em"
            >
                挑战回顾
            </div>

            <p class="outstand" style="color: #fff;font-size:small;">
                最深抵达 {data.max_floor} 战斗次数{data.total_battle_times} 挑战成功次数{data.total_win_times}
                ⚛{data.total_star}
            </p>
            <span>
                <p class="desc">出战次数</p>
                <center style="overflow-x: scroll;white-space:nowrap;">
                    {#each data.reveal_rank as char}
                        <AvatarCard avatar={char} />
                    {/each}
                </center>
            </span>
            <p class="desc">战斗数据榜</p>
            <!--group-->
            <div class="group outstand">
                <span>
                    <small>击破数</small>
                    {#each data.defeat_rank as char}
                        <small>{char.value}</small>
                        <img
                            src={char.avatar_icon}
                            class="icon"
                            alt={char.value}
                        />
                    {/each}
                </span>
                <span>
                    <small>最强一击</small>
                    <small>{data.damage_rank[0].value}</small>
                    <img
                        src={data.damage_rank[0].avatar_icon}
                        class="icon"
                        alt={data.damage_rank[0].value}
                    />
                </span>
            </div>
            <!--group-->
            <div class="group">
                <span>
                    <small>承受伤害</small>
                    {#each data.take_damage_rank as char}
                        <small>{char.value}</small>
                        <img
                            src={char.avatar_icon}
                            class="icon"
                            alt={char.value}
                        />
                    {/each}
                </span>
                <span>
                    <small>元素战技释放次数</small>
                    {#each data.normal_skill_rank as char}
                        <small>{char.value}</small>
                        <img
                            src={char.avatar_icon}
                            class="icon"
                            alt={char.value}
                        />
                    {/each}
                </span>
            </div>
            <!--group-->
            <div class="group outstand">
                <span>
                    <small>元素爆发释放次数</small>
                    {#each data.energy_skill_rank as char}
                        <small>{char.value}</small>
                        <img
                            src={char.avatar_icon}
                            class="icon"
                            alt={char.value}
                        />
                    {/each}
                </span>
                <span />
            </div>
        </Tile>

        <!--floors-->
        <div style="height:1em" />

        {#each data.floors.reverse() as floor}
            <ExpandableTile
                tileExpandedLabel="收起"
                tileCollapsedLabel="展开"
                style="padding:0"
            >
                <div slot="above" style="padding:1em">
                    <Tag type="purple">
                        {floor.index.toString().padStart(2, "0")}
                    </Tag>
                    <span style="font-size:larger;"
                        >&nbsp;&nbsp;&nbsp;深境螺旋第{floor.index}层</span
                    >
                    <span style="float:right"
                        >⚛ {floor.star}/{floor.max_star}</span
                    >
                </div>
                <div slot="below" style="padding:1em">
                    {#each floor.levels as level}
                        <p>第{level.index}间 ⚛ {level.star}/{level.max_star}</p>
                        {#each level.battles as battle, i}
                            <div style="font-weight: lighter;font-size:x-small">
                                {#if i === 0}上半{/if}{#if i === 1}下半{/if}
                                {new Date(
                                    Number(battle.timestamp) * 1000
                                ).toLocaleString()}
                            </div>
                            {#each battle.avatars as avatar}
                                <AvatarCard {avatar} />
                            {/each}
                        {/each}
                    {/each}
                </div>
            </ExpandableTile>
        {/each}
    {:else}
        <InlineNotification
            lowContrast
            kind="error"
            title="Error:"
            subtitle="未解锁"
        />
    {/if}
</Column>

<style>
    ::-webkit-scrollbar {
        width: 0.5em;
        background-color: #1d2538;
        opacity: 0.8;
    }
    ::-webkit-scrollbar-button {
        background-color: #2d3e50;
    }
    .icon {
        width: 1.5em;
        margin: 0;
    }
    .group {
        font-weight: lighter;
        background-color: #1d2538;
        overflow: hidden;
        padding: 0 1em;
        margin: 0.5em 0;
        text-align: center;
    }
    .group small {
        font-size: xx-small;
    }
    .group > span {
        display: inline-block;
        width: 48%;
    }
    .group small {
        color: #fff;
    }
    span > small + small {
        padding-left: 1em;
    }
    .outstand {
        background-color: #334455;
        text-align: center;
        padding: 0.2em;
        margin: 0.3em 0;
    }
    .desc {
        color: #d6c099;
        padding: 0.2em 1em;
        font-weight: lighter;
    }
</style>
