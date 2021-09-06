// Конфигурация observer (за какими изменениями наблюдать)
const config = {
    attributes: true,
    childList: true,
    subtree: true,
    characterData: true,
};

const collapse = {
    mounted: (el, binding) => {
        const wrapper = el
        wrapper.style.transition = 'max-height 0s ease-out'
        wrapper.style.overflow = 'hidden'
        wrapper.style.maxHeight = binding.value ? 'null' : '0px'
        wrapper.style.transition = 'max-height 0.2s ease-out'

        // Колбэк-функция при срабатывании мутации
        const setMaxHeight = () => {
            const {scrollHeight} = wrapper
            if (wrapper.dataset.collapsed)
                if (!JSON.parse(wrapper.dataset.collapsed)) {
                    wrapper.style.maxHeight = 0
                } else {
                    wrapper.style.maxHeight = `${scrollHeight}px`
                }
        };

        // Создаём экземпляр наблюдателя с указанной функцией колбэка
        el.observer = new MutationObserver(setMaxHeight);

        // Начинаем наблюдение за настроенными изменениями целевого элемента
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
