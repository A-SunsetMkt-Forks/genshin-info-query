<script>
    import {
        NumberInput,
        Button,
        Dropdown,
        Grid,
        Column,
        Row,
    } from "carbon-components-svelte";
    import { goto } from "$app/navigation";
    import { createEventDispatcher } from "svelte";
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    const dispatch = createEventDispatcher();

    async function sendRequest() {
        //执行完此函数，就会修改router
        isLoading = true;
        const res = await fetch(server, {
            method: "POST",
            body: JSON.stringify({
                target_uid: uid,
                region,
                cookie: cookies,
                action,
            }),
        });

        const obj = await res.json();
        if (obj.success) {
            ({ time, data } = obj);
        } else ({ msg } = obj);
        if (uid !== Number($page.params.uid)) goto("/" + action + "/" + uid);
        isLoading = false;
        dispatch("load", { cookies, server, uid });
    }

    function lsValue(item) {
        let value = localStorage.getItem(item);
        if (value == "undefined" || value == "null") return "";
        return value;
    }

    onMount(() => {
        // 获取数据，并触发ready时间，供外部获取server
        cookies = lsValue("COOKIES");
        server = lsValue("SERVER") || "/api";
        uid = Number($page.params.uid);
        if (uid > 10000000) sendRequest();
        else uid = 100010001;
        dispatch("ready", { cookies, server, uid });
    });

    // 导出信息，外部通过bind同步获取以下数据
    export let msg;
    export let data;
    export let time;
    export let action;
    export let isLoading;

    let uid;
    let server;
    let cookies;
    let region_id = 0;
    $: region = region_id == 0 ? "cn_gf01" : "cn_qd01";
</script>

<Grid>
    <Row>
        <Column sm={4} md={8} lg={16}>
            <NumberInput
                min={100000000}
                max={999999999}
                bind:value={uid}
                helperText="待查询的uid"
                label="请输入uid："
                invalidText="请输入正确的uid！"
            />
        </Column>
        <Column sm={2} md={4} lg={8}>
            <Dropdown
                hideLabel
                titleText="Contact"
                bind:selectedIndex={region_id}
                items={[
                    { id: "0", text: "官服" },
                    { id: "1", text: "渠道" },
                ]}
            />
        </Column>
        <Column sm={2} md={4} lg={4}>
            <Button on:click={sendRequest}>确定</Button>
        </Column></Row
    >
</Grid>
