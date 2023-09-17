<template>
    <app-header/>
    <main :id="$attrs.id" class="default-main">
        <div id="main-bg" class="bgimage" style="background-image: url('/images/background.jpg')" />
        <slot/>
    </main>
    <app-footer/>
</template>

<script lang="ts" src="./default.ts"></script>
<style lang="scss" src="./default.scss"></style>