<script context="module">
    export const ssr = false;
</script>

<script>
    import { page } from "$app/stores";
    import {
        Header,
        HeaderNav,
        HeaderNavItem,
        HeaderNavMenu,
        SideNav,
        SideNavItems,
        SideNavMenu,
        SideNavMenuItem,
        SideNavLink,
        SideNavDivider,
        SkipToContent,
    } from "carbon-components-svelte";
    import Search16 from "carbon-icons-svelte/lib/Search16";
    import Home16 from "carbon-icons-svelte/lib/Home16";
    import Pin16 from "carbon-icons-svelte/lib/Pin16";
    import Gift16 from "carbon-icons-svelte/lib/Gift16";
    import Flash16 from "carbon-icons-svelte/lib/Flash16";

    let isSideNavOpen = false;
    $: uid = $page.query.get("uid") || "100010001";
</script>

<Header company="Genshin" platformName="INFO QUERY" bind:isSideNavOpen>
    <div slot="skip-to-content">
        <SkipToContent />
    </div>

    <HeaderNav>
        <HeaderNavItem href="/" text="首页" />
        <HeaderNavItem href="/selfSign" text="cookie签到" />
        <HeaderNavItem href="/selfInfo" text="cookie信息" />
        <HeaderNavItem href="/signReward" text="签到奖励" />
        <HeaderNavItem href={"/gameInfo?uid=" + uid} text="游戏信息" />
        <HeaderNavItem href={"/charDetail?uid=" + uid} text="角色信息" />
        <HeaderNavMenu text="深渊">
            <HeaderNavItem href={"/spiralAbyss1?uid=" + uid} text="本期" />
            <HeaderNavItem href={"/spiralAbyss2?uid=" + uid} text="上期" />
        </HeaderNavMenu>
    </HeaderNav>

    <SideNav bind:isOpen={isSideNavOpen} rail>
        <SideNavItems>
            <SideNavLink
                icon={Home16}
                href="/"
                text="首页"
                isSelected={$page.path == "/"}
            />
            <SideNavLink
                icon={Pin16}
                href="/selfSign"
                text="cookie签到"
                isSelected={$page.path.startsWith("/selfSign")}
            />
            <SideNavLink
                icon={Pin16}
                href="/selfInfo"
                text="cookie信息"
                isSelected={$page.path.startsWith("/selfInfo")}
            />
            <SideNavLink
                icon={Gift16}
                href="/signReward"
                text="签到奖励"
                isSelected={$page.path.startsWith("/signReward")}
            />
            <SideNavLink
                icon={Search16}
                href={"/gameInfo?uid=" + uid}
                text="游戏信息"
                isSelected={$page.path.startsWith("/gameInfo")}
            />
            <SideNavLink
                icon={Search16}
                href={"/charDetail?uid=" + uid}
                text="角色信息"
                isSelected={$page.path.startsWith("/charDetail")}
            />
            <SideNavMenu icon={Flash16} text="深渊">
                <SideNavMenuItem
                    href={"/spiralAbyss1?uid=" + uid}
                    text="本期"
                />
                <SideNavMenuItem
                    href={"/spiralAbyss2?uid=" + uid}
                    text="上期"
                />
            </SideNavMenu>
            <SideNavDivider />
        </SideNavItems>
    </SideNav>
</Header>
