<script>
    import UidPicker from "$lib/uidPicker.svelte";
    import DataBlock from "$lib/dataBlock.svelte";
    import {
        Loading,
        DataTable,
        ImageLoader,
        ProgressBar,
    } from "carbon-components-svelte";
    import {
        Tabs,
        Tab,
        TabContent,
        Tile,
        Tag,
        TextArea,
        InlineNotification,
    } from "carbon-components-svelte";
    import { Grid, Row, Column } from "carbon-components-svelte";
    import WorldExplore from "$lib/worldExplore.svelte";
    let msg = "请点击确认以查询";
    let success;
    let time;
    let data = {};
    let isLoading;
</script>

<h1>游戏信息</h1>
<br />

<UidPicker
    bind:success
    bind:msg
    bind:data
    bind:time
    bind:isLoading
    action="gameInfo"
/>

{#if isLoading}
    <Loading />
{:else if data.stats}
    <!--数据总览-->
    <Grid padding>
        <Row>
            <Tile style="width:100%">
                <div style="font-size:xx-large;font-weight:lighter">
                    数据总览
                </div>
            </Tile>
        </Row>
        <Row
            style="border: #d4bc8e solid .2em;background-color: #f8f8f8;margin-bottom:1em"
        >
            <DataBlock
                title="活跃天数"
                subtitle={data.stats.active_day_number}
            />
            <DataBlock
                title="成就达成数"
                subtitle={data.stats.achievement_number}
            />
            <DataBlock title="获得角色数" subtitle={data.stats.avatar_number} />
            <DataBlock
                title="解锁传送点"
                subtitle={data.stats.way_point_number}
            />
            <DataBlock title="风神瞳" subtitle={data.stats.anemoculus_number} />
            <DataBlock title="岩神瞳" subtitle={data.stats.geoculus_number} />
            <DataBlock
                title="雷神瞳"
                subtitle={data.stats.electroculus_number}
            />
            <DataBlock title="解锁秘境" subtitle={data.stats.domain_number} />
            <DataBlock title="深境螺旋" subtitle={data.stats.spiral_abyss} />
            <DataBlock
                title="华丽宝箱数"
                subtitle={data.stats.luxurious_chest_number}
            />
            <DataBlock
                title="珍贵宝箱数"
                subtitle={data.stats.precious_chest_number}
            />
            <DataBlock
                title="精致宝箱数"
                subtitle={data.stats.exquisite_chest_number}
            />
            <DataBlock
                title="普通宝箱数"
                subtitle={data.stats.common_chest_number}
            />
            <DataBlock
                title="奇馈宝箱数"
                subtitle={data.stats.magic_chest_number}
            />
            <DataBlock title="win_rate" subtitle={data.stats.win_rate} />
        </Row>
    </Grid>

    <!--世界-->
    <div style="overflow-x: scroll;white-space:nowrap">
        {#each data.world_explorations as world}
            <WorldExplore {world} style="margin:0 1em" />
        {/each}
    </div>

    <!--洞天-->
    <Tile>
        <Tabs>
            {#each data.homes as home}
                <Tab label={home.name} />
            {/each}
            <div slot="content">
                {#each data.homes as home}
                    <TabContent>
                        <ProgressBar
                            value={home.level}
                            max={10}
                            labelText={home.comfort_level_name}
                            helperText={"信任等阶: " + home.level}
                        />
                        <ImageLoader src={home.icon} ratio="16x9" />
                        <img
                            src={home.comfort_level_icon}
                            alt={home.comfort_level_name}
                            style="float:left;width:2em"
                        />
                        <Tag>最高洞天仙力:{home.comfort_num}</Tag>
                        <Tag>获得摆件数:{home.item_num}</Tag>
                        <Tag>历史访客数:{home.visit_num}</Tag>
                        <div style="clear:both" />
                    </TabContent>
                {/each}
            </div>
        </Tabs>
    </Tile>

    <!--角色-->
    <DataTable
        title="角色"
        description="角色数据"
        sortable
        expandable
        headers={[
            { key: "name", value: "角色" },
            { key: "level", value: "等级" },
            { key: "actived_constellation_num", value: "解锁命座" },
            { key: "fetter", value: "好感度" },
            { key: "element", value: "元素" },
            { key: "rarity", value: "稀有度" },
        ]}
        rows={data.avatars}
    >
        <div slot="expanded-row" let:row>
            <Grid>
                <Row>
                    <Column sm={1} md={2} lg={2}>
                        <img src={row.image} alt={row.name} width="50" />
                    </Column>
                    <Column sm={3} md={4} lg={8}>
                        <TextArea rows={2} value={JSON.stringify(row)} />
                    </Column>
                </Row>
            </Grid>
        </div>
    </DataTable>
{/if}
{#if !success && !isLoading}
    <InlineNotification
        lowContrast
        kind="error"
        title="Error:"
        subtitle={msg}
    />
{/if}
