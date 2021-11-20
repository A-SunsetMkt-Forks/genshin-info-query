<script>
    export let style = "";
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

<div class="container" on:click {style}>
    <img
        class="icon"
        src={avatar.icon}
        alt={avatar.name}
        class:yellow={avatar.rarity == 5}
        class:purple={avatar.rarity == 4}
    />
    <div style="position:absolute;bottom:1.1em;color:#ffcc33;">
        {"★".repeat(avatar.rarity>5?5:avatar.rarity)}
    </div>
    <div class="lv">Lv.{avatar.level}</div>
</div>

<style>
    .lv {
        text-align: center;
        color: #fff;
        padding: 0.1em 0;
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
