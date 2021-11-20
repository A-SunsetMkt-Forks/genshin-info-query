<script>
    import { Modal } from "carbon-components-svelte";
    import Reliquarie from "$lib/reliquarie.svelte";
    import Constellation from "$lib/constellation.svelte";
    import ac from "$lib/affixesCalculate";
    let isOpenRel = false;
    let isOpenCon = false;
    let isOpenWea = false;
    let modalRel;
    let modalCon = {};

    export let avatar = {};
</script>

<div class="container">
    <img class="bg" src={avatar.image} alt={avatar.name} />
    <div class="reliquaries">
        <Reliquarie rel={avatar.weapon} on:click={() => (isOpenWea = true)} />
        {#each avatar.reliquaries as rel (rel.id)}
            <div>
                <Reliquarie
                    {rel}
                    on:click={() => {
                        isOpenRel = true;
                        modalRel = rel;
                    }}
                />
            </div>
        {/each}
    </div>
    <div class="image-holder" on:click={() => (isOpenRel = true)}>
        {avatar.element}
        {avatar.name} 好感度等级：{avatar.fetter}
    </div>
    <div class="constellations">
        {#each avatar.constellations as con}
            <div>
                <Constellation
                    {con}
                    on:click={() => {
                        isOpenCon = true;
                        modalCon = con;
                    }}
                />
            </div>
        {/each}
    </div>
    <div class="weapon" />
</div>

<Modal passiveModal bind:open={isOpenRel} modalHeading="圣遗物">
    {#if typeof modalRel == "object"}
        <Reliquarie rel={modalRel} style="float:left;margin-right:1em" />
        <span style="font-size:large">{modalRel.name}</span>
        <span
            style="background-color:#494949;color:#fff;border-radius:.2em;margin:0 .4em;padding: 0 .3em"
            >+{modalRel.level}</span
        >
        <br />
        <span
            style="color:#ffcc33;font-size:x-large;text-shadow: 1px 1px 1px grey;"
        >
            {"★".repeat(modalRel.rarity)}
        </span>
        类型：{modalRel.pos_name} && 位置：{modalRel.pos}
        <div style="clear:both" />
        {modalRel.set.name}：
        {#if ac(avatar.reliquaries, modalRel.set.id) >= modalRel.set.affixes[0].activation_number}
            <div style="color:#d3bd8e">
                [✔] {modalRel.set.affixes[0].activation_number}件套：
                {modalRel.set.affixes[0].effect}
            </div>
        {:else}
            <div style="color:#c0c5c8">
                [✘] {modalRel.set.affixes[0].activation_number}件套：
                {modalRel.set.affixes[0].effect}
            </div>
        {/if}
        {#if modalRel.set.affixes.length > 1}
            {#if ac(avatar.reliquaries, modalRel.set.id) >= modalRel.set.affixes[1].activation_number}
                <div style="color:#d3bd8e">
                    [✔] {modalRel.set.affixes[1].activation_number}件套：
                    {modalRel.set.affixes[1].effect}
                </div>
            {:else}
                <div style="color:#c0c5c8">
                    [✘] {modalRel.set.affixes[1].activation_number}件套：
                    {modalRel.set.affixes[1].effect}
                </div>
            {/if}
        {/if}
    {/if}
</Modal>

<Modal passiveModal bind:open={isOpenCon} modalHeading="命之座">
    {#if typeof modalCon == "object"}
        <Constellation con={modalCon} style="float:left;margin-right:1em" />
        <span style="font-size:large">{modalCon.name}</span>
        <br />命之座
        <span style="color:#ffcc33;margin:0 .4em">
            第{modalCon.pos}层
        </span>
        <div style="clear:both" />
        {#if modalCon.effect}
            {@html modalCon.effect
                .replace(/<color/g, "<font color")
                .replace(/<\/color>/g, "</font>")
                .replace(/\\n/g, "<br />")}
        {/if}
    {/if}
</Modal>

<Modal passiveModal bind:open={isOpenWea} modalHeading="武器">
    <Reliquarie rel={avatar.weapon} style="float:left;margin-right:1em" />
    <span style="font-size:large">{avatar.weapon.name}</span>
    <span
        style="background-color:#494949;color:#fff;border-radius:.2em;margin:0 .4em;padding: 0 .3em"
        >+{avatar.weapon.level}</span
    >
    <span style="color: #d3bd8e;">精炼{avatar.weapon.affix_level}阶</span>
    <br />
    <span
        style="color:#ffcc33;font-size:x-large;text-shadow: 1px 1px 1px grey;"
    >
        {"★".repeat(avatar.weapon.rarity)}
    </span>
    <div style="clear:both" />
    {avatar.weapon.desc}
</Modal>

<style>
    .container {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
    }
    .bg {
        width: 100%;
        height: auto;
        opacity: 0.7;
    }
    .reliquaries {
        flex-grow: 1;
        position: absolute;
        top: 1em;
        left: 0;
    }
    .constellations {
        flex-grow: 1;
        position: absolute;
        top: 1em;
        right: 0;
    }
    .image-holder {
        flex-grow: 2;
        position: absolute;
        top: 0;
    }
</style>
