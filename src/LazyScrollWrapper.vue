<template>
    <div class="lazy">
        asdasdasd
        <slot v-if="isVisited"></slot>
    </div>
</template>

<script>
    export default {
        name: 'LazyScrollWrapper',
        data: () => ({
            isVisited: false,
        }),
        props: {
            options: {
                type: Object,
                default: () => ({
                    rootMargin: '300px',
                    threshold: 0.1
                })
            }
        },
        mounted() {
            const intersectionObserver = new IntersectionObserver((entries) => {
                this.isVisited = entries[0] && entries[0].isIntersecting;
            }, this.options);
            intersectionObserver.observe(this.$el);
        }
    };
</script>
