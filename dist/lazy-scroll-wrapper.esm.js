(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();







var component = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lazy"},[_vm._v(" asdasdasd "),(_vm.isVisited)?_vm._t("default"):_vm._e()],2)},staticRenderFns: [],
    name: 'LazyScrollWrapper',
    data: function () { return ({
        isVisited: false,
    }); },
    props: {
        options: {
            type: Object,
            default: function () { return ({
                rootMargin: '300px',
                threshold: 0.1
            }); }
        }
    },
    mounted: function mounted() {
        var this$1 = this;

        var intersectionObserver = new IntersectionObserver(function (entries) {
            this$1.isVisited = entries[0] && entries[0].isIntersecting;
        }, this.options);
        intersectionObserver.observe(this.$el);
    }
};

// Import vue component

// Declare install function executed by Vue.use()
function install(Vue) {
    if (install.installed) { return; }
    install.installed = true;
    Vue.component('LazyScrollWrapper', component);
}

// Create module definition for Vue.use()
var plugin = {
    install: install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
var GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

export default component;
export { install };
