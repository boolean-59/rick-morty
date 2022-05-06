<template>
    <div class="character text-center">
        <img class="img-fluid mb-3" :src="info.image" :alt="info.name" />
        <h4>{{ info.name }}</h4>
        <div>{{ info.origin }}</div>
        <div class="font-weight-bold">{{ info.species }}</div>
    </div>
</template>

<script>
export default {
    name: 'CharacterComponent',
    props: ['info'],
};
</script>

<style scoped lang="scss">
@import '@/styles/vars';

h4 {
    text-transform: capitalize;
    &::after {
        content: '';
        display: block;
        width: 40px;
        height: 1px;
        margin: 1rem auto;
        background: currentColor;
    }
}

img {
    border-radius: 50%;
    box-shadow: 0 0 6px 3px rgba(#000, 0.15);
}
</style>
