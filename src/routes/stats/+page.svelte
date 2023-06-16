<script lang="ts">
    export let data;
</script>
{#if data}
<div>
    {#each Object.entries(data.data) as [key, value]}
        <div>{key}</div>
    {/each}
</div>
{/if}