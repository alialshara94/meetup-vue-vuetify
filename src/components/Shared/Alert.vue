<template>
  <v-alert dismissible type="error" :value="true">{{ text }}</v-alert>
</template>

<script>
export default {
  props: ['text']
}
</script>
