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

    export let avatar = {
        id: 10000016,
        image: "https://upload-bbs.mihoyo.com/game_record/genshin/character_image/UI_AvatarIcon_Diluc@2x.png",
        icon: "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Diluc.png",
        name: "迪卢克",
        element: "Pyro",
        fetter: 10,
        level: 90,
        rarity: 5,
        weapon: {
            id: 12502,
            name: "狼的末路",
            icon: "https://upload-bbs.mihoyo.com/game_record/genshin/equip/UI_EquipIcon_Claymore_Wolfmound.png",
            type: 11,
            rarity: 5,
            level: 90,
            promote_level: 6,
            type_name: "双手剑",
            desc: "狼的骑士所使的大剑。原本只是城中铁匠赠予的厚重的铁片，却在他与狼的情谊中，获得神话般的力量。",
            affix_level: 1,
        },
        reliquaries: [
            {
                id: 80543,
                name: "魔女的炎之花",
                icon: "https://upload-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15006_4.png",
                pos: 1,
                rarity: 5,
                level: 20,
                set: {
                    id: 2150061,
                    name: "炽烈的炎之魔女",
                    affixes: [
                        {
                            activation_number: 2,
                            effect: "获得15%火元素伤害加成。",
                        },
                        {
                            activation_number: 4,
                            effect: "超载、燃烧反应造成的伤害提升40%，蒸发、融化反应的加成系数提高15%。施放元素战技后的10秒内，2件套的效果提高50%，该效果最多叠加3次。",
                        },
                    ],
                },
                pos_name: "生之花",
            },
            {
                id: 80524,
                name: "魔女常燃之羽",
                icon: "https://upload-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15006_2.png",
                pos: 2,
                rarity: 5,
                level: 20,
                set: {
                    id: 2150061,
                    name: "炽烈的炎之魔女",
                    affixes: [
                        {
                            activation_number: 2,
                            effect: "获得15%火元素伤害加成。",
                        },
                        {
                            activation_number: 4,
                            effect: "超载、燃烧反应造成的伤害提升40%，蒸发、融化反应的加成系数提高15%。施放元素战技后的10秒内，2件套的效果提高50%，该效果最多叠加3次。",
                        },
                    ],
                },
                pos_name: "死之羽",
            },
            {
                id: 80553,
                name: "魔女破灭之时",
                icon: "https://upload-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15006_5.png",
                pos: 3,
                rarity: 5,
                level: 20,
                set: {
                    id: 2150061,
                    name: "炽烈的炎之魔女",
                    affixes: [
                        {
                            activation_number: 2,
                            effect: "获得15%火元素伤害加成。",
                        },
                        {
                            activation_number: 4,
                            effect: "超载、燃烧反应造成的伤害提升40%，蒸发、融化反应的加成系数提高15%。施放元素战技后的10秒内，2件套的效果提高50%，该效果最多叠加3次。",
                        },
                    ],
                },
                pos_name: "时之沙",
            },
            {
                id: 73513,
                name: "渡火者的醒悟",
                icon: "https://upload-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_14003_1.png",
                pos: 4,
                rarity: 5,
                level: 20,
                set: {
                    id: 2140031,
                    name: "渡过烈火的贤人",
                    affixes: [
                        {
                            activation_number: 2,
                            effect: "火元素抗性提高40%。",
                        },
                        {
                            activation_number: 4,
                            effect: "对处于火元素影响下的敌人造成的伤害提升35%。",
                        },
                    ],
                },
                pos_name: "空之杯",
            },
            {
                id: 80533,
                name: "焦灼的魔女帽",
                icon: "https://upload-bbs.mihoyo.com/game_record/genshin/equip/UI_RelicIcon_15006_3.png",
                pos: 5,
                rarity: 5,
                level: 20,
                set: {
                    id: 2150061,
                    name: "炽烈的炎之魔女",
                    affixes: [
                        {
                            activation_number: 2,
                            effect: "获得15%火元素伤害加成。",
                        },
                        {
                            activation_number: 4,
                            effect: "超载、燃烧反应造成的伤害提升40%，蒸发、融化反应的加成系数提高15%。施放元素战技后的10秒内，2件套的效果提高50%，该效果最多叠加3次。",
                        },
                    ],
                },
                pos_name: "理之冠",
            },
        ],
        constellations: [
            {
                id: 161,
                name: "罪罚裁断",
                icon: "https://upload-bbs.mihoyo.com/game_record/genshin/constellation_icon/UI_Talent_S_Diluc_01.png",
                effect: "对生命值高于50%的敌人，迪卢克造成的伤害提高15%。",
                is_actived: false,
                pos: 1,
            },
            {
                id: 162,
                name: "炙热余烬",
                icon: "https://upload-bbs.mihoyo.com/game_record/genshin/constellation_icon/UI_Talent_S_Diluc_02.png",
                effect: "迪卢克受到伤害时，攻击力提高10%，攻击速度提高5%，持续10秒。\\n该效果至多叠加3次，每1.5秒只能触发一次。",
                is_actived: false,
                pos: 2,
            },
            {
                id: 163,
                name: "钢铁炽焰",
                icon: "https://upload-bbs.mihoyo.com/game_record/genshin/constellation_icon/UI_Talent_U_Diluc_01.png",
                effect: "<color=#FFD780FF>逆焰之刃</color>的技能等级提高3级。\\n至多提升至15级。",
                is_actived: false,
                pos: 3,
            },
            {
                id: 164,
                name: "流火焦灼",
                icon: "https://upload-bbs.mihoyo.com/game_record/genshin/constellation_icon/UI_Talent_S_Diluc_03.png",
                effect: "有节奏地释放<color=#FFD780FF>逆焰之刃</color>可以大幅提升造成的伤害。\\n施放<color=#FFD780FF>逆焰之刃</color>的2秒后，使下一段逆焰之刃的伤害提高40%，持续2秒。",
                is_actived: false,
                pos: 4,
            },
            {
                id: 165,
                name: "昭告黎明的火之鸟",
                icon: "https://upload-bbs.mihoyo.com/game_record/genshin/constellation_icon/UI_Talent_U_Diluc_02.png",
                effect: "<color=#FFD780FF>黎明</color>的技能等级提高3级。\\n至多提升至15级。",
                is_actived: false,
                pos: 5,
            },
            {
                id: 166,
                name: "清算黑暗的炎之剑",
                icon: "https://upload-bbs.mihoyo.com/game_record/genshin/constellation_icon/UI_Talent_S_Diluc_04.png",
                effect: "施放<color=#FFD780FF>逆焰之刃</color>后，接下来6秒内的2次普通攻击速度提升30%，造成的伤害提高30%。\\n此外，逆焰之刃不再重置普通攻击连击段数。",
                is_actived: false,
                pos: 6,
            },
        ],
        actived_constellation_num: 0,
        costumes: [],
    };
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
                .replace(/\\n/, "<br />")}
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
