<script lang="ts">
  import Textfield from "@smui/textfield";
  import HelperText from "@smui/textfield/helper-text";
  import { createField } from "felte";

  export let name: string;
  export let value: string = "";
  export let label: string = "";

  const { field, onInput, onBlur } = createField(name);

  $: onInput(value);
</script>

<div use:field on:blur={onBlur} role="textbox">
  <Textfield bind:value {label} />
</div>
