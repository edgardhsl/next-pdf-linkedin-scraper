<template>
    <section class="bg-white dark:bg-gray-900 my-10" id="contato">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center dark:text-white">Contate-nos!</h2>
            <div class="mb-4 bg-blue-500 px-10 h-2 w-1 rounded mx-auto"></div>
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-600 dark:text-gray-400 sm:text-xl">Potencialize o talento dos seus colaboradores! Fale conosco e descubra como nossas soluções em pedagogia empresarial podem ajudar sua empresa a alcançar resultados ainda melhores.</p>
            <form action="#" class="space-y-8">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium dark:text-gray-300">Seu e-mail</label>
                    <input type="email" id="email"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="seumail@dominio.com" required>
                </div>
                <div class="sm:col-span-2 relative">
                    <label for="subject"
                        class="block mb-2 text-sm font-medium dark:text-gray-300">Assunto</label>
                    <input type="text" id="subject" ref="subject" maxlength="30"
                        class="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Diga-nos como podemos lhe ajudar" required>
                    <div ref="counterMessage" class="absolute w-full text-end text-sm">0/30</div>
                </div>
                <div class="sm:col-span-2 relative">
                    <label for="message" class="block mb-2 text-sm font-medium dark:text-gray-400">Sua mensagem</label>
                    <textarea ref="message" id="message" rows="6" maxlength="250"
                        class="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Dúvidas ou Sugestões? Deixe-nos uma mensagem..."></textarea>
                    <div ref="counterMessage" class="absolute w-full text-end text-sm">0/250</div>
                </div>
                <Button color="info" :href="'#sobre-mim'">Enviar</Button>
            </form>
        </div>
    </section>
</template>
<script>
export default {
    mounted() {
        this.$lottie.loadAnimation({
            container: this.$refs.lottie, // the dom element that will contain the animation
            loop: true,
            autoplay: true,
            path: new URL('/lottie/115241-feedback.json', import.meta.url).href, // the path to the animation json
        })

        const subject = this.$refs.subject;
        const message = this.$refs.message;
        const counterSubject = this.$refs.counterSubject;
        const counterMessage = this.$refs.counterMessage;

        subject.addEventListener('input', () => {
            counterSubject.innerText = `${subject.value.length}/${subject.getAttribute('maxLength')}`;
        });

        message.addEventListener('input', () => {
            counterMessage.innerText = `${message.value.length}/${message.getAttribute('maxLength')}`;
        });
    }
}
</script>
<style lang="">
    
</style>