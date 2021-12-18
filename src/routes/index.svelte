<script>
    import {
        Button,
        Icon,
        Modal,
        TextArea,
        Tile,
        ToastNotification,
    } from "carbon-components-svelte";
    import Settings32 from "carbon-icons-svelte/lib/Settings32";
    import { onMount } from "svelte";
    import { server as defaultServer } from "../app-config.json";
    function lsValue(item) {
        let value = localStorage.getItem(item);
        if (value == "undefined" || value == "null") return "";
        return value;
    }
    onMount(() => {
        cookies = lsValue("COOKIES");
        if (!lsValue("SERVER")) localStorage.setItem("SERVER", defaultServer);
        server = lsValue("SERVER") || defaultServer;
    });
    let openCookie = false;
    let openServer = false;
    let cookies;
    let server;
</script>

<br />
<br />
<br />
<Tile style="height: 100%">
    <div style="padding:2em">
        <h1>INFO QUERY!</h1>
        <p>这是一个由Svelte和Carbon UI构建的界面</p>
        <p>
            因为暂未做适配，浏览器需要支持
            <a href="https://caniuse.com/mdn-javascript_statements_import">
                import特性
            </a>才能运行此网页
        </p>
        <ToastNotification
            lowContrast
            kind="error"
            title="注意"
            subtitle="目前米游社api貌似只返回8个人物了"
        />
    </div>
    <Button on:click={() => (openCookie = true)}
        ><Icon render={Settings32} /> Cookie Settings
    </Button>
    <Button on:click={() => (openServer = true)} kind="secondary"
        ><Icon render={Settings32} /> Server Settings
    </Button>
</Tile>

<Modal
    bind:open={openCookie}
    modalHeading="设置Cookies"
    primaryButtonText="确定"
    secondaryButtonText="取消"
    on:click:button--primary={() => {
        localStorage.setItem("COOKIES", cookies);
        openCookie = false;
    }}
    on:click:button--secondary={() => (openCookie = false)}
    on:open
    on:close
    on:submit
>
    <p>下面写入cookies，如果为空则使用服务器默认cookies</p>
    <TextArea
        bind:value={cookies}
        labelText="下面写入cookies"
        placeholder="如果cookies未空，则使用服务器默认cookies"
    />
</Modal>

<Modal
    bind:open={openServer}
    modalHeading="设置服务器"
    primaryButtonText="确定"
    secondaryButtonText="取消"
    on:click:button--primary={() => {
        localStorage.setItem("SERVER", server);
        openServer = false;
    }}
    on:click:button--secondary={() => (openServer = false)}
    on:open
    on:close
    on:submit
>
    <p>默认api为：{defaultServer}</p>
    <TextArea
        bind:value={server}
        labelText="下面写入服务器"
        placeholder="必填"
    />
</Modal>
