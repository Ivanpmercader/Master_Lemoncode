<template>
  <div
    class="grid member-container card"
    :class="{ 'pair-card': pairCard, 'scale-card': !detailCard }"
  >
    <div v-if="member" class="flex flex-column">
      <div class="card-image-container">
        <img
          class="image"
          :src="`${member.avatar_url}`"
          :alt="`${member.login}`"
        />
      </div>
      <h2>
        {{ member.login }}
      </h2>
      <p>
        <span class="grey-text">Author: </span>
        <strong>{{ member.id }}</strong>
      </p>
      <p>
        <span class="grey-text">Publisher: </span>
        {{ member.avatar_url }}
      </p>
    </div>
    <div v-if="!member"><p>Empty Member Data to show in card</p></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Member } from "@/types";

export default defineComponent({
  props: {
    member: {
      type: Object as PropType<Member>,
      required: true,
      default: {} as Member,
    },
    pairCard: {
      type: Boolean,
      default: false,
    },
    detailCard: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style></style>
