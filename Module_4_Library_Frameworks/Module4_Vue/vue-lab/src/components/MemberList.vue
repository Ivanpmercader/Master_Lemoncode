<template>
  <section class="toolbar-wrapper">
    <div class="flex align-items-center justify-content-between">
      <h1>Members</h1>
      Total Members: {{ totalMembers }}
    </div>
  </section>
  <section class="search-wrapper">
    <div class="flex justify-content-center">
      <input type="text" v-model="orgKeyword" />
      <ChangeOrgButton @changeOrg="onChangeOrg()" />
    </div>
  </section>
  <section class="cards-wrapper">
    <div class="flex-wrap align-items-center justify-content-center gap20">
      <div v-for="(member, i) in memberList" :key="member.id">
        <router-link :to="`/detail/${member.login}`">
          <MemberCard :member="member" :pairCard="i % 2 === 0" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { memberService } from "@/services/member-service";
import { Member } from "@/types/index";
import MemberCard from "@/components/MemberCard.vue";
import ChangeOrgButton from "@/components/ChangeOrgButton.vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  components: {
    MemberCard,
    ChangeOrgButton,
  },
  data() {
    return {
      memberList: [] as Member[],
      orgKeyword: "" as string,
    };
  },
  async created() {
    this.orgKeyword = this.getOrgNameState;
    this.memberList = await memberService.get(this.getOrgNameState);
  },
  computed: {
    totalMembers(): number {
      return this.memberList.length;
    },
    ...mapGetters("OrganizationModule", ["getOrgNameState"]),
  },
  methods: {
    ...mapActions("OrganizationModule", ["addNewValueToState"]),
    async onChangeOrg() {
      this.addNewValueToState(this.orgKeyword); //Metodo del store que setea el state
      this.memberList = await memberService.get(this.getOrgNameState);
    },
  },
});
</script>

<style></style>
