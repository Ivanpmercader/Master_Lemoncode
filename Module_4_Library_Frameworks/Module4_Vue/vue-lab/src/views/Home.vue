<template>
  <div class="home">
    <MemberList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MemberList from "@/components/MemberList.vue";

export default defineComponent({
  name: "Home",
  components: {
    MemberList,
  },
});
</script>
