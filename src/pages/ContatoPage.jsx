


function ContatoPage (){
    return(
        <section>
            <form class="forms" action="https://api.staticforms.xyz/submit" method="post">

                <input type="hidden" name="accessKey" value="4440f7f8-d27e-46e7-844c-3c4a98e4513e"/>
                <input type="hidden" name="redirectTo" value="https://thanku-ladingpage.netlify.app"/> 

                <h1 class="emailEmoji">📧☕</h1>
                <h3 class="f-h3">Vamos começar um bate-papo.<br/>Indicações, dúvidas, feedback, projetos...
                    <strong class="change-color"><br/>fala comigo!</strong></h3>
                <div>
                    <input name="name" placeholder="Nome" type="text" required maxlength="40" minlength="3"/>
                </div>

                <div>
                    <input name="email" placeholder="E-mail" type="email" required maxlength="40"/>
                </div>

                <div>
                    <input name="subject" placeholder="Assunto" type="text" maxlength="25"/>
                </div>

                <div>
                    <textarea name="message" placeholder="Sua mensagem" required maxlength="300"></textarea>
                </div>

                <div>
                    <button class="botao3" type="submit">Enviar</button>
                </div>
                </form>
        </section>
    )
}
export default ContatoPage