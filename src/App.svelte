<script>
    import Arch from "./Arch.svelte";
    import Todo from "./Todo.svelte";
    import {currentView} from "./stores";

</script>

{#if $currentView === "arch"}
    <Arch />

{:else if $currentView === "todo"}
    <Todo/>
{/if}