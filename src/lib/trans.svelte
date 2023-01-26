<script lang="ts">
  export let message = "";

  const toSlices = (message: string): string[] => {
    const slices: string[] = [];
    const matchArgs = /{{(\S+?)}}/g;
    let slice: RegExpExecArray | null;
    let pointer = 0;
    while ((slice = matchArgs.exec(message))) {
      slices.push(message.slice(pointer, slice.index), slice[1]);
      pointer = slice.index + slice[0].length;
    }
    slices.push(message.slice(pointer));
    return slices;
  };

  $: slices = toSlices(message);
</script>

{#each slices as slice, index}
  {#if index % 2 === 0}
    {slice}
  {:else}
    <slot key={slice}>
      {`{{${slice}}}`}
    </slot>
  {/if}
{/each}
