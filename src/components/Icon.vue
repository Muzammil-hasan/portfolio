<template>
  <span
    class="inlineSVGIcon"
    v-html="require(`!html-loader!../../../dist/icons/${name}.svg`)"
  ></span>
</template>

<script>
export default {
  props: ["name"],
};
</script>
