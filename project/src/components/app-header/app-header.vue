<template>
    <div class="app-header">
        <nav>
            <container class="flex-row">
                <a href='/' id="logo"><img src="/images/logo.png"></a>

                <a href='/'><div id="title">@phyrus/vue</div></a>

                <div class="flex-grow"/>

                <ul id="menu">
                    <li><a :href="getDocsLink()">Docs</a></li>
                </ul>
            </container>
        </nav>
    </div>
</template>

<script lang="ts" src="./app-header.ts"></script>
<style lang="scss" src="./app-header.scss"></style>
