import '../LapStyle.css'
import '../DeskStyle.css'

function Laptop() {

    function click() {

        const altura = window.innerHeight;
        const largura = window.innerWidth;
        $('.f11').css({
            'display': 'none'
        });
        $('#iconReact').css({ 'display': 'none' });
        $('#laptop').css({ 'width': largura, 'height': altura });
        $('#tela').css({
            'width': largura, 'height': altura, 'border': 'none', 'border-radius': '0%', 'background-size': '101% 100%'
        });
        $('.teclado').css({ 'height': '0px' });

        if (largura < altura) {
            alert('Vire o seu dispositivo!');
        }
        // COSTUMIZAR O ALERT COM O SWEETALERT

        //UPA NO GITHUB

    }

    return (
        <div className='global'>
            <div className="tamanho">
                <h1 className='f11'>F11 for a better experience. <br /> (fullscreen)</h1>
                <div id="laptop">
                    <div id="tela" onClick={click}>
                        <img src="./img/iconReact.png" id="iconReact" />
                    </div>
                    <div className="teclado"></div>
                </div>
            </div>
        </div >
    )
}

export default Laptop;
