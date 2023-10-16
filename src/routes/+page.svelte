<script lang="ts">
  import TextField from "$lib/components/TextField.svelte";
  import { createForm } from "felte";
  import * as zod from "zod";
  import { validator } from "@felte/validator-zod";
  import { reporter } from "@felte/reporter-svelte";
  import ValidationMessage from "$lib/components/ValidationMessage.svelte";

  const schema = zod.object({
    text: zod.string().min(1, { message: "text必須です。" }),
    email: zod.string().min(1, { message: "emailは必須です。" }),
  });

  const { form, data, isValid } = createForm({
    extend: [validator({ schema }), reporter],
  });

  const onSubmit = () => {
    console.log($data);
    console.log($isValid);
  };
</script>

<form use:form>
  <TextField name="text" label="text" />
  <TextField name="email" label="email" />
  <button on:click={onSubmit}>submit</button>

  <div>
    validation: {$isValid ? "OK" : "NG"}
  </div>

  <div>
    <ValidationMessage name="text" />
    <ValidationMessage name="email" />
  </div>
</form>
