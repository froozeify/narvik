<script setup>
  const props = defineProps({
    level: {
      type: String,
      required: true
    }
  })

  let badges = [];
  if (props.level === 'admin') {
    badges.push('Administrateur')
  } else if (props.level === 'supervisor') {
    badges.push('Administrateur')
    badges.push('Superviseur / Permanent')
  } else if (props.level === 'badger') {
    badges.push('Administrateur')
    badges.push('Superviseur / Permanent')
    badges.push('Badgeur')
  }


</script>

<template>
  <div class="VPBadge RoleLevelRoot">
    <Badge v-for="badge in badges" :type="badge === 'Administrateur' ? 'danger' : 'tip'" :text="badge" />
  </div>
</template>

<style>
  .RoleLevelRoot {
    display: inline-flex;
    transform: none;
    vertical-align: middle !important;
    margin-left: 0;
    padding-left: 0 !important;
    gap: 4px;
  }
</style>
