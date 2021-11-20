<script lang="ts">
    import "carbon-components-svelte/css/white.css";
    import Header from "$lib/header/Header.svelte";
    import { Content, Grid } from "carbon-components-svelte";
</script>

<Header />

<main>
    <Content>
        <Grid>
            <slot />
        </Grid>
    </Content>
</main>

<footer>
    <p>
        Powered by Svelte & Made by <a href="https://github.com/YieldRay/">YieldRay</a>
    </p>
</footer>

<style>
    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
        box-sizing: border-box;
    }

    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 40px;
    }

    footer a {
        font-weight: bold;
    }

    @media (min-width: 480px) {
        footer {
            padding: 40px 0;
        }
    }
</style>
