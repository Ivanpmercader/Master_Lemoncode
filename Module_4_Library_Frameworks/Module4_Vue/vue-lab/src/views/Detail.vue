<template>
  <section class="flex align-items-center justify-content-center cards-wrapper">
    <MemberCard :member="member" :detailCard="true" />
  </section>
  <section>
    <router-link :to="'/'">
      <button class="button" type="button">Back to Member List</button>
    </router-link>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MemberCard from "@/components/MemberCard.vue";
import { Member } from "@/types";
import { RouteLocation } from "vue-router";
import { memberService } from "@/services/member-service";
import { mapGetters } from "vuex";

export default defineComponent({
  components: {
    MemberCard,
  },
  data: () => ({
    member: {} as Member,
  }),
  computed: {
    login(): string {
      return String((this.$route as RouteLocation).params.login);
    },
    ...mapGetters("OrganizationModule", ["getOrgNameState"]),
  },
  created() {
    memberService
      .getMember(this.login, this.getOrgNameState)
      .then((member: Member | undefined) => {
        if (member) this.member = member;
      });
  },
});
</script>

<style></style>
