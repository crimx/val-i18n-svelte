<script>
  import { Trans } from "../../lib";
</script>

<Trans message={"{{a}}b{{c}}"} let:key>
  {#if key === "a"}
    <span>A</span>
  {:else if key === "c"}
    <i>C</i>
  {/if}
</Trans>
