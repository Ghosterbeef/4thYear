const config = {
    attributes: true,
    childList: true,
    subtree: true,
    characterData: true,
};

const collapse = {
    mounted: (el, binding) => {
        const wrapper = el
        wrapper.style.overflow = 'hidden'
        wrapper.style.maxHeight = binding.value ? 'null' : '0px'
        wrapper.style.transition = 'max-height 0.2s ease'

        const setMaxHeight = () => {
            const {scrollHeight} = wrapper
            if (wrapper.dataset.collapsed)
                if (!JSON.parse(wrapper.dataset.collapsed)) {
                    wrapper.style.maxHeight = 0
                } else {
                    wrapper.style.maxHeight = `${scrollHeight}px`
                }
        };
        el.observer = new MutationObserver(setMaxHeight)
        el.observer.observe(el, config);
    },
    updated: (el, binding) => {
        el.dataset.collapsed = binding.value;
    },
    unmounted: (el) => {
        el.observer.disconnect();
    },
}

export default collapse
