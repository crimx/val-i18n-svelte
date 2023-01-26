<script lang="ts">
  import { useTranslate } from "../../lib";
  import Grandchild from "./grandchild.svelte";

  const t = useTranslate();
</script>

<h1>{$t("hello")}</h1>
<Grandchild />
