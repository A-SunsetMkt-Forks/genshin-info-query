<script lang="ts">
    import { ToastNotification } from "carbon-components-svelte";
    export let seen = false;
    export let title: string;
    export let subtitle: string;
    export let kind = "info-square" as "info-square";
</script>

{#if seen}
    <div class="float">
        <ToastNotification
            lowContrast
            {title}
            {subtitle}
            {kind}
            caption={new Date().toLocaleString()}
        />
    </div>
{/if}

<style>
    .float {
        position: fixed;
        top: 0;
        left: 0;
    }
</style>
