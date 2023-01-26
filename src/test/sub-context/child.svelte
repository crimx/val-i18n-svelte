<script lang="ts">
  import { useTranslate } from "../../lib";
  import Grandchild from "./grandchild.svelte";

  const t = useTranslate();
</script>

<div class="context">
  <h1 class="child">{$t("title")}</h1>

  <Grandchild />
</div>
