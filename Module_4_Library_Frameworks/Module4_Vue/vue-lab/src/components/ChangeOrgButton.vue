<template>
  <button class="button" type="button" @click.stop="changeOrg()">
    Change Organization
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    changeOrg(): void {
      this.$emit("change-org");
    },
  },
});
</script>

<style></style>
