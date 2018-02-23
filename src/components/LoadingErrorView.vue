<template>
    <div>
        <div class="loading" v-if="loading">
            <v-progress-circular indeterminate color="amber"></v-progress-circular>
        </div>

        <v-alert type="error" v-if="error" :value="error">
            {{ error.stack }}
        </v-alert>
    </div>
</template>

<script>
export default {
  name: 'LoadingErrorView',
  props: {
    loading: Boolean,
    error: Error
  }
}
</script>

<style scoped>
.loading {
    text-align: center;
}
</style>
