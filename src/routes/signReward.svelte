<script>
    import {
        Loading,
        SkeletonPlaceholder,
        ImageLoader,
        CopyButton,
        Grid,
        Row,
        Column,
        Tile,
    } from "carbon-components-svelte";

    import fetchData from "$lib/fetchData";
    let promise = fetchData({ action: "signReward" });
</script>

{#await promise}
    <Grid narrow padding>
        <Tile>
            <Row>
                {#each Array(30) as i}
                    <Column
                        sm={2}
                        md={2}
                        lg={4}
                        style="outline: 1px solid var(--cds-interactive-04)"
                    >
                        <SkeletonPlaceholder
                            style="height: 3rem; width: 6rem;"
                        />
                    </Column>
                {/each}
            </Row>
        </Tile>
    </Grid>

    <Loading />
{:then data}
    <Row>
        <h1>{data.month + 1}月</h1>
        <CopyButton text={JSON.stringify(data)} />
    </Row>
    <br />

    <Grid>
        <Tile>
            <Row>
                {#each data.awards as award}
                    <Column sm={1} md={1} lg={2}>
                        <ImageLoader ratio="1x1" src={award.icon} />
                    </Column>
                    <Column sm={1} md={1} lg={2}>
                        {award.name}x{award.cnt}
                    </Column>
                {/each}
            </Row>
        </Tile>
    </Grid>
{/await}
