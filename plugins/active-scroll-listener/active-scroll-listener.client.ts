export default function ({ }, inject: any) {
    const onWheel = (onCallback: Function) => {
        const OFFSET_TOP = 0;
        const OFFSET_BOTTOM = 300;

        const headings = Array.from(document.getElementsByClassName('page')) as HTMLElement[];

        document.addEventListener('wheel', handleScroll);

        function handleScroll() {
            headings.forEach(updateActiveHeading);
        }

        function updateActiveHeading(ha: HTMLElement, index: number = 0, arr: Element[] = []) {
            if (isHeadingInViewport(ha)) {
                console.log("dsadsa");
                updateHistory(ha.id);                
                if(onCallback) onCallback();                 
                return true;
            }
        }

        function isHeadingInViewport(el: HTMLElement) {
            const top = el.offsetTop;
            const bottom = top + el.offsetHeight;
            const scrollTop = window.pageYOffset;
            const viewportTop = scrollTop - OFFSET_TOP;
            const viewportBottom = scrollTop + OFFSET_BOTTOM;

            return top <= viewportBottom && bottom >= viewportTop;
        }

        function updateHistory(id: string) {
            const location = window.location.toString().split('#')[0];
            history.replaceState(null, '', location + '#' + id);
            window.dispatchEvent(new Event('hashchange'));
        }
        
    }

    inject('onWheel', onWheel);
}