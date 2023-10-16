<script lang="ts">
  import { ValidationMessage } from "@felte/reporter-svelte";

  export let name: string;
</script>

<ValidationMessage for={name} let:messages>
  <ul style="color: red;">
    {#if Array.isArray(messages)}
      {#each messages as message}
        {#if message != null}
          <li>{message}</li>
        {/if}
      {/each}
    {:else if messages != null}
      <li>{messages}</li>
    {/if}
  </ul>
</ValidationMessage>
