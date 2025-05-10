<script>
    import Arch from "./Arch.svelte";
    import Todo from "./Todo.svelte";
    import {currentView} from "./stores";

</script>

<div>
    {#if $currentView === "arch"}
        <Arch />
    
    {:else if $currentView === "todo"}
        <Todo/>
    {/if}
</div>